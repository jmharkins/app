stkApp.controller('mainControl', ['$scope', '$routeParams', function ($scope , $routeParams){}])

stkApp.controller('playControl', ['$scope', '$location', '$routeParams', 'playerShots', 'playerList', function ($scope, $location, $routeParams, playerShots, playerList){
	this.params = $routeParams;
	var pID = this.params.id;
	console.log("controller load")
	$scope.plist = [];
	$scope.curPlayer = {};
	playerList().success(function(data){
		$scope.plist = data 
		$scope.curPlayer = $scope.plist.filter(function(d) { return d._id.player_id === pID })[0]
	})
	$scope.$watch("curPlayer", function(newValue, oldValue) {
		if(oldValue._id ) {
		var url = '/player/' + newValue._id.player_id
		console.log("modelchange")
		$location.path(url)
		}
	})
	$scope.chartData = [];
	$scope.lgavgs = [{"x":225.16660498395402,"y":210,"ot_rate":0.38613861386138615},{"x":69.28203230275508,"y":180,"ot_rate":0.42483660130718953},{"x":103.92304845413263,"y":240,"ot_rate":0.4546952224052718},{"x":259.80762113533154,"y":270,"ot_rate":0.36363636363636365},{"x":121.2435565298214,"y":210,"ot_rate":0.4939271255060729},{"x":121.2435565298214,"y":150,"ot_rate":0.4370860927152318},{"x":190.5255888325765,"y":270,"ot_rate":0.373134328358209},{"x":277.12812921102034,"y":240,"ot_rate":0.2391304347826087},{"x":86.60254037844385,"y":210,"ot_rate":0.43509865005192105},{"x":86.60254037844385,"y":270,"ot_rate":0.4557377049180328},{"x":225.16660498395402,"y":150,"ot_rate":0.35106382978723405},{"x":242.4871130596428,"y":180,"ot_rate":0.32160804020100503},{"x":138.56406460551017,"y":240,"ot_rate":0.4622356495468278},{"x":51.96152422706631,"y":270,"ot_rate":0.4539877300613497},{"x":173.2050807568877,"y":300,"ot_rate":0.40375586854460094},{"x":155.88457268119893,"y":210,"ot_rate":0.4850498338870432},{"x":121.2435565298214,"y":270,"ot_rate":0.5085910652920962},{"x":69.28203230275508,"y":240,"ot_rate":0.4855195911413969},{"x":86.60254037844385,"y":150,"ot_rate":0.5204918032786885},{"x":155.88457268119893,"y":270,"ot_rate":0.3888888888888889},{"x":103.92304845413263,"y":180,"ot_rate":0.5032537960954447},{"x":190.5255888325765,"y":150,"ot_rate":0.3567073170731707},{"x":34.64101615137754,"y":240,"ot_rate":0.6428571428571429},{"x":207.84609690826525,"y":180,"ot_rate":0.41896024464831805},{"x":190.5255888325765,"y":90,"ot_rate":0.5},{"x":173.2050807568877,"y":240,"ot_rate":0.4008810572687225},{"x":51.96152422706631,"y":210,"ot_rate":0.6223776223776224},{"x":225.16660498395402,"y":270,"ot_rate":0.34843205574912894},{"x":259.80762113533154,"y":210,"ot_rate":0.32},{"x":155.88457268119893,"y":150,"ot_rate":0.36645962732919257},{"x":138.56406460551017,"y":180,"ot_rate":0.4908256880733945},{"x":242.4871130596428,"y":240,"ot_rate":0.3535714285714286},{"x":103.92304845413263,"y":120,"ot_rate":0.43333333333333335},{"x":17.32050807568877,"y":210,"ot_rate":0.8620689655172413},{"x":207.84609690826525,"y":240,"ot_rate":0.39705882352941174},{"x":34.64101615137754,"y":180,"ot_rate":0.44339622641509435},{"x":69.28203230275508,"y":120,"ot_rate":0.4583333333333333},{"x":242.4871130596428,"y":300,"ot_rate":0.30120481927710846},{"x":225.16660498395402,"y":330,"ot_rate":0.3783783783783784},{"x":294.44863728670913,"y":150,"ot_rate":0.16666666666666666},{"x":277.12812921102034,"y":300,"ot_rate":0.21052631578947367},{"x":138.56406460551017,"y":120,"ot_rate":0.4095238095238095},{"x":207.84609690826525,"y":300,"ot_rate":0.3879310344827586},{"x":103.92304845413263,"y":300,"ot_rate":0.48863636363636365},{"x":51.96152422706631,"y":150,"ot_rate":0.5757575757575758},{"x":69.28203230275508,"y":300,"ot_rate":0.5432098765432098},{"x":138.56406460551017,"y":300,"ot_rate":0.4270833333333333},{"x":190.5255888325765,"y":210,"ot_rate":0.45689655172413796},{"x":242.4871130596428,"y":120,"ot_rate":0.29577464788732394},{"x":34.64101615137754,"y":300,"ot_rate":0.3333333333333333},{"x":173.2050807568877,"y":180,"ot_rate":0.4268292682926829},{"x":207.84609690826525,"y":120,"ot_rate":0.38125},{"x":138.56406460551017,"y":360,"ot_rate":0.5454545454545454},{"x":190.5255888325765,"y":330,"ot_rate":0.3157894736842105},{"x":173.2050807568877,"y":120,"ot_rate":0.3805309734513274},{"x":86.60254037844385,"y":330,"ot_rate":0.4375},{"x":207.84609690826525,"y":360,"ot_rate":0.14285714285714285},{"x":86.60254037844385,"y":90,"ot_rate":0.4},{"x":294.44863728670913,"y":210,"ot_rate":0.25},{"x":121.2435565298214,"y":90,"ot_rate":0.46153846153846156},{"x":277.12812921102034,"y":180,"ot_rate":0.29545454545454547},{"x":259.80762113533154,"y":150,"ot_rate":0.2413793103448276},{"x":225.16660498395402,"y":90,"ot_rate":0.4375},{"x":121.2435565298214,"y":330,"ot_rate":0.5},{"x":190.5255888325765,"y":30,"ot_rate":0.5},{"x":51.96152422706631,"y":330,"ot_rate":0.5},{"x":155.88457268119893,"y":330,"ot_rate":0.4583333333333333},{"x":346.4101615137754,"y":360,"ot_rate":0},{"x":259.80762113533154,"y":330,"ot_rate":0.2857142857142857},{"x":173.2050807568877,"y":60,"ot_rate":0.3333333333333333},{"x":242.4871130596428,"y":360,"ot_rate":0.5},{"x":381.051177665153,"y":120,"ot_rate":0},{"x":103.92304845413263,"y":360,"ot_rate":0.3333333333333333},{"x":311.76914536239786,"y":240,"ot_rate":0},{"x":294.44863728670913,"y":270,"ot_rate":0.45454545454545453},{"x":155.88457268119893,"y":90,"ot_rate":0.125},{"x":51.96152422706631,"y":90,"ot_rate":0},{"x":658.1793068761733,"y":120,"ot_rate":0},{"x":277.12812921102034,"y":120,"ot_rate":0.25},{"x":190.5255888325765,"y":390,"ot_rate":0.5},{"x":155.88457268119893,"y":390,"ot_rate":0.3333333333333333},{"x":311.76914536239786,"y":180,"ot_rate":0},{"x":17.32050807568877,"y":150,"ot_rate":0.75},{"x":34.64101615137754,"y":360,"ot_rate":1},{"x":207.84609690826525,"y":420,"ot_rate":0},{"x":363.7306695894642,"y":210,"ot_rate":0},{"x":17.32050807568877,"y":270,"ot_rate":0.4},{"x":433.0127018922193,"y":210,"ot_rate":0},{"x":484.9742261192856,"y":240,"ot_rate":0},{"x":433.0127018922193,"y":30,"ot_rate":1},{"x":294.44863728670913,"y":330,"ot_rate":0},{"x":277.12812921102034,"y":360,"ot_rate":1},{"x":311.76914536239786,"y":60,"ot_rate":0},{"x":398.3716857408417,"y":150,"ot_rate":0},{"x":398.3716857408417,"y":210,"ot_rate":0},{"x":259.80762113533154,"y":390,"ot_rate":0},{"x":398.3716857408417,"y":90,"ot_rate":0.5},{"x":346.4101615137754,"y":300,"ot_rate":0},{"x":329.08965343808666,"y":210,"ot_rate":0},{"x":398.3716857408417,"y":390,"ot_rate":0},{"x":744.7818472546171,"y":210,"ot_rate":1},{"x":86.60254037844385,"y":390,"ot_rate":0},{"x":398.3716857408417,"y":270,"ot_rate":0},{"x":259.80762113533154,"y":90,"ot_rate":0},{"x":467.6537180435968,"y":90,"ot_rate":0},{"x":450.33320996790803,"y":240,"ot_rate":0.5},{"x":311.76914536239786,"y":300,"ot_rate":1},{"x":381.051177665153,"y":240,"ot_rate":0.5},{"x":363.7306695894642,"y":30,"ot_rate":0},{"x":450.33320996790803,"y":180,"ot_rate":0},{"x":346.4101615137754,"y":120,"ot_rate":1},{"x":277.12812921102034,"y":60,"ot_rate":0},{"x":381.051177665153,"y":420,"ot_rate":0},{"x":173.2050807568877,"y":360,"ot_rate":1},{"x":363.7306695894642,"y":90,"ot_rate":0},{"x":363.7306695894642,"y":150,"ot_rate":0.6666666666666666},{"x":34.64101615137754,"y":120,"ot_rate":0.5},{"x":346.4101615137754,"y":60,"ot_rate":1},{"x":502.29473419497435,"y":150,"ot_rate":1},{"x":415.6921938165305,"y":240,"ot_rate":0},{"x":433.0127018922193,"y":150,"ot_rate":0},{"x":363.7306695894642,"y":330,"ot_rate":0.5},{"x":138.56406460551017,"y":60,"ot_rate":1},{"x":329.08965343808666,"y":270,"ot_rate":1},{"x":329.08965343808666,"y":330,"ot_rate":0},{"x":363.7306695894642,"y":390,"ot_rate":0},{"x":207.84609690826525,"y":60,"ot_rate":1},{"x":346.4101615137754,"y":240,"ot_rate":1},{"x":311.76914536239786,"y":120,"ot_rate":0}]
	playerShots(this.params.id).success(function(data) {
		console.log("datachange")
		$scope.chartData = data
	})
}])

stkApp.controller('teamControl', ['$scope','$routeParams', 'teamShots', function ($scope , $routeParams, teamShots){
	this.params = $routeParams;
	$scope.chartData = [];
	$scope.selectItems = ['Arsenal',"Aston Villa", "Chelsea"]
	// $scope.chartData = [{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"7","secs":"9","minsec":"429","coords":{"start_x":87.5,"start_y":61.5,"end_x":97.8,"end_y":53.1,"gmouth_y":52.4,"gmouth_z":4.4},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"58","secs":"4","minsec":"3484","coords":{"start_x":73,"start_y":30.3,"end_x":98,"end_y":50.2,"gmouth_y":49.9,"gmouth_z":13.9},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"79","secs":"1","minsec":"4741","coords":{"start_x":77,"start_y":34.5,"gmouth_y":59.4,"gmouth_z":16.7},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"13","secs":"3","minsec":"783","coords":{"start_x":75.6,"start_y":37.4,"end_x":94.9,"end_y":48.4,"gmouth_y":50.4,"gmouth_z":1.3},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"20","secs":"19","minsec":"1219","coords":{"start_x":89.5,"start_y":57.4,"gmouth_y":33.7,"gmouth_z":16.7},"method":"shot"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"33","secs":"11","minsec":"1991","uid":"1182828300","coords":{"start_x":91.9,"start_y":55,"gmouth_y":53.8,"gmouth_z":17.1},"method":"shot","is_penalty":0},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"81","secs":"9","minsec":"4869","coords":{"start_x":89.7,"start_y":71.1,"end_x":97.7,"end_y":52.5,"gmouth_y":46.7,"gmouth_z":17.1},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"34","secs":"3","minsec":"2043","coords":{"start_x":85.7,"start_y":48,"gmouth_y":19.4,"gmouth_z":2.8},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"77","secs":"21","minsec":"4641","coords":{"start_x":77.8,"start_y":35.1,"end_x":97.6,"end_y":51.3,"gmouth_y":52.2,"gmouth_z":22.8},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"86","secs":"44","minsec":"5204","injurytime_play":"0","coords":{"start_x":92.1,"start_y":60.7,"gmouth_y":32.6,"gmouth_z":4.2},"method":"headed"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"90","secs":"0","minsec":"5578","injurytime_play":"1","coords":{"start_x":90,"start_y":59.2,"end_x":95.5,"end_y":52.3,"gmouth_y":48.7,"gmouth_z":1.3},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"62","secs":"10","minsec":"3730","coords":{"start_x":78.2,"start_y":47.7,"end_x":96.7,"end_y":50.4,"gmouth_y":50.4,"gmouth_z":1.9},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"79","secs":"18","minsec":"4758","coords":{"start_x":75.6,"start_y":40.2,"end_x":94.5,"end_y":50.7,"gmouth_y":52.8,"gmouth_z":0.6},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"51","secs":"10","minsec":"3070","coords":{"start_x":69.9,"start_y":44,"gmouth_y":39.2,"gmouth_z":30.6},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"57","secs":"4","minsec":"3424","coords":{"start_x":75.1,"start_y":49.9,"end_x":99.1,"end_y":48.9,"gmouth_y":48.1,"gmouth_z":9.7},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"84","secs":"10","minsec":"5050","coords":{"start_x":91.1,"start_y":43.6,"gmouth_y":52.6,"gmouth_z":61.1},"method":"headed"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"42","secs":"17","minsec":"2537","injurytime_play":"0","coords":{"start_x":93.2,"start_y":34.5,"end_x":96.4,"end_y":40.8,"gmouth_y":50.5,"gmouth_z":1.4},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"56","secs":"52","minsec":"3412","coords":{"start_x":92.5,"start_y":71.1,"end_x":97.7,"end_y":52.7,"gmouth_y":46.5,"gmouth_z":5.6},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"75","secs":"22","minsec":"4522","coords":{"start_x":87,"start_y":43.4,"gmouth_y":30.7,"gmouth_z":26.4},"method":"shot"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"1","secs":"54","minsec":"114","uid":"370482933","coords":{"start_x":97.9,"start_y":47.1,"gmouth_y":47.4,"gmouth_z":0.6},"method":"shot","is_penalty":0},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"60","secs":"12","minsec":"3612","coords":{"start_x":91.4,"start_y":45.5,"gmouth_y":82.6,"gmouth_z":2.8},"method":"headed"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"86","secs":"52","minsec":"5212","injurytime_play":"0","coords":{"start_x":88.2,"start_y":31.7,"gmouth_y":43.8,"gmouth_z":22.2},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"7","secs":"53","minsec":"473","coords":{"start_x":86.6,"start_y":37.4,"end_x":99.1,"end_y":46.9,"gmouth_y":46.9,"gmouth_z":0.6},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"27","secs":"7","minsec":"1627","coords":{"start_x":73,"start_y":31.2,"end_x":98.8,"end_y":50,"gmouth_y":50.1,"gmouth_z":10.8},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"67","secs":"51","minsec":"4071","coords":{"start_x":95.4,"start_y":51.1,"end_x":99.8,"end_y":49.3,"gmouth_y":48.4,"gmouth_z":1.9},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"12","secs":"38","minsec":"758","coords":{"start_x":86.8,"start_y":54,"gmouth_y":60.6,"gmouth_z":88.9},"method":"headed"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"25","secs":"40","minsec":"1540","coords":{"start_x":91.5,"start_y":44.3,"gmouth_y":47.9,"gmouth_z":93.1},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"65","secs":"15","minsec":"3915","coords":{"start_x":87.4,"start_y":62.6,"gmouth_y":47.7,"gmouth_z":59.7},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"70","secs":"48","minsec":"4248","coords":{"start_x":93,"start_y":34.9,"gmouth_y":39.1,"gmouth_z":18.1},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"87","secs":"47","minsec":"5267","injurytime_play":"0","coords":{"start_x":94,"start_y":54.6,"gmouth_y":38.5,"gmouth_z":25},"method":"headed"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"85","secs":"18","minsec":"5118","injurytime_play":"0","coords":{"start_x":92.7,"start_y":46,"gmouth_y":38.5,"gmouth_z":1.4},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"64","secs":"58","minsec":"3898","coords":{"start_x":90.6,"start_y":58.3,"end_x":98.6,"end_y":52.9,"gmouth_y":50.8,"gmouth_z":37.3},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"90","secs":"0","minsec":"5508","injurytime_play":"1","coords":{"start_x":91.5,"start_y":58.8,"gmouth_y":58.9,"gmouth_z":77.8},"method":"headed"},{"type":"wood_work","player_id":"897","team_id":"34","action_type":"Attack","mins":"15","secs":"26","minsec":"926","coords":{"start_x":92.7,"start_y":49.3,"gmouth_y":48.5,"gmouth_z":39.9},"method":"headed"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"45","secs":"50","minsec":"2750","coords":{"start_x":77.6,"start_y":58.7,"gmouth_y":53.1,"gmouth_z":91.7},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"80","secs":"7","minsec":"4807","coords":{"start_x":89.4,"start_y":42.4,"end_x":98.5,"end_y":48.6,"gmouth_y":50,"gmouth_z":11.4},"method":"headed"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"1","secs":"40","minsec":"100","uid":"1951954445","coords":{"start_x":82.1,"start_y":68.6,"gmouth_y":45.5,"gmouth_z":15.2},"method":"shot","is_penalty":0},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"45","secs":"0","minsec":"2732","injurytime_play":"1","coords":{"start_x":73.9,"start_y":30.2,"gmouth_y":63.9,"gmouth_z":65.3},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"50","secs":"18","minsec":"3018","coords":{"start_x":78.6,"start_y":60.4,"end_x":95.2,"end_y":50.2,"gmouth_y":46.9,"gmouth_z":5.6},"method":"shot"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"8","secs":"19","minsec":"499","uid":"268546309","coords":{"start_x":86.2,"start_y":58.5,"gmouth_y":52.9,"gmouth_z":2.5},"method":"shot","is_penalty":0},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"58","secs":"59","minsec":"3539","coords":{"start_x":95.4,"start_y":53.4,"end_x":98.1,"end_y":53.4,"gmouth_y":53,"gmouth_z":4.2},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"87","secs":"34","minsec":"5254","injurytime_play":"0","coords":{"start_x":91,"start_y":60.2,"gmouth_y":45.7,"gmouth_z":61.1},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"21","secs":"10","minsec":"1270","coords":{"start_x":76.7,"start_y":31.6,"end_x":98.6,"end_y":47.3,"gmouth_y":47.5,"gmouth_z":25.9},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"33","secs":"41","minsec":"2021","coords":{"start_x":77.5,"start_y":35.1,"end_x":98.5,"end_y":48.7,"gmouth_y":50.3,"gmouth_z":3.2},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"65","secs":"51","minsec":"3951","coords":{"start_x":91.5,"start_y":52.8,"end_x":99.3,"end_y":48.4,"gmouth_y":48.9,"gmouth_z":10.1},"method":"headed"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"38","secs":"45","minsec":"2325","coords":{"start_x":87.7,"start_y":68.4,"gmouth_y":51.9,"gmouth_z":69.4},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"90","secs":"0","minsec":"5784","injurytime_play":"1","coords":{"start_x":95,"start_y":42.1,"gmouth_y":46.5,"gmouth_z":91.7},"method":"headed"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"47","secs":"40","minsec":"2860","uid":"188136327","coords":{"start_x":89.7,"start_y":65.5,"gmouth_y":52.9,"gmouth_z":2.5},"method":"shot","is_penalty":0},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"12","secs":"1","minsec":"721","coords":{"start_x":74,"start_y":56.4,"gmouth_y":40.1,"gmouth_z":1.4},"method":"shot"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"28","secs":"6","minsec":"1686","uid":"1109168936","coords":{"start_x":91.3,"start_y":38.2,"gmouth_y":53.3,"gmouth_z":5.7},"method":"shot","is_penalty":0},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"20","secs":"48","minsec":"1248","coords":{"start_x":76.6,"start_y":58.7,"gmouth_y":32.8,"gmouth_z":68.1},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"27","secs":"54","minsec":"1674","coords":{"start_x":88.3,"start_y":53.6,"end_x":99.3,"end_y":50.9,"gmouth_y":50,"gmouth_z":11.4},"method":"headed"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"55","secs":"28","minsec":"3328","coords":{"start_x":89.6,"start_y":72.8,"end_x":99.1,"end_y":55.2,"gmouth_y":54.2,"gmouth_z":22.8},"method":"shot"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"62","secs":"54","minsec":"3774","coords":{"start_x":88.6,"start_y":58.8,"end_x":98.8,"end_y":52.7,"gmouth_y":52.3,"gmouth_z":25.3},"method":"headed"},{"type":"save","player_id":"897","team_id":"34","action_type":"Attack","mins":"13","secs":"17","minsec":"797","coords":{"start_x":80.3,"start_y":71.5,"end_x":97.1,"end_y":54.2,"gmouth_y":50.7,"gmouth_z":2.5},"method":"shot"},{"type":"goal","player_id":"897","team_id":"34","action_type":"Attack","mins":"25","secs":"27","minsec":"1527","uid":"1376271374","coords":{"start_x":94.7,"start_y":59.4,"gmouth_y":53.6,"gmouth_z":8.9},"method":"shot","is_penalty":0},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"62","secs":"0","minsec":"3720","coords":{"start_x":94.5,"start_y":71,"gmouth_y":59.4,"gmouth_z":20.8},"method":"shot"},{"type":"off_target","player_id":"897","team_id":"34","action_type":"Attack","mins":"82","secs":"1","minsec":"4921","coords":{"start_x":79.2,"start_y":33.1,"gmouth_y":68.6,"gmouth_z":61.1},"method":"shot"}]
	$scope.lgavgs = [{"x":225.16660498395402,"y":210,"ot_rate":0.38613861386138615},{"x":69.28203230275508,"y":180,"ot_rate":0.42483660130718953},{"x":103.92304845413263,"y":240,"ot_rate":0.4546952224052718},{"x":259.80762113533154,"y":270,"ot_rate":0.36363636363636365},{"x":121.2435565298214,"y":210,"ot_rate":0.4939271255060729},{"x":121.2435565298214,"y":150,"ot_rate":0.4370860927152318},{"x":190.5255888325765,"y":270,"ot_rate":0.373134328358209},{"x":277.12812921102034,"y":240,"ot_rate":0.2391304347826087},{"x":86.60254037844385,"y":210,"ot_rate":0.43509865005192105},{"x":86.60254037844385,"y":270,"ot_rate":0.4557377049180328},{"x":225.16660498395402,"y":150,"ot_rate":0.35106382978723405},{"x":242.4871130596428,"y":180,"ot_rate":0.32160804020100503},{"x":138.56406460551017,"y":240,"ot_rate":0.4622356495468278},{"x":51.96152422706631,"y":270,"ot_rate":0.4539877300613497},{"x":173.2050807568877,"y":300,"ot_rate":0.40375586854460094},{"x":155.88457268119893,"y":210,"ot_rate":0.4850498338870432},{"x":121.2435565298214,"y":270,"ot_rate":0.5085910652920962},{"x":69.28203230275508,"y":240,"ot_rate":0.4855195911413969},{"x":86.60254037844385,"y":150,"ot_rate":0.5204918032786885},{"x":155.88457268119893,"y":270,"ot_rate":0.3888888888888889},{"x":103.92304845413263,"y":180,"ot_rate":0.5032537960954447},{"x":190.5255888325765,"y":150,"ot_rate":0.3567073170731707},{"x":34.64101615137754,"y":240,"ot_rate":0.6428571428571429},{"x":207.84609690826525,"y":180,"ot_rate":0.41896024464831805},{"x":190.5255888325765,"y":90,"ot_rate":0.5},{"x":173.2050807568877,"y":240,"ot_rate":0.4008810572687225},{"x":51.96152422706631,"y":210,"ot_rate":0.6223776223776224},{"x":225.16660498395402,"y":270,"ot_rate":0.34843205574912894},{"x":259.80762113533154,"y":210,"ot_rate":0.32},{"x":155.88457268119893,"y":150,"ot_rate":0.36645962732919257},{"x":138.56406460551017,"y":180,"ot_rate":0.4908256880733945},{"x":242.4871130596428,"y":240,"ot_rate":0.3535714285714286},{"x":103.92304845413263,"y":120,"ot_rate":0.43333333333333335},{"x":17.32050807568877,"y":210,"ot_rate":0.8620689655172413},{"x":207.84609690826525,"y":240,"ot_rate":0.39705882352941174},{"x":34.64101615137754,"y":180,"ot_rate":0.44339622641509435},{"x":69.28203230275508,"y":120,"ot_rate":0.4583333333333333},{"x":242.4871130596428,"y":300,"ot_rate":0.30120481927710846},{"x":225.16660498395402,"y":330,"ot_rate":0.3783783783783784},{"x":294.44863728670913,"y":150,"ot_rate":0.16666666666666666},{"x":277.12812921102034,"y":300,"ot_rate":0.21052631578947367},{"x":138.56406460551017,"y":120,"ot_rate":0.4095238095238095},{"x":207.84609690826525,"y":300,"ot_rate":0.3879310344827586},{"x":103.92304845413263,"y":300,"ot_rate":0.48863636363636365},{"x":51.96152422706631,"y":150,"ot_rate":0.5757575757575758},{"x":69.28203230275508,"y":300,"ot_rate":0.5432098765432098},{"x":138.56406460551017,"y":300,"ot_rate":0.4270833333333333},{"x":190.5255888325765,"y":210,"ot_rate":0.45689655172413796},{"x":242.4871130596428,"y":120,"ot_rate":0.29577464788732394},{"x":34.64101615137754,"y":300,"ot_rate":0.3333333333333333},{"x":173.2050807568877,"y":180,"ot_rate":0.4268292682926829},{"x":207.84609690826525,"y":120,"ot_rate":0.38125},{"x":138.56406460551017,"y":360,"ot_rate":0.5454545454545454},{"x":190.5255888325765,"y":330,"ot_rate":0.3157894736842105},{"x":173.2050807568877,"y":120,"ot_rate":0.3805309734513274},{"x":86.60254037844385,"y":330,"ot_rate":0.4375},{"x":207.84609690826525,"y":360,"ot_rate":0.14285714285714285},{"x":86.60254037844385,"y":90,"ot_rate":0.4},{"x":294.44863728670913,"y":210,"ot_rate":0.25},{"x":121.2435565298214,"y":90,"ot_rate":0.46153846153846156},{"x":277.12812921102034,"y":180,"ot_rate":0.29545454545454547},{"x":259.80762113533154,"y":150,"ot_rate":0.2413793103448276},{"x":225.16660498395402,"y":90,"ot_rate":0.4375},{"x":121.2435565298214,"y":330,"ot_rate":0.5},{"x":190.5255888325765,"y":30,"ot_rate":0.5},{"x":51.96152422706631,"y":330,"ot_rate":0.5},{"x":155.88457268119893,"y":330,"ot_rate":0.4583333333333333},{"x":346.4101615137754,"y":360,"ot_rate":0},{"x":259.80762113533154,"y":330,"ot_rate":0.2857142857142857},{"x":173.2050807568877,"y":60,"ot_rate":0.3333333333333333},{"x":242.4871130596428,"y":360,"ot_rate":0.5},{"x":381.051177665153,"y":120,"ot_rate":0},{"x":103.92304845413263,"y":360,"ot_rate":0.3333333333333333},{"x":311.76914536239786,"y":240,"ot_rate":0},{"x":294.44863728670913,"y":270,"ot_rate":0.45454545454545453},{"x":155.88457268119893,"y":90,"ot_rate":0.125},{"x":51.96152422706631,"y":90,"ot_rate":0},{"x":658.1793068761733,"y":120,"ot_rate":0},{"x":277.12812921102034,"y":120,"ot_rate":0.25},{"x":190.5255888325765,"y":390,"ot_rate":0.5},{"x":155.88457268119893,"y":390,"ot_rate":0.3333333333333333},{"x":311.76914536239786,"y":180,"ot_rate":0},{"x":17.32050807568877,"y":150,"ot_rate":0.75},{"x":34.64101615137754,"y":360,"ot_rate":1},{"x":207.84609690826525,"y":420,"ot_rate":0},{"x":363.7306695894642,"y":210,"ot_rate":0},{"x":17.32050807568877,"y":270,"ot_rate":0.4},{"x":433.0127018922193,"y":210,"ot_rate":0},{"x":484.9742261192856,"y":240,"ot_rate":0},{"x":433.0127018922193,"y":30,"ot_rate":1},{"x":294.44863728670913,"y":330,"ot_rate":0},{"x":277.12812921102034,"y":360,"ot_rate":1},{"x":311.76914536239786,"y":60,"ot_rate":0},{"x":398.3716857408417,"y":150,"ot_rate":0},{"x":398.3716857408417,"y":210,"ot_rate":0},{"x":259.80762113533154,"y":390,"ot_rate":0},{"x":398.3716857408417,"y":90,"ot_rate":0.5},{"x":346.4101615137754,"y":300,"ot_rate":0},{"x":329.08965343808666,"y":210,"ot_rate":0},{"x":398.3716857408417,"y":390,"ot_rate":0},{"x":744.7818472546171,"y":210,"ot_rate":1},{"x":86.60254037844385,"y":390,"ot_rate":0},{"x":398.3716857408417,"y":270,"ot_rate":0},{"x":259.80762113533154,"y":90,"ot_rate":0},{"x":467.6537180435968,"y":90,"ot_rate":0},{"x":450.33320996790803,"y":240,"ot_rate":0.5},{"x":311.76914536239786,"y":300,"ot_rate":1},{"x":381.051177665153,"y":240,"ot_rate":0.5},{"x":363.7306695894642,"y":30,"ot_rate":0},{"x":450.33320996790803,"y":180,"ot_rate":0},{"x":346.4101615137754,"y":120,"ot_rate":1},{"x":277.12812921102034,"y":60,"ot_rate":0},{"x":381.051177665153,"y":420,"ot_rate":0},{"x":173.2050807568877,"y":360,"ot_rate":1},{"x":363.7306695894642,"y":90,"ot_rate":0},{"x":363.7306695894642,"y":150,"ot_rate":0.6666666666666666},{"x":34.64101615137754,"y":120,"ot_rate":0.5},{"x":346.4101615137754,"y":60,"ot_rate":1},{"x":502.29473419497435,"y":150,"ot_rate":1},{"x":415.6921938165305,"y":240,"ot_rate":0},{"x":433.0127018922193,"y":150,"ot_rate":0},{"x":363.7306695894642,"y":330,"ot_rate":0.5},{"x":138.56406460551017,"y":60,"ot_rate":1},{"x":329.08965343808666,"y":270,"ot_rate":1},{"x":329.08965343808666,"y":330,"ot_rate":0},{"x":363.7306695894642,"y":390,"ot_rate":0},{"x":207.84609690826525,"y":60,"ot_rate":1},{"x":346.4101615137754,"y":240,"ot_rate":1},{"x":311.76914536239786,"y":120,"ot_rate":0}]
	teamShots(this.params.id).success(function(data) {
		$scope.chartData = data
	})
}])