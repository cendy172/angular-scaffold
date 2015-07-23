(function(global, angular, undefined){
  'use strict';

  angular.module('angular-example-main',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainController'
        });
    }])
    .controller('MainController', ['$scope', function ($scope) {
      $scope.awesomeThings = [
        'AngularJS',
        'Gulp',
        'Uglify',
        'SourceMaps',
        'Karma'
      ];
    }]);

})(this, angular);