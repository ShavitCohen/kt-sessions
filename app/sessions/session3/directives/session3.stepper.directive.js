/**
 * Created by cohensha on 10/7/2015.
 */
angular.module('KTPracticeApp')
  .directive('stepper', stepper);

stepper.$inject = [];
function stepper() {
  return {
    restrict:"E",
    templateUrl:"sessions/session3/directives/session3.stepper.directive.tpl.html",
    scope :{
      number:"="
    },
    link:link
  }

  function link(scope, element, attributes){
    scope.increase = function(){
      scope.number ++;
    };

    scope.decrease = function(){
      scope.number --;
    };
  }
}
