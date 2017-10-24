/**
 * Created by jwalton on 9/18/16.
 */
'use strict';
/**
 * @ngdoc function
 * @name fantasyFootballNetworkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fantasyFootballNetworkApp
 */
angular.module('fantasyFootballNetworkApp')
        .controller('AccountCtrl', ['$scope', '$http', '$log', '$location', 'UserService', 'FootballApi', function ($scope, $http, $log, $location, UserService, FootballApi) {
                $scope.data = {
                    email: "",
                    username: "",
                    password: ""
                };

                $scope.userHomePage = "/userHome";

                $scope.createAccount = function () {
                    FootballApi.createUser($scope.data.email, $scope.data.password, $scope.data.username).then(function (result) {
                        $log.log("Success creating user: ", result);
                        UserService.setUser(result.data);
                        $location.path($scope.mainPage);
                    }, function (error) {
                        $log.log("Error creating account", error);
                    });

                };

                $scope.login = function () {
                    FootballApi.login($scope.data.email, $scope.data.password).then(function (xhr) {
                        $log.log("Success logging in", xhr);
                        UserService.setUser(xhr.data);
                        $log.log("User service get user: ", UserService.getUser());
                        $location.path($scope.userHomePage);
                    }, function (error) {
                        $log.log("Error logging in", error);
                    });
                };
            }]);
