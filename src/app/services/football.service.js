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
  })
  .service('initFavourites', function(TeamModel, favouritesService, $localStorage) {
    (function loadFromLocalStorage(favourites) {
      favourites.teams = $localStorage.teams.map(function(team) {
        return new TeamModel(team);
      });
    })(favouritesService);
  });

angular.module('footballer').service('leagueService', function($resource, $q, lodash) {
  this.getLeague = function(id) {
    return $q(function(resolve, reject) {
      $resource('/assets/data/leagues.json').query(function(data) {
        if (data) {
          var league = lodash.find(data, {
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

angular.module('footballer').service('teamService', function($resource, $q, lodash, TeamModel) {
  this.getTeams = function(id) {
    return $q(function(resolve) {
      $resource('http://api.football-data.org/alpha/soccerseasons/:id/teams').get({
        id: id
      }, function(data) {
        resolve(lodash.map(data.teams, function(team) {
          return new TeamModel(team);
        }));
      });
    });
  };
});
