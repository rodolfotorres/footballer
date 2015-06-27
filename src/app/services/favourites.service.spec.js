'use strict';

describe('favouritesService', function() {

  beforeEach(module('footballer'));

  it('can get an instance of my TeamModel', inject(function(favouritesService) {
    expect(favouritesService).toBeDefined();
  }));

  it('should save a team', inject(function(favouritesService) {
    var team = {
      id: '1'
    };

    favouritesService.saveFavourite(team);
    expect(favouritesService.getFavourites().length).toBe(1);
  }));

  describe('favourite teams', function() {
    var team = {
      id: '1'
    };

    beforeEach(inject(function(favouritesService) {
      favouritesService.saveFavourite(team);
    }));

    it('should return true to a favourite team', inject(function(favouritesService) {
      expect(favouritesService.isFavourite(team)).toBe(true);
    }));

    it('should return false to a not favourite team', inject(function(favouritesService) {
      expect(favouritesService.isFavourite({
        id: 2
      })).toBe(false);
    }));

    it('should remove a favourite', inject(function(favouritesService) {
      favouritesService.removeFavourite(team);
      expect(favouritesService.isFavourite(team)).toBe(false);
    }));
  });
});
