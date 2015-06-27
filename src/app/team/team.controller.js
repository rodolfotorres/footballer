'use strict';

angular.module('footballer').controller('TeamCtrl', function($scope, $stateParams, Team, TeamModel) {
  $scope.id = $stateParams.id;
  $scope.team = {};
  Team.get({ id: $stateParams.id}, function(data) {
    $scope.team = new TeamModel(data);
    $scope.team.loadPlayers();
  });
});
