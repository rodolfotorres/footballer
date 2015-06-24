'use strict';

angular.module('footballer').factory('LeagueTable', function($resource){
  return $resource('http://api.football-data.org/alpha/soccerseasons/:id/leagueTable');
});

angular.module('footballer').factory('Leagues', function($resource){
  return $resource('/assets/data/leagues.json');
});
