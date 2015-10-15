/**
 * Created by cohensha on 10/14/2015.
 */
angular.module('KTPracticeApp')
  .controller('session4Ctrl', session4Ctrl);

session4Ctrl.$inject = ["$scope"];

function session4Ctrl($scope) {
  $scope.state = {
    danger: true,
    success: false
  };

  $scope.getClass = function(){
    return {'bg-danger': $scope.state.danger, 'bg-success': $scope.state.success};
  };


  $scope.changeState= function () {
    $scope.state.danger = !($scope.state.danger);
    $scope.state.success = !($scope.state.success);
  };

  $scope.getStyle = function(){
    return {
      'background-color': ($scope.state.danger) ? "red" : "blue"
    }
  };


}
