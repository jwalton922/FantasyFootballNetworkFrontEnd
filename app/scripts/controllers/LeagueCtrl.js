/**
 * Created by jwalton on 10/9/16.
 */
angular.module('fantasyFootballNetworkApp')
  .controller('LeagueCtrl', ['$scope','$http', '$log','$location','UserService','FootballApi', '$routeParams',
    function ($scope, $http, $log,$location,UserService,FootballApi,$routeParams) {
      $scope.viewingUser = UserService.getUser();
      $scope.leagueId = $routeParams.leagueId;
      $scope.league = {};
      $scope.teams = [];
      $scope.matchups = [];
      $scope.teamsWithMatchup = {};
      $scope.totalWeeks = 16;
      $scope.matchupData = 1;

      $scope.requestLeagueSettingsData = function(){
        FootballApi.requestLeagueSettingsData($scope.league.id, $scope.viewingUser.id).then(function(xhr){
          $log.log("League settings data: ",xhr.data);
        });
      };

      $scope.getLeagueData = function(){
        FootballApi.getLeagueData($scope.leagueId).then(function(xhr){
          $log.log("League data: ",xhr.data);
            $scope.league = xhr.data.league;
            $scope.teams = xhr.data.teams

            $scope.teams.sort(function(a,b){
              var aPlace = a.team.placeInLeague;
              var bPlace = b.team.placeInLeague;
              if(aPlace < bPlace){
                return 1;
              } else if(aPlace > bPlace){
                return -1;
              } else {
                return 0;
              }
            });
          $log.log("Current week: "+$scope.teams[0].currentWeek);
            $scope.matchupPage = $scope.teams[0].currentWeek-1;
            $scope.getMatchups();
        });
      };

      $scope.getMatchups = function(){
        $scope.matchups = [];
        $log.log("Getting matchups for week: "+$scope.matchupPage);
        for(var i = 0; i < $scope.teams.length; i++){
          var team = $scope.teams[i];
          var matchup = team.weekData[$scope.matchupPage];
          $log.log("Matchup",matchup);
          $scope.matchups.push(matchup.match);
        }
      }

      $scope.matchupPageChange = function(arg){
        $log.log("matchupPageChange arg: ",arg);
        $log.log("Changing page to: "+$scope.matchupPage);
        $scope.getMatchups();

      }

      $scope.getLeagueData();
    }
  ]);
