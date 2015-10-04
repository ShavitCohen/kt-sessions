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
      url: '/session1Practice',
      templateUrl: 'sessions/session1/practice/session1.practice.tpl.html',
      controller: 'session1PracticeCtrl'
    })
    .state('session2', {
      url: '/session2',
      templateUrl: 'sessions/session2/session2.tpl.html',
      controller: 'session2Ctrl'
    })
    .state('session2Practice', {
      url: '/session2Practice',
      templateUrl: 'sessions/session2/practice/session2.practice.tpl.html',
      controller: 'session2PracticeCtrl'
    });
  $urlRouterProvider.when('', '/sessions');
  $urlRouterProvider.otherwise('/sessions');
};


