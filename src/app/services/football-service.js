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

angular.module('footballer').service('leagueService', function($resource){
  this.getLeague = function(id, callback){
    $resource('/assets/data/leagues.json').get(function(data){
      callback(data.leagues[0]);
    });
  };
});
