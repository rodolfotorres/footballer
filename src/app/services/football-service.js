'use strict';

angular.module('footballer').factory('LeagueTable', function($resource) {
    return $resource('http://api.football-data.org/alpha/soccerseasons/:id/leagueTable');
  })
  .factory('Team', function($resource) {
    return $resource('http://api.football-data.org/alpha/teams/:id');
  })
  .factory('TeamFixtures', function($resource) {
    return $resource('http://api.football-data.org/alpha/teams/:id/fixtures');
  })
  .factory('TeamPlayers', function($resource) {
    return $resource('http://api.football-data.org/alpha/teams/:id/players');
  })
  .factory('Leagues', function($resource) {
    return $resource('/assets/data/leagues.json');
  });

angular.module('footballer').service('leagueService', function($resource, $q, lodash) {
  this.getLeague = function(id) {
    return $q(function(resolve, reject) {
      $resource('/assets/data/leagues.json').get(function(data) {
        if (data) {
          var league = lodash.find(data.leagues, {
            id: id
          });
          if (league) {
            resolve(league);
          }
        }
        reject('League doesn\'t exist');
      });
    });
  };
});

angular.module('footballer').service('teamService', function($resource, $q, lodash) {
  this.getTeams = function(id) {
    return $q(function(resolve) {
      $resource('http://api.football-data.org/alpha/soccerseasons/:id/teams').get({
        id: id
      }, function(data) {
        resolve(lodash.map(data.teams, function(team) {
          var link = team._links.self.href.split('/');
          team.id = link[link.length - 1];
          return team;
        }));
      });
    });
  };
});
