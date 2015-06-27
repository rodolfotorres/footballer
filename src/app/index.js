'use strict';

angular.module('footballer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngTable', 'ngLodash', 'ngStorage'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('league', {
        url: '/league/{id:3[0-9]{1,2}}',
        templateUrl: 'app/league/league.html',
        controller: 'LeagueCtrl'
      })
      .state('team', {
        url: '/team/{id:[0-9]{1,3}}',
        templateUrl: 'app/team/team.html',
        controller: 'TeamCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.common['X-Auth-Token'] = 'b37342f37fc04a41a0bf3931290bc26f';

  })
  .run(function(TeamModel, favouritesService, $localStorage) { //Loads saved teams from localStorage
    (function loadFromLocalStorage(favourites) {
      if($localStorage.teams){
        favourites.teams = $localStorage.teams.map(function(team) {
          return new TeamModel(team);
        });
      }
    })(favouritesService);
  });
