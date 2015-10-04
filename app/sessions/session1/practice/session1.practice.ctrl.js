'use strict';

/**
 * @ngdoc function
 * @name ktpracticeApp.controller:session1PracticeCtrl
 * @description
 * # session1PracticeCtrl
 * Controller of the KTPracticeApp
 */
angular.module('KTPracticeApp')
  .controller('session1PracticeCtrl', session1PracticeCtrl);

session1PracticeCtrl.$inject = ['$scope'];

function session1PracticeCtrl($scope) {
  $scope.tableData = [
    {
      firstName: {value: "Marc", selected: false},
      lastName: {value: "Anthony", selected: false},
      age: {value: "46", selected: false}
    },
    {
      firstName: {value: "jennifer", selected: false},
      lastName: {value: "Lopez", selected: false},
      age: {value: "47", selected: false}
    },
    {
      firstName: {value: "Victor", selected: false},
      lastName: {value: "Manuelle", selected: false},
      age: {value: "47", selected: false}
    }
  ];

  $scope.newPerson = {
    firstName: {value: "", selected: false},
    lastName: {value: "", selected: false},
    age: {value: "", selected: false}
  };


  init();

  function init() {
    if (localStorage.tableData) {
      $scope.tableData = JSON.parse(localStorage.tableData);
    }
  }

  $scope.cellClicked = function (cell) {
    cell.selected = !cell.selected;
    saveTableToLocalStorage();
  };

  $scope.addPerson = function () {
    var newPerson = angular.copy($scope.newPerson);
    $scope.tableData.push(newPerson);
    saveTableToLocalStorage();
  };

  function saveTableToLocalStorage() {
    localStorage.tableData = JSON.stringify($scope.tableData);
  }

};
