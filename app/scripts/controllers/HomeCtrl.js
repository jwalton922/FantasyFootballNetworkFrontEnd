/**
 * Created by jwalton on 9/20/16.
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
    .controller('HomeCtrl', ['$scope','$http', '$log','$location','UserService',function ($scope, $http, $log,$location,UserService) {
        $scope.user = UserService.getUser();
        $log.log("User = ",$scope.user);
    }]);