'use strict';

describe('MainCtrl', function() {
  var Leagues, favouritesService, scope, createController;

  beforeEach(function() {
    module('footballer');

    module(function($provide){
      $provide.value('Leagues', {
        query: function(callback){
          return callback({});
        }
      });
    });

    module(function($provide){
      $provide.value('favouritesService', {
        getFavourites: function(){
          return [];
        }
      });
    });
  });

  beforeEach(function(){
    inject(function($controller, $rootScope, _Leagues_, _favouritesService_){
      scope = $rootScope.$new();
      Leagues = _Leagues_;
      favouritesService = _favouritesService_;
      createController = function (params) {
        return $controller('MainCtrl', {
          $scope: scope,
          $stateParams: params || {}
        });
      };
    });
  });

  it('should call Legues to get the leagues from assets', function() {
    spyOn(Leagues, 'query').and.callThrough();
    createController();
    expect(Leagues.query).toHaveBeenCalled();
  });

  it('should call favouritesService to get all saved favourites', function() {
    spyOn(favouritesService, 'getFavourites').and.callThrough();
    createController();
    expect(favouritesService.getFavourites).toHaveBeenCalled();
  });
});
