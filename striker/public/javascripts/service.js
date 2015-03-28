stkApp.factory('playerShots', function ($http) { 
    return function (id){
         return $http({
            method: 'GET',
            url: 'api/players/' + id
         });

    }
});

stkApp.factory('teamShots', function ($http) { 
    return function (id){
         return $http({
            method: 'GET',
            url: 'api/team/' + id
         });

    }
});