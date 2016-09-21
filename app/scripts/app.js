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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/accountCreate', {
            templateUrl: 'views/accountCreate.html',
            controller: 'AccountCtrl'
      })
        .when('/login',{
            templateUrl: 'views/login.html',
            controller: 'AccountCtrl'
        })
        .when('/home', {
            templateUrl: "views/home.html",
            controller: "HomeCtrl"
        })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
