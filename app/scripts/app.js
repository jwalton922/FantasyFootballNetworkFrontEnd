'use strict';

/**
 * @ngdoc overview
 * @name fantasyFootballNetworkApp
 * @description
 * # fantasyFootballNetworkApp
 *
 * Main module of the application.
 */
angular
        .module('fantasyFootballNetworkApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ngStorage',
            'ui.bootstrap'
        ])
        .config(function ($routeProvider) {
            $routeProvider
                    .when('/', {
                        templateUrl: 'views/landing.html',
                        controller: 'LandingCtrl'
                    })
                    .when('/signup', {
                        templateUrl: 'views/createAccount.html',
                        controller: 'AccountCtrl'
                    })
                    .when('/login', {
                        templateUrl: 'views/login.html',
                        controller: 'AccountCtrl'
                    })
                    .when('/leaderboard', {
                        templateUrl: 'views/leaderboard.html',
                        controller: 'LeaderboardCtrl'
                    })
                    .when('/contact', {
                        templateUrl: 'views/contact.html',
                        controller: 'ContactCtrl'
                    })
//      .when('/accountCreate', {
//            templateUrl: 'views/accountCreate.html',
//            controller: 'AccountCtrl'
//      })
//      .when('/login',{
//            templateUrl: 'views/login.html',
//            controller: 'AccountCtrl'
//      })
//      .when('/home', {
//            templateUrl: "views/home.html",
//            controller: "HomeCtrl"
//      })
                    .when('/profiles/:userId', {
                        templateUrl: "views/userProfile.html",
                        controller: "UserProfileCtrl"
                    })
//      .when('/userHome', {
//          templateUrl: "views/userHome.html",
//          controller: "UserHomeCtrl"
//      })
//      .when('/userProfile?userId', {
//        templateUrl: "views/userProfile.html",
//        controller: "UserProfileCtrl"
//      })
//      .when('/league', {
//        templateUrl: "views/league.html",
//        controller: "LeagueCtrl"
//      })
//      .when('/team', {
//        templateUrl: "views/team.html",
//        controller: "TeamCtrl"
//      })
                    .otherwise({
                        redirectTo: '/'
                    });


        }).run(
    function ($rootScope, $location, $window, $log) {
        $log.log("run called with path: " + $location.path());
        // initialise google analytics
        $window.ga('create', 'UA-84572006-1', 'auto');

        // track pageview on state change
        $rootScope.$on('$routeChangeSuccess', function (event) {
            $log.log("state change success called with path: " + $location.path());
            $window.ga('send', 'pageview', $location.path());
        });
    }
);
