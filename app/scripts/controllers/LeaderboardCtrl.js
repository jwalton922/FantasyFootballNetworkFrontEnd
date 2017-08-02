'use strict';

angular.module('fantasyFootballNetworkApp')
        .controller('LeaderboardCtrl', ['$scope', '$log', 'FootballApi',function ($scope, $log, FootballApi) {
               $scope.offset = 0;
               $scope.limit = 20;
               $scope.users = [];
               $scope.queryLeaderboard = function(){
                   FootballApi.getLeaderboard($scope.offset,$scope.limit).then(function(xhr){
                       $log.log("leaderboard data",xhr);
                       $scope.users = xhr.data;
                   });
               };
               $scope.queryLeaderboard();
            }]);
