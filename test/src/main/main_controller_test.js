'use strict';

describe("main controller test", function(){
	var scope, controller;

  beforeEach(module('angular-example-main'));
   beforeEach(module(function ($provide) {
    $provide.value('ngRoute', {});
  }));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('MainCtrl', {
      $scope: scope
    });
  }));
  describe('loading', function () {
    it('assigns a list', function () {
      expect(scope.awesomeThings).toEqual([
        'AngularJS',
        'Gulp',
        'Uglify',
        'SourceMaps',
        'Karma'
      ]);
    });
  });
})