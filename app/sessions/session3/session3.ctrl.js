/**
 * Created by cohensha on 10/6/2015.
 */
angular.module('KTPracticeApp')
  .controller('session3Ctrl', session3Ctrl);

session3Ctrl.$inject = ["$scope", "$filter"];
function session3Ctrl($scope, $filter) {

  $scope.arr = ["home", "yes", "no", "israel", "sea", "flight"];

  $scope.num1 = 5;

  $scope.num2 = 88;

  /**
   * When we want to use a filter for ng-repeat we use don't use the filter module, rather we
   * If the function will have
   * @param item
   * @returns {boolean}
   */
  $scope.longerThen = function (num) {
    return function (item) {
      if (item.length > num) {
        return true;
      } else {
        return false;
      }
    }


  }


}
