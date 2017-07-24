'use strict';
angular.module('fantasyFootballNetworkApp')
        .controller('UserProfileCtrl', ['$scope', '$http', '$log', '$location', 'UserService', 'FootballApi', '$routeParams',
            function ($scope, $http, $log, $location, UserService, FootballApi, $routeParams) {
                var rankingEl = document.querySelector('#ranking');
                var od = new Odometer({
                    el: rankingEl,
                    value: 0,                   
                    format: '',
                    theme: 'minimal'
                });
                var od2 = new Odometer({
                    el: document.querySelector('#percentile'),
                    value: 0,                   
                    format: '',
                    theme: 'minimal'
                });
                $scope.userScore = 0;
                $scope.siteRanking = 0;
                $scope.siteRankingPercentile = 0;
                $log.log("Route params: ", $routeParams);
                $scope.userId = $routeParams.userId;
                $scope.userData = {};
                $scope.requestingUserData = true;
                $scope.requestingTeamData = true;
                $scope.teams = [];
                $scope.placementData = {};

                FootballApi.getUser($scope.userId).then(function (xhr) {
                    $log.log("User data", xhr);
                    $scope.userData = xhr.data;
                    var percentile = ($scope.userData.totalUsers - $scope.userData.userRank)/$scope.userData.totalUsers;
                    percentile = percentile*10000/100;
                    var rankingElement = document.querySelector('#ranking');
                    rankingElement.innerHTML = $scope.userData.userRank+1;
                    var percentileElement = document.querySelector('#percentile');
                    percentileElement.innerHTML = percentile;
                });

                $scope.teamSortOrder = {};
                $scope.currentSortField = "year";
                FootballApi.getUserTeams($scope.userId).then(function (xhr) {
                    $log.log("User teamdata", xhr);
                    $scope.teams = xhr.data;

                    $scope.placementData = {firstPlace: 0, secondPlace: 0, thirdPlace: 0, topHalf: 0, bottomHalf: 0};
                    $scope.scoringData = {firstPlace: 0, secondPlace: 0, thirdPlace: 0, topHalf: 0, bottomHalf: 0};
                    $scope.scoringAgainstData = {firstPlace: 0, secondPlace: 0, thirdPlace: 0, topHalf: 0, bottomHalf: 0};
                    for (var i = 0; i < $scope.teams.length; i++) {

                        var team = $scope.teams[i];
                        if (i === 0) {
                            for (var key in team) {
                                $scope.teamSortOrder[key] = -1;
                            }
                        }
                        if (team.rank === 1) {
                            $scope.placementData.firstPlace++;
                        } else if (team.rank === 2) {
                            $scope.placementData.secondPlace++;
                        } else if (team.rank === 3) {
                            $scope.placementData.thirdPlace++;
                        }
                        if (team.rank < (team.league_size / 2)) {
                            $scope.placementData.topHalf++;
                        } else {
                            $scope.placementData.bottomHalf++;
                        }

                        if (team.points_scored_rank === 1) {
                            $scope.scoringData.firstPlace++;
                        } else if (team.points_scored_rank === 2) {
                            $scope.scoringData.secondPlace++;
                        } else if (team.points_scored_rank === 3) {
                            $scope.scoringData.thirdPlace++;
                        }
                        if (team.points_scored_rank < (team.league_size / 2)) {
                            $scope.scoringData.topHalf++;
                        } else {
                            $scope.scoringData.bottomHalf++;
                        }

                        if (team.points_against_rank === 1) {
                            $scope.scoringAgainstData.firstPlace++;
                        } else if (team.points_against_rank === 2) {
                            $scope.scoringAgainstData.secondPlace++;
                        } else if (team.points_against_rank === 3) {
                            $scope.scoringAgainstData.thirdPlace++;
                        }
                        if (team.points_against_rank < (team.league_size / 2)) {
                            $scope.scoringAgainstData.topHalf++;
                        } else {
                            $scope.scoringAgainstData.bottomHalf++;
                        }

                    }
                    $scope.sortTeams($scope.currentSortField);
                });

                $scope.sortTeams = function (field) {
                    if (field === $scope.currentSortField) {
                        $scope.teamSortOrder[field] = -1 * $scope.teamSortOrder[field];
                    } else {
                        $scope.currentSortField = field;
                    }
                    $scope.teams.sort(function (a, b) {
                        var retValue = a[field] < b[field];
                        return retValue * $scope.teamSortOrder[field];
                    });
                }
            }]);