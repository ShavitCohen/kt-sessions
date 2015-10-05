'use strict';

/**
 * @ngdoc function
 * @name ktpracticeApp.controller:session1Ctrl
 * @description
 * # session1Ctrl
 * Controller of the KTPracticeApp
 */
angular.module('KTPracticeApp')
  .controller('session1Ctrl', session1Ctrl);

session1Ctrl.$inject = ["$scope",'session2Service'];
function session1Ctrl($scope,session2Service) {

  //We are registering the session2Service to the $scope in order to be able to use it's logic from the template
  $scope.session2Service = session2Service;

  $scope.isItColored = true;

  $scope.table = [
    {firstName:"s", lastName:"d", age:0},
    {firstName:"t", lastName:"f", age:2},
    {firstName:"e", lastName:"e", age:4},
    {firstName:"w", lastName:"t", age:5}
  ];

};
