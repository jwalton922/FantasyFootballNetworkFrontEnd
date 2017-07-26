'use strict';

angular.module('fantasyFootballNetworkApp')
        .controller('SignupCtrl', ['$scope', '$log', function ($scope, $log) {
                $scope.email = "";
                $scope.receiveUpdates = false;
                $scope.getEncodedUserEmail = function () {
                    $log.log("Getting encoded email for user", $scope.user);
                    return encodeURIComponent($scope.email);
                };
                
                $scope.linkESPN = function(){
                    alert("This feature is coming soon. Thanks for your patience!");
                };
                
                $scope.linkNFL = function(){
                    alert("This feature is coming soon. Thanks for your patience!");
                };
                
                $scope.linkCBS = function(){
                    alert("This feature is coming soon. Thanks for your patience!");
                };
                
                $scope.linkOther = function(){
                    alert("This feature is coming soon. Thanks for your patience!");
                };
            }]);
