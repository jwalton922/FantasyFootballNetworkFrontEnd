/**
 * Created by jwalton on 9/28/16.
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
        .controller('UserHomeCtrl', ['$scope', '$http', '$log', '$location', 'UserService', 'FootballApi', function ($scope, $http, $log, $location, UserService, FootballApi) {
                $scope.user = UserService.getUser();
                $scope.userBrowsingCurrentPage = 0;
                $scope.totalUsers = 0;
                $scope.users = [];
                $log.log("User = ", $scope.user);
                $scope.teams = [];
                $scope.searchTerm = "";
                $scope.friends = [];

                $scope.linkYahoo = function () {
                    var email = $scope.user.email;
                    var encodedEmail = encodeURIComponent(email);
                    $log.log("Encoded email: " + encodedEmail);
                    $http.get('https://www.fantasyfootball.network/FantasyFootballNetwork/yahoo', {params: {userEmail: encodedEmail}}).then(function (xhr) {
                        $log.log("link yahoo GET a success", xhr);
                    }, function (error) {
                        $log.log("Error linking to yahoo", error);
                    });
                };

                $scope.getEncodedUserEmail = function () {
                    $log.log("Getting encoded email for user", $scope.user);
                    return encodeURIComponent($scope.user.email);
                };

                $scope.testUserJobs = function () {
                    FootballApi.testUserJobs($scope.user.id);
                };

                $scope.getFriends = function () {
                    FootballApi.getFriends($scope.user.id).then(function (xhr) {
                        $scope.friends = xhr.data;
                        $log.log("Friends", $scope.friends);
                        $scope.getFriendNotifications();
                    });
                };
                $scope.getFriendNotifications = function () {
                    FootballApi.getFriendNotifications($scope.user.id).then(function (xhr) {
                        $scope.friendNotifications = [];
                        var parentNotifMap = {};
                        for (var i = 0; i < xhr.data.length; i++) {
                            var notif = xhr.data[i];
                            if (notif.parentNotification) {
                            } else {
                                notif.children = [];
                                parentNotifMap[notif.id] = notif;
                                $scope.friendNotifications.push(notif);
                            }
                        }
                        for (var i = 0; i < xhr.data.length; i++) {
                            var notif = xhr.data[i];
                            if (notif.parentNotification) {
                                parentNotifMap[notif.parentNotification].children.push(notif);
                            }
                        }
                    });
                };

                $scope.addFriend = function (username) {
                    var search;
                    if (username && username.length > 0) {
                        search = username;
                    } else {
                        search = $scope.searchTerm;
                    }
                    FootballApi.addFriend($scope.user.id, search).then(function (xhr) {
                        $log.log("Add friend response: ", xhr.data);
                    });
                };

                $scope.searchUsers = function () {
                    var startIndex = ($scope.userBrowsingCurrentPage - 1) * 10;
                    FootballApi.searchUsers(startIndex).then(function (xhr) {
                        $scope.users = xhr.data.users;
                        $scope.totalUsers = xhr.data.totalUsers;
                    });
                };

                $scope.refreshTeam = function (team) {
                    FootballApi.refreshTeam($scope.user.id, team.teamKey).then(function (xhr) {
                        $log.log("Refreshed team data: ", xhr.data);
                    });
                };

                $scope.refreshUserScore = function () {
                    $log.log("Refresh user score called");
                    FootballApi.scoreUser($scope.user.id).then(function (xhr) {
                        $scope.user = xhr.data;
                    });
                };

                $scope.getTeams = function () {
                    $log.log("Getting teams for user: " + $scope.user.id);
                    FootballApi.getTeamsForUser($scope.user.id).then(function (xhr) {
                        $log.log("response from api: ", xhr);
                        $scope.teams = xhr.data.teams;
                        $log.log("Current team data", $scope.teams);
                    });

                };

//    $scope.getTeams();
//    $scope.searchUsers();
                $scope.getFriends();

            }]);
