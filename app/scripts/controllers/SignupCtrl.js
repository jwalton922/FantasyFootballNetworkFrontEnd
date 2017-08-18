'use strict';

angular.module('fantasyFootballNetworkApp')
        .controller('SignupCtrl', ['$scope', '$log', 'FootballApi',function ($scope, $log,FootballApi) {
                $scope.email = "";
                $scope.receiveUpdates = false;
                $scope.showESPN = false;
                $scope.loadingESPN = false;
                $scope.getEncodedUserEmail = function () {
                    $log.log("Getting encoded email for user", $scope.user);
                    return encodeURIComponent($scope.email);
                };
                
                $scope.linkESPN = function(){
                    $scope.showESPN = true;
                };
                
                $scope.submitESPNLink = function(){
                    $scope.loadingESPN = true;
                    FootballApi.linkESPN($scope.espnUsername, $scope.espnPassword,$scope.email).then(function(xhr){
                        $log.log("Link ESPN Response: ",xhr);
                        window.href.location=xhr.data.profileUrl;
                        
                    });
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
