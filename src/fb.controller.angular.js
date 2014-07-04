(function(angular) {
	'use strict';

	var app = angular.module('ninebytes.fb.controllers', []);

	var FacebookLoginController = function($scope, facebookLoginService) {
		$scope.fb = facebookLoginService;
		facebookLoginService.init($scope);
	};

	FacebookLoginController.$inject = ['$scope', 'FacebookLoginService'];

	app.controller('FacebookLoginController', FacebookLoginController);

})(this.angular);
