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
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
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
  });
