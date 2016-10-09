/**
 * Created by jwalton on 9/25/16.
 */
'use strict';

angular.module('fantasyFootballNetworkApp').factory('FootballApi', ['$log','$http',function($log,$http) {

  var getRootUrl = function(){
    $log.log("Getting hostname from: "+document.URL);
    if(location.hostname === "localhost"){
      return "http://localhost:8080"
    } else {
      return ""
    }
  };

  return {
    getUserProfileData: function(userId){
      var url = getRootUrl()+"/FantasyFootballNetwork/users/"+userId+"/profile";
      var params = {};
      return $http.get(url, {params: params}).then(function success(xhr){
        return xhr;
      }, function error(xhr){
        return xhr;
      });
    },
    searchUsers: function(startIndex){
      var url = getRootUrl()+"/FantasyFootballNetwork/users";
      var params = {startIndex : startIndex};
      return $http.get(url, {params: params}).then(function success(xhr){
        return xhr;
      }, function error(xhr){
        return xhr;
      });
    },
    getFriends : function(userId){
      var url = getRootUrl()+"/FantasyFootballNetwork/users/friends";
      var params = {userId : userId};
      return $http.get(url, {params: params}).then(function success(xhr){
        return xhr;
      }, function error(xhr){
        return xhr;
      });
    },
    addFriend: function(userId,searchTerm){
      var url = getRootUrl()+"/FantasyFootballNetwork/users/addFriend";
      var params = {searchTerm : searchTerm, userId : userId};
      return $http.get(url, {params: params}).then(function success(xhr){
        return xhr;
      }, function error(xhr){
        return xhr;
      });
    },
    refreshTeam : function(userId, teamKey){
      var url = getRootUrl()+"/FantasyFootballNetwork/yahoo/refreshTeamData"
      var params = {userId: userId, teamKey: teamKey};
      return $http.get(url, {params: params}).then(function success(xhr){
        return xhr;
      }, function error(xhr){
        return xhr;
      });
    },
    scoreUser: function(userId){
      var url = getRootUrl()+"/FantasyFootballNetwork/scoreUser"
      var params = {userId: userId};
      return $http.get(url, {params: params}).then(function success(xhr){
        return xhr;
      }, function error(xhr){
        return xhr;
      });
    },
    getTeamsForUser: function(id){
      var url = getRootUrl()+"/FantasyFootballNetwork/teams";
      var params = {userId : id}
       return $http.get(url, {params: params}).then(function success(xhr){
          return xhr;
       }, function error(xhr){
          return xhr;
       });
    }
  };
}]);
