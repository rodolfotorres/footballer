'use strict';

describe('myFactory', function() {
  beforeEach(module('footballer'));

  it('can get an instance of my TeamModel', inject(function(TeamModel) {
    expect(TeamModel).toBeDefined();
  }));

  it('can new up an new TeamModel', inject(function(TeamModel) {
    var team = new TeamModel({
      _links:{
        self:{
          href:'/1'
        }
      }
    });
    expect(team).toBeDefined();
    expect(team.id).toBe('1');
  }));

  it('should create different ids', inject(function(TeamModel) {
    var team = new TeamModel({
      _links:{
        self:{
          href:'/1'
        }
      }
    });
    var team2 = new TeamModel({
      _links:{
        self:{
          href:'/2'
        }
      }
    });
    expect(team.id).toBe('1');
    expect(team2.id).toBe('2');
  }));

  it('has addToFavorites', inject(function(TeamModel) {
    expect(new TeamModel().addToFavorites).toBeDefined();
  }));
});
