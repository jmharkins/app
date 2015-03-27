stkApp.factory('playerShots', function ($http) { 
    return function (id){
         return $http({
            method: 'GET',
            url: 'api/players/' + id
         });

    }
});