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
.controller('AccountCtrl', ['$scope','$http', '$log','$location','UserService',function ($scope, $http, $log,$location,UserService) {
    $scope.data = {
        email : "",
        username: "",
        password: ""
    };

    $scope.mainPage = "/home";

    $scope.getRootUrl = function(){
        $log.log("Getting hostname from: "+document.URL);
        if(location.hostname === "localhost"){
            return "http://localhost:8080"
        } else {
            return ""
        }
    };
    $scope.createAccount = function(){
        var postBody = {
            email: $scope.data.email,
            username: $scope.data.username,
            password: $scope.data.password
        }
        $log.log("Creating account",postBody);
        $http.post($scope.getRootUrl()+'/FantasyFootballNetwork/users',postBody).then(function success(xhr){
            $log.log("Success creating account", xhr)
            UserService.setUser(xhr.data);
            $location.path($scope.mainPage);
        }, function failure(data){
            $log.error("Error",data)
            alert("Error creating account: "+angular.toJson(data));
        });
    };

    $scope.login = function(){
        var postBody = {
            email: $scope.data.email,
            password: $scope.data.password
        }
        $log.log("Creating account",postBody);
        $http.post($scope.getRootUrl()+'/FantasyFootballNetwork/login',postBody).then(function success(xhr){
            $log.log("Success logging in",xhr);
            UserService.setUser(xhr.data);
            $location.path($scope.mainPage);
        }, function failure(data){
            $log.error("Error",data)
            alert("Error creating account: "+angular.toJson(data));
        });
    }
}]);