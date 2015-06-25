'use strict';

angular.module('footballer').controller('MainCtrl', function ($scope, LeagueTable, Leagues) {

    // var leagueTable = LeagueTable.get({id: 354}, function(){
    //   console.log(leagueTable);
    // });

    $scope.leagues = [];

    Leagues.get({}, function(result){
      $scope.leagues = result.leagues;
    });
  });
