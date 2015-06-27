'use strict';
describe('League Controller', function() {
  var leagueService, teamService, createController, scope;

  beforeEach(function() {
    module('footballer');

    // Service mocks
    module(function($provide) {
      $provide.value('teamService', {
        getTeams: function() {
          return {
            then: function(callback) {
              return callback({});
            }
          };
        }
      });

      $provide.value('leagueService', {
        getLeague: function() {
          return {
            then: function(callback) {
              return callback({});
            }
          };
        }
      });
    });
  });

  beforeEach(function() {
    inject(function($controller, $rootScope, _teamService_, _leagueService_) {
      scope = $rootScope.$new();
      teamService = _teamService_;
      leagueService = _leagueService_;
      createController = function(params) {
        return $controller('LeagueCtrl', {
          $scope: scope,
          $stateParams: params || {}
        });
      };
    });
  });

  it('should call leagueService to get league details', function() {
    spyOn(leagueService, 'getLeague').and.callThrough();
    createController();
    expect(leagueService.getLeague).toHaveBeenCalled();
  });

  it('should call teamService to get team details', function() {
    spyOn(teamService, 'getTeams').and.callThrough();
    createController();
    expect(teamService.getTeams).toHaveBeenCalled();
  });
});
