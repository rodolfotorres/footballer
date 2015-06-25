'use strict';

angular.module('footballer', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngTable'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', { url: '/', templateUrl: 'app/main/main.html', controller: 'MainCtrl'})
      .state('league', { url: '/league/{id:3[0-9]{1,2}}', templateUrl: 'app/league/league.html', controller: 'LeagueCtrl'})

    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.common['X-Auth-Token'] = 'b37342f37fc04a41a0bf3931290bc26f';
  });
