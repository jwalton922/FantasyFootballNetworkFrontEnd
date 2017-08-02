/**
 * Created by jwalton on 9/25/16.
 */
'use strict';

angular.module('fantasyFootballNetworkApp').factory('FootballApi', ['$log', '$http', function ($log, $http) {

        var getRootUrl = function () {
            return "https://www.fantasyfootball.network/FantasyFootballNetwork/";
//    $log.log("Getting hostname from: "+document.URL);
//    if(location.hostname === "localhost"){
//      return "http://localhost:8080";
//    } else {
//      return "";
//    }
        };

        return {
            getUser : function(userId){
                return $http.get(getRootUrl()+"users/"+userId).then(function success(xhr){
                    return xhr;
                }, function failure(xhr){
                    $log.log("Error",xhr);
                });
            },
            getUserTeams : function(userId){
                return $http.get(getRootUrl()+"users/"+userId+"/teams").then(function success(xhr){
                    return xhr;
                }, function failure(xhr){
                    $log.log("Error",xhr);
                });
            },
            getLeaderboard: function(offset, limit){
                return $http.get(getRootUrl()+"leaderboard", {params: {offset: offset, limit: limit}}).then(function success(xhr){
                    return xhr;
                }, function failure(xhr){
                    $log.log("Error",xhr);
                });
            }
            
//            createUser: function (email, password, username) {
//                var postBody = {
//                    email: email,
//                    username: username,
//                    password: password
//                };
//                $log.log("Creating account", postBody);
//                return $http.post(getRootUrl() + '/FantasyFootballNetwork/users', postBody).then(function success(xhr) {
//                    return xhr;
//                }, function failure(data) {
//                    return data;
//                    //alert("Error creating account: "+angular.toJson(data));
//                });
//            },
//            login: function (email, password) {
//                var postBody = {
//                    email:email,
//                    password: password
//                };                
//                return $http.post(getRootUrl() + '/FantasyFootballNetwork/login', postBody).then(function success(xhr) {
//                    var authString = btoa(email+":"+password);
//                    $http.defaults.headers.common['Authorization'] = 'Basic '+authString;
//                    
//                    return xhr;                    
//                }, function failure(data) {                    
//                    return data;
//                    //alert("Error creating account: "+angular.toJson(data));
//                });
//            },
//            testTeamJob: function (userId, teamId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/testTeamDataJob";
//                var params = {userId: userId, teamId: teamId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            testLeagueJob: function (userId, leagueId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/testLeagueDataJob";
//                var params = {userId: userId, leagueId: leagueId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            testUserJobs: function (userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/testRootJob";
//                var params = {userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            requestLeagueTeams: function (leagueId, userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/requestLeagueTeamData";
//                var params = {leagueId: leagueId, userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            requestLeagueSettingsData: function (leagueId, userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/requestLeagueSettingsData";
//                var params = {leagueId: leagueId, userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            requestTeamRoster: function (teamId, userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/requestPlayerData";
//                var params = {teamId: teamId, userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            getPlayersForTeam: function (teamId, week) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/teams/" + teamId + "/players";
//                var params = {week: week};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            getTeamData: function (teamId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/teams/" + teamId;
//                var params = {};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            getLeagueData: function (leagueId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/leagues/" + leagueId;
//                var params = {};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            getUserProfileData: function (userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/users/" + userId + "/profile";
//                var params = {};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            searchUsers: function (startIndex) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/users";
//                var params = {startIndex: startIndex};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            getFriends: function (userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/users/friends";
//                var params = {userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            addFriend: function (userId, searchTerm) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/users/addFriend";
//                var params = {searchTerm: searchTerm, userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            refreshTeam: function (userId, teamKey) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/yahoo/refreshTeamData";
//                var params = {userId: userId, teamKey: teamKey};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            scoreUser: function (userId) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/scoreUser";
//                var params = {userId: userId};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            },
//            getTeamsForUser: function (id) {
//                var url = getRootUrl() + "/FantasyFootballNetwork/teams";
//                var params = {userId: id};
//                return $http.get(url, {params: params}).then(function success(xhr) {
//                    return xhr;
//                }, function error(xhr) {
//                    return xhr;
//                });
//            }
        };
    }]);
