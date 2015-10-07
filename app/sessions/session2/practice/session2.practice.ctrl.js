'use strict';

/**
 * @ngdoc function
 * @name ktpracticeApp.controller:session2PracticeCtrl
 * @description
 * # session2PracticeCtrl
 * Controller of the KTPracticeApp
 */
angular.module('KTPracticeApp')
  .controller('session2PracticeCtrl', session2PracticeCtrl);

session2PracticeCtrl.$inject = ['$scope','$http'];

function session2PracticeCtrl($scope,$http) {
  $scope.imageData = {
    showData:false,
    name:"",
    websiteURL:"",
    visibleUrl:""
  };

  $scope.getImages = function(){
    $scope.imageData.showData = false;
    $http.jsonp("http://ajax.googleapis.com/ajax/services/search/images?v=1.0&callback=JSON_CALLBACK&q=" + $scope.query)
      .success(function(data, status, headers, config) {
      $scope.images = data.responseData.results;
    })
      .error(function(data, status, headers, config) {
        $scope.error = true;
      });
  }

  $scope.displayImageData = function(image){
    $scope.imageData.name = image.contentNoFormatting;;
    $scope.imageData.websiteURL = image.originalContextUrl;
    $scope.imageData.visibleUrl = image.visibleUrl;
    $scope.imageData.showData = true;
  }

};
