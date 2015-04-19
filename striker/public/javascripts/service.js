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

stkApp.factory('playerList', function ($http) {
    return function() { 
        return $http({
            method: 'GET',
            url: 'api/playerlist',
            cache: true
        })
    }
})

stkApp.factory('teamList', function ($http) {
    return function() { 
        return $http({
            method: 'GET',
            url: 'api/teamlist',
            cache: false
        })
    }
})