'use strict';

angular.module('footballer').controller('LeagueCtrl', function($scope, $stateParams, $filter, $state, Teams, leagueService){
  $scope.id = $stateParams.id;
  $scope.league = {};

  leagueService.getLeague($stateParams.id).then(function(data){
    $scope.league = data;
  }, function(error){
    //transition to home if league is not found
    console.log(error);
    $state.transitionTo('home');
  });

  Teams.get({id: $stateParams.id}, function(data){
    $scope.teams = data.teams;
  });
});
