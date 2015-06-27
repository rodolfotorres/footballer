'use strict';

angular.module('footballer').factory('TeamModel', function(favouritesService, TeamPlayers, $resource, $q) {
  function Team(teamData) {
    if (teamData) {
      this.setData(teamData);
      this._id = 0;
    }
  }


  Team.prototype = {
    setData: function setData(teamData) {
      angular.extend(this, teamData);
    },
    get favourite() {
      return favouritesService.isFavourite(this);
    },
    get id() {
      if (this._id === 0) { //not initialized
        var link = this._links.self.href.split('/');
        this._id = link[link.length - 1];
      }
      return this._id;
    },
    addToFavorites : function addToFavorites(event){
      event.stopPropagation();
      if(this.favourite){
        favouritesService.removeFavourite(this);
      }else{
        favouritesService.saveFavourite(this);
      }
    },
    loadPlayers: function loadPlayers(){
      var self = this;
      return $q(function(resolve) {
        TeamPlayers.get({id: self.id}, function(data){
          self.players = data.players;
          resolve();
        });
      });
    }
  };

  return Team;
});
