'use strict';

angular.module('footballer').controller('MainCtrl', function ($scope, Leagues) {
    $scope.leagues = [];

    Leagues.get({}, function(result){
      $scope.leagues = result.leagues;
    });
  });
