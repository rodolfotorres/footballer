'use strict';

angular.module('footballer').service('favouritesService', function(lodash, $localStorage) {
  this.teams = [];
  this.saveFavourite = function saveFavourite(team) {
    this.teams.push(team);
    $localStorage.teams = this.teams;
  };
  this.isFavourite = function isFavourite(team) {
    return lodash.find(this.teams, {id: team.id}) !== undefined;
  };

  this.getFavourites = function getFavourites() {
    return this.teams;
  };

  this.removeFavourite = function removeFavourite(team) {
    lodash.remove(this.teams, {id: team.id});
    $localStorage.teams = this.teams;
  };
});
