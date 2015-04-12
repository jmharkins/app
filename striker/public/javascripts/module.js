var stkApp = angular.module('stkApp', ['ngRoute'])

stkApp.config(['$routeProvider', function($routeProvider) {
	// $locationProvider.hashPrefix('');
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main',
			controller: 'mainControl'
		})
		.when('/player/:id', {
			templateUrl: 'partials/player',
			controller: 'playControl'
		})
		.when('/team/:id', {
			templateUrl: 'partials/team',
			controller: 'teamControl'
		});
}]);


stkApp.directive('shotChart', function(){
	return { restrict: 'E',
			 scope: {
			 	idata: "&",
			 	lgavgs: "&"
			 },
			 link: function(scope, element){ 
			 	var w = 840;
				var h = 440;
				var padding = 20;
				var l_w = 20;

				var syb_w = 50
				var syb_h = 100;
				var pen_w = 130;
				var pen_h = 230;
				var lgavgs = scope.lgavgs();

				var xScale = d3.scale.linear()
				.domain([100,0])
				.range([padding, w - padding]);   
				var yScale = d3.scale.linear()
				 .domain([0,100])
				 .range([h - padding, padding]);

				var color = d3.scale.quantile()
				    .range(colorbrewer.RdYlGn[5].reverse())
				    // .interpolate(d3.interpolateLab);

				var radius = d3.scale.sqrt()
				    .range([3, 20]);

				// var cradius = d3.scale.sqrt()
				//     .range([0,12])

				// hex function
				var hexbin = d3.hexbin()
					.size([w, h])
					.radius(20)
					.x(function(d) { return xScale(d.coords.start_x)})
					.y(function(d) { return yScale(d.coords.start_y)});
					
				//Create SVG element
				var svg = d3.select(element[0])
				.append("svg")
				.attr("width", w)
				.attr("height", h);

				svg.append("clipPath")
					.attr("id", "clip")
					.append("rect")
					.attr("class", "mesh")
					.attr("width", w - (padding * 2))
					.attr("height", h - (padding * 2))
					.attr("transform", function(d) { return "translate(" + padding + "," + padding + ")"; });



				scope.$watchCollection('idata()', function(newData, oldData) {
				        // bin dataset               
				        var hexdata = hexbin(newData);  
				        // color.domain(hexdata.map(function(h) { return h.length}))
						hexdata = hexdata.map(function(bin) {
						  var n = bin.length;
						  var ot = 0;
						  var gc = 0;
						  bin.map(function(shot) {
						    if (shot.type === "goal"  || shot.type === "save") {
						      ot++;
						    }
						    if(shot.type === "goal") {
						      gc++
						    }
						  });
						  var avgrate = lgavgs.filter(function(a) { return bin.x === a.x && bin.y === a.y})
						  bin.ot_rate = (ot / n);
						  bin.adj_rate =  (ot / n) - avgrate[0].ot_rate
						  bin.goalcount = gc;
						  return bin;
						});
						color.domain([-0.25, -0.10, 0.10, 0.25])
						radius.domain([1, 30])
						// cradius.domain([0, d3.max(hexdata, function(h) { return h.goalcount})])         
				        // // add hexbins    

				        svg.append("g")
				            .attr("clip-path", "url(#clip)")
				            .selectAll(".hexagon")
				            .data(hexdata)
				            .enter().append("path")
				            .attr("class", "hexagon")
				            .attr("d", function(d) { return hexbin.hexagon(radius(d.length)) } )
				            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
				            .style("fill", function(d) { return color(d.adj_rate); });                     

				        // svg.append("g")
				        //    .selectAll("goalcircle")
				        //    .data(hexdata)
				        //    .enter().append("circle")
				        //    .attr("class", "goalcircle")
				        //    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
				        //    .attr("r", function(d) { return cradius(d.goalcount)});



				        ///////////////////////
				            // add lines 
				            
				        // field outline    
				              svg.append("rect")
				                   .attr("id","outline")
				                   .attr("x", padding)
				                   .attr("y", padding)
				                   .attr("width", w - padding * 2)
				                   .attr("height", h - padding * 2)
				                   .attr("fill", "none")
				                   .attr("stroke", "black");  
				            // six yard box 
				                svg.append("rect")
				                   .attr("id","six")
				                   .attr("x", padding)
				                   .attr("y", (h - syb_h)/2)
				                   .attr("width", syb_w)
				                   .attr("height", syb_h)
				                   .attr("fill", "none")
				                   .attr("stroke", "black");
				            // penalty area
				                svg.append("rect")
				                   .attr("id","penarea")
				                   .attr("x", padding)
				                   .attr("y", (h - pen_h)/2)
				                   .attr("width", pen_w)
				                   .attr("height", pen_h)
				                   .attr("fill", "none")
				                   .attr("stroke", "black");  
				            // 50 yd line
				                 svg.append("line")
				                   .attr("id","half")
				                   .attr("x1", w/2)
				                   .attr("x2", w/2)
				                   .attr("y1", padding)
				                   .attr("y2", h-padding)
				                   .attr("stroke", "black");  
				            // center circle
				                svg.append("circle")
				                   .attr("cx", w/2)
				                   .attr("cy", h/2)
				                   .attr("r", 60)
				                   .attr("fill", "none")
				                   .attr("stroke", "black");
				})
			 }}
})