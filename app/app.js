'use strict';

/**
 * @ngdoc overview
 * @name ktpracticeApp
 * @description
 * # ktpracticeApp
 *
 * Main module of the application.
 */
angular
  .module('KTPracticeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ]);

angular.module("KTPracticeApp")
  .config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/sessions',
      templateUrl: 'sessions/sessions.tpl.html'
    })
    .state('session1', {
      url: '/session1',
      templateUrl: 'sessions/session1/session1.tpl.html',
      controller: 'session1Ctrl'
    })
    .state('session1Practice', {
      url: '/session',
      templateUrl: 'sessions/session1/practice/session1.practice.tpl.html',
      controller: 'session1PracticeCtrl'
    });
  $urlRouterProvider.when('', '/sessions');
  $urlRouterProvider.otherwise('/sessions');
};


