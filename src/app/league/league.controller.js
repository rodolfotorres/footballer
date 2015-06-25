'use strict';

angular.module('footballer').controller('LeagueCtrl', function($scope, $stateParams, $filter, Teams, ngTableParams){
  $scope.id = $stateParams.id;
  $scope.league;
  Teams.get({id: $stateParams.id}, function(data){
    console.log(data);
    $scope.league = data;
  });
});
