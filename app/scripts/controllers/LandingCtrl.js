'use strict';

angular.module('fantasyFootballNetworkApp')
  .controller('LandingCtrl', ['$scope', '$log','FootballApi',function ($scope,$log,FootballApi) {
    
    $scope.goToTopProfile = function(){
        FootballApi.getTopProfile().then(function(xhr){
            $log.log("Top profile data",xhr);
            window.location.href = xhr.data.profileUrl;
        });
    };
  }]);
