'use strict';

angular.module('footballer').controller('MainCtrl', function($scope, Leagues, favouritesService) {
  $scope.leagues = [];
  $scope.teams = favouritesService.getFavourites();

  Leagues.query(function(data) {
    $scope.leagues = data;
  });
});
