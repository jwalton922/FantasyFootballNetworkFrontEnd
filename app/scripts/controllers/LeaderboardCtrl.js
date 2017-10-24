'use strict';

angular.module('fantasyFootballNetworkApp')
        .controller('LeaderboardCtrl', ['$scope', '$log', 'FootballApi','UserService',function ($scope, $log, FootballApi, UserService) {
               $scope.currentPage = 1;
               $scope.pageSize = 10;
               $scope.users = [];
               $scope.totalUsers = 0;
               $scope.queryLeaderboard = function(){
                   $log.log("Current page: "+$scope.currentPage);
                   var offset = ($scope.currentPage-1)*$scope.pageSize;
                   FootballApi.getLeaderboard(offset,$scope.pageSize).then(function(xhr){
                       $log.log("leaderboard data",xhr);
                       $scope.users = xhr.data.leaderboard;
                       $scope.totalUsers = xhr.data.totalUsers;                       
                       for(var i = 0; i < $scope.users.length; i++){
                           $scope.users[i].rank = ($scope.currentPage-1)*$scope.pageSize+i+1;
                       }
                   });
               };
               
               $scope.addFriend = function(userToFriend){
                   var user = UserService.getUser();
                   FootballApi.addFriend(user.id, userToFriend.id, "default");
               };
               $scope.queryLeaderboard();
            }]);
