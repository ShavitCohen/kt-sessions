/**
 * Created by cohensha on 10/6/2015.
 */
angular.module('KTPracticeApp')
  .directive('colorPicker', colorPicker);

colorPicker.$inject = [];

function colorPicker() {
  return {
    scope: {
      colors:"=",
      selectedColor:"=",
      colorPickerName:"@"
    },
    link: link,
    templateUrl: 'sessions/session3/practice/directives/colorPicker/colorPicker.directive.tpl.html',
    restrict: 'E'
  };

  function link(scope, element, attrs) {

  }
}
