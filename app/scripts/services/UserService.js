/**
 * Created by jwalton on 9/20/16.
 */
'use strict';

angular.module('fantasyFootballNetworkApp').factory('UserService', [function() {

    var serviceUser = null;

    return {
        setUser: function(user){
            serviceUser = user;
        },
        getUser: function(){
            return serviceUser;
        }
    };
}]);