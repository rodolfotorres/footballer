'use strict';

describe('TeamCrl', function() {
  var Team, scope, createController;

  beforeEach(function() {
    module('footballer');

    module(function($provide){
      $provide.value('Team', {
        get: function(id, callback){
          return callback({
            _links:{
              self:{
                href: '/1'
              }
            }
          });
        }
      });
    });
  });

  beforeEach(function(){
    inject(function($controller, $rootScope, _Team_){
      scope = $rootScope.$new();
      Team = _Team_;
      createController = function (params) {
        return $controller('TeamCtrl', {
          $scope: scope,
          $stateParams: params || {}
        });
      };
    });
  });

  it('should call Team to get team details', function() {
    spyOn(Team, 'get').and.callThrough();
    createController();
    expect(Team.get).toHaveBeenCalled();
  });
});
