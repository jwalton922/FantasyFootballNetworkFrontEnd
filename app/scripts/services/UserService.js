/**
 * Created by jwalton on 9/20/16.
 */
'use strict';

angular.module('fantasyFootballNetworkApp').factory('UserService', ['$localStorage',function($localStorage) {



    return {
        setUser: function(user){
            $localStorage.user = user;
        },
        getUser: function(){
            return $localStorage.user;
        }
    };
}]);
