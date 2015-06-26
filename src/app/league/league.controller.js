'use strict';

angular.module('footballer').controller('LeagueCtrl', function($scope, $stateParams, $filter, $state, teamService, leagueService) {
  $scope.id = $stateParams.id;
  $scope.league = {};

  leagueService.getLeague($stateParams.id).then(function(data) {
    $scope.league = data;
  }, function(error) {
    //transition to home if league is not found
    console.log(error);
    $state.transitionTo('home');
  });

  teamService.getTeams($stateParams.id).then(function(data) {
    $scope.teams = data;
  });
});
