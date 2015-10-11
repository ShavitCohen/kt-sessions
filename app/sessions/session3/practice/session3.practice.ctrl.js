'use strict';

/**
 * @ngdoc function
 * @name ktpracticeApp.controller:session3PracticeCtrl
 * @description
 * # session3PracticeCtrl
 * Controller of the KTPracticeApp
 */
angular.module('KTPracticeApp')
  .controller('session3PracticeCtrl', session3PracticeCtrl);

session3PracticeCtrl.$inject = ['$scope','$http'];

function session3PracticeCtrl($scope,$http) {

  $scope.selectedColors ={
    color1:{hex:"#FFFFFF"},
    color2:{hex:"#FFFFFF"},
    color3:{hex:"#FFFFFF"}
  };


  $http.get("/sessions/session3/practice/colors/colors.json")
    .success(function(respond){
      $scope.colors = respond;
    })


}
