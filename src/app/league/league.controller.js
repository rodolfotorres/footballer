'use strict';

angular.module('footballer').controller('LeagueCtrl', function($scope, $stateParams){
  console.log($stateParams);
  $scope.id = $stateParams.id;
});
