'use strict';

angular.module('footballer').controller('TeamCtrl', function($scope, $stateParams, Team) {
  $scope.id = $stateParams.id;
  $scope.team = {};
  Team.get({ id: $stateParams.id}, function(data) {
    $scope.team = data;
  });
});
