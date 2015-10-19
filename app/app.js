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
    'ngTouch',
    'ui.bootstrap'
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
    })
    .state('session3', {
      url: '/session3',
      templateUrl: 'sessions/session3/session3.tpl.html',
      controller: 'session3Ctrl'
    })
    .state('session3Practice', {
      url: '/session3Practice',
      templateUrl: 'sessions/session3/practice/session3.practice.tpl.html',
      controller: 'session3PracticeCtrl'
    })
    .state('session4', {
      url: '/session4',
      templateUrl: 'sessions/session4/session4.tpl.html',
      controller: 'session4Ctrl'
    })
    .state('session4Practice', {
      url: '/session4Practice',
      templateUrl: 'sessions/session4/practice/session4.practice.tpl.html',
      controller: 'session4PracticeCtrl'
    })
    .state('session5', {
      url: '/session5',
      templateUrl: 'sessions/session5/session5.tpl.html',
      controller: 'session5Ctrl'
    })
  $urlRouterProvider.when('', '/sessions');
  $urlRouterProvider.otherwise('/sessions');
};


