(function (angular) {
    'use strict';

    var app = angular.module('ExampleApp', [
        'FacebookLoginApp'
    ]);

    app.controller('ExamplePageController', ['$scope', '$http', 'FacebookLoginService',
        function ($scope, $http, facebookLoginService) {
            console.log('ready', $scope, facebookLoginService);

            $scope.response = {};

            $scope.fb = facebookLoginService;
            $scope.fb.init($scope);

            $scope.verifyMe = function() {
                $scope.response.isValid = 'checking...';

                var url = '/verify/';
                url += encodeURIComponent(facebookLoginService.authResponse.userID);
                url += '/';
                url += encodeURIComponent(facebookLoginService.authResponse.accessToken);
                $http.get(url)
                    .success(function(response) {
                       console.log('response', response);
                       $scope.response = response;
                    });
            };

        }]);

})(this.angular);
