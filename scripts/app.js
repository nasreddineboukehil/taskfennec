'use strict';

var app = angular
  .module('TaskFennecApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'https://taskfennec.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/browse/:taskId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })

      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
