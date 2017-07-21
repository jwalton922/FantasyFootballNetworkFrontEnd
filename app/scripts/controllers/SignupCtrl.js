'use strict';

angular.module('fantasyFootballNetworkApp')
        .controller('SignupCtrl', ['$scope', '$log', function ($scope, $log) {
                $scope.email = "";
                $scope.getEncodedUserEmail = function () {
                    $log.log("Getting encoded email for user", $scope.user);
                    return encodeURIComponent($scope.email);
                };
            }]);
