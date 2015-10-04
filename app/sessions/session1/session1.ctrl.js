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

session1Ctrl.$inject = ["$scope"];
function session1Ctrl($scope) {

  $scope.isItColored = true;

  $scope.table = [
    {firstName:"s", lastName:"d", age:0},
    {firstName:"t", lastName:"f", age:2},
    {firstName:"e", lastName:"e", age:4},
    {firstName:"w", lastName:"t", age:5}
  ];

};
