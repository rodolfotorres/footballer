'use strict';

angular.module('footballer').factory('LeagueTable', function($resource){
  return $resource('http://api.football-data.org/alpha/soccerseasons/:id/leagueTable');
});

angular.module('footballer').factory('Teams', function($resource){
  return $resource('http://api.football-data.org/alpha/soccerseasons/:id/teams');
});

angular.module('footballer').factory('Leagues', function($resource){
  return $resource('/assets/data/leagues.json');
});

angular.module('footballer').service('leagueService', function($resource, $q, lodash){
  this.getLeague = function(id){
    return $q(function(resolve, reject){
      $resource('/assets/data/leagues.json').get(function(data){
        if(data){
          var league = lodash.find(data.leagues, {id: id});
          if(league){
            resolve(league);
          }
        }
        reject('League doesn\'t exist');
      });
    });
  };
});
