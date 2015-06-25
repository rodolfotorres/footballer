'use strict';

angular.module('footballer').controller('LeagueCtrl', function($scope, $stateParams, $filter, Teams, leagueService){
  $scope.id = $stateParams.id;
  $scope.league;

  leagueService.getLeague($stateParams.id, function(result){
    console.log(result);
  });

  Teams.get({id: $stateParams.id}, function(data){
    console.log(data);
    $scope.league = data;
  });
});
