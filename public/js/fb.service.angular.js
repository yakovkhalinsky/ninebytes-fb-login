(function(angular) {
	'use strict';

	var FB_APP_ID = 'your-appid-goes-in-here';

	var app = angular.module('ninebytes.fb.services', []);

	var FacebookLoginService = function() {

		var service = this;

		this.ctrlScope = {};

		this.loading = false;
		this.loadingMessage = '';

		// 'not-ready', 'ready', 'not_authorized', 'connected'
		this.status = 'not_ready';
		this.me = null;

		var checkLoginState = function() {
			service.loading = true;
			service.loadingMessage = 'Checking login status...';
			FB.getLoginStatus(function(response) {
				statusChangeCallback(response);
			});
		};

		var getMe = function(readyCallback) {
			FB.api('/me', function(response) {
				service.me = response;
				readyCallback();
			});
		};

		var statusChangeCallback = function(response) {
			service.status = response.status;

			var readyCallback = function() {
				console.log(service.me, service.status);
				service.resetLoading();
				service.ctrlScope.$apply();
			}

			if (service.status === 'connected') {
				getMe(readyCallback);
			} else {
				readyCallback();
			}

		};

		this.init = function(ctrlScope) {
			service.ctrlScope = ctrlScope;
			service.setLoading('Initialising authentication...');
			FB.init({ appId: FB_APP_ID, cookie: true, xfbml: true, version: 'v2.0'});
			FB.getLoginStatus(function(response) {
				statusChangeCallback(response);
			});
		};

		this.login = function() {
			service.setLoading('Attempting to login...');
			FB.login(function(response){
				statusChangeCallback(response);
			}, {scope: 'public_profile, email'});
		};

		this.logout = function() {
			service.setLoading('Logging you out...');
			FB.logout(function(response) {
				service.me = null;
				statusChangeCallback(response);
			});
		};

		this.setLoading = function(message, apply) {
			service.loading = true;
			service.loadingMessage = message;
			if (apply) {
				service.ctrlScope.$apply();
			}
		};

		this.resetLoading = function() {
			service.loading = false;
			service.loadingMessage = '';
		};

	};

	app.service('FacebookLoginService', FacebookLoginService);

})(this.angular);
