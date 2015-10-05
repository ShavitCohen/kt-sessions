'use strict';

/**
 * @ngdoc function
 * @name ktpracticeApp.controller:session1Ctrl
 * @description
 * # session1Ctrl
 * Controller of the KTPracticeApp
 */
angular.module('KTPracticeApp')
  .controller('session2Ctrl', session2Ctrl);

session2Ctrl.$inject = ["$scope",'session2Service','$http','$q'];
function session2Ctrl($scope,session2Service,$http,$q) {

  //We are registering the session2Service to the $scope in order to be able to use it's logic from the template
  $scope.session2Service = session2Service;
  session2Service.sayHello();

  /**
   * This function is returning a promise
   * @param delayTime
   * @returns {*}
   */
  function sayHelloDelay(delayTime){
    var deferred = $q.defer();

    timeout(function(){
      console.log("hello");

      deferred.resolve("I am done");

    },delayTime);

    return deferred.promise;
  }

  sayHelloDelay(5000).then(function(msg){
    console.log(msg); //#I am done
  });


  /**
   * This is an example of a $http.get method which returning a promise as well
   */
  $http.get("/monitors",{})
    .success(function(respond){

    })
    .error(function(respond){

    })



};
