(function(){
	'use strict';

	angular.module('angular-example', [ 'ngRoute','angular-example-main','templates' ])
	  .config(['$routeProvider', function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  }]);
	  
})();