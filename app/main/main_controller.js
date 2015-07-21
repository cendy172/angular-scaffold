(function(){
  'use strict';


  angular.module('angular-example-main',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    }])
    .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.awesomeThings = [
        'AngularJS',
        'Gulp',
        'Uglify',
        'SourceMaps',
        'Karma'
      ];
    }]);

})();