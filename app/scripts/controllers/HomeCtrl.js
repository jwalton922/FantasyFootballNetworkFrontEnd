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
    .controller('HomeCtrl', ['$scope','$http', '$log','$location','UserService','FootballApi',function ($scope, $http, $log,$location,UserService,FootballApi) {
        $scope.user = UserService.getUser();
        $log.log("User = ",$scope.user);
        $scope.teams = [];

        $scope.refreshTeam = function(team){
           FootballApi.refreshTeam($scope.user.id, team.teamKey).then(function(xhr){
              $log.log("Refreshed team data: ",xhr.data);
           });
        };

        $scope.refreshUserScore = function(){
          $log.log("Refresh user score called")
          FootballApi.scoreUser($scope.user.id).then(function(xhr){
             $scope.user = xhr.data
          });
        };

        $scope.getTeams = function(){
            $log.log("Getting teams for user: "+$scope.user.id);
            FootballApi.getTeamsForUser($scope.user.id).then(function(xhr){
                $log.log("response from api: ",xhr);
                $scope.teams = xhr.data;
                $log.log("Current team data",$scope.teams);
            });

        };

        $scope.getTeams();

    }]);
