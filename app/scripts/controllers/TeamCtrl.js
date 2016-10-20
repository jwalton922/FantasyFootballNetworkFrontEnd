/**
 * Created by jwalton on 10/9/16.
 */
angular.module('fantasyFootballNetworkApp')
  .controller('TeamCtrl', ['$scope','$http', '$log','$location','UserService','FootballApi', '$routeParams',
    function ($scope, $http, $log,$location,UserService,FootballApi,$routeParams) {
      $scope.teamId =  $routeParams.teamId;
      $scope.viewingUser = UserService.getUser();
      $scope.team = {};
      $scope.totalWeeks = 16;
      $scope.weekPage = 1;
      $scope.players = [];
      $scope.getTeamData = function(){
        FootballApi.getTeamData($scope.teamId).then(function(xhr){
          $scope.team = xhr.data;
          $scope.weekPage = $scope.team.currentWeek-1;
          $log.log("week page set to "+$scope.weekPage)
          $scope.getPlayers();
        });
      };

      $scope.requestPlayerData = function(){
        $log.log("Requesting player data with viewing user",$scope.viewingUser);
        $log.log("Requesting player data for team id: "+$scope.teamId+" user id: "+$scope.viewingUser.id);
        FootballApi.requestTeamRoster($scope.teamId, $scope.viewingUser.id);
      };

      $scope.getPlayers = function(){
        $log.log("getting players");
        if(!$scope.team.team || !$scope.team.team.id){
          return;
        }
        var id = $scope.team.team.id
        $log.log("Team id: "+id+" Week: "+$scope.weekPage);
        FootballApi.getPlayersForTeam(id, $scope.weekPage).then(function(xhr){
          $scope.players = xhr.data;
        });
      };

      $scope.weekPageChange2 = function(){
        $log.log("Week page change called");
        $scope.getPlayers();
      };

      $scope.getTeamData();
    }]);

