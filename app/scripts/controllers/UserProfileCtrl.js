/**
 * Created by jwalton on 10/2/16.
 */
angular.module('fantasyFootballNetworkApp')
  .controller('UserProfileCtrl', ['$scope','$http', '$log','$location','UserService','FootballApi', '$routeParams',
    function ($scope, $http, $log,$location,UserService,FootballApi,$routeParams) {
    $scope.userId = $routeParams.userId;
    $scope.user = {};
    $scope.teams = [];
      $scope.lifetimeData = {}
      $scope.currentTeams = [];
      $scope.CURRENT_SEASON = "2016"
    $log.log("User profile controller");
    $scope.loadData = function(){
      $log.log("Getting profile for user: "+$scope.userId);
      FootballApi.getUserProfileData($scope.userId).then(function(xhr){
        $log.log("response from api: ",xhr);
        $scope.teams = [];
        $scope.currentTeams = [];
        $scope.lifetimeData.wins = 0;
        $scope.lifetimeData.losses = 0;
        $scope.lifetimeData.ties = 0;
        $scope.lifetimeData.firstPlaceFinishes = 0;
        $scope.lifetimeData.secondPlaceFinishes = 0;
        $scope.lifetimeData.thirdPlaceFinishes = 0;
        $scope.lifetimeData.topHalfFinishes = 0;
        $scope.lifetimeData.otherFinishes = 0;

        for(var i = 0; i < xhr.data.teams.length; i++){
          var team = xhr.data.teams[i];
          team.lastMatchup = team.weekData[team.currentWeek-1];
          if(team.lastMatchup.match) {
            if (team.lastMatchup.match.score > team.lastMatchup.match.opponentScore) {
              team.lastMatchup.status = "Win";
            } else if (team.lastMatchup.match.score < team.lastMatchup.match.opponentScore) {
              team.lastMatchup.status = "Loss";
            } else {
              team.lastMatchup.status = "Tie";
            }
          }
          $scope.lifetimeData.wins+=team.team.numWins;
          $scope.lifetimeData.losses+=team.team.numLosses;
          $scope.lifetimeData.ties+=team.team.numTies;
          if(team.team.season === $scope.CURRENT_SEASON){
            $scope.currentTeams.push(team);
          } else {
            if(team.team.placeInLeague === 1){
              $scope.lifetimeData.firstPlaceFinishes++
            } else if(team.team.placeInLeague === 2){
              $scope.lifetimeData.secondPlaceFinishes++;
            } else if(team.team.placeInLeague === 3){
              $scope.lifetimeData.thirdPlaceFinishes++;
            } else if(team.team.placeInLeague/team.league.numTeams < 0.5){
              $scope.lifetimeData.topHalfFinishes++;
            } else {
              $scope.lifetimeData.otherFinishes++;
            }
            $scope.teams.push(team);
          }
        }

        $scope.lifetimeData.winPercentage = 100*$scope.lifetimeData.wins/($scope.lifetimeData.wins+$scope.lifetimeData.losses+$scope.lifetimeData.ties);

        $scope.user = xhr.data.user;
        $log.log("Current team data",$scope.teams);
      });
    };

    $scope.loadData();


  }]);
