/**
 * Created by cohensha on 10/7/2015.
 */
angular.module('KTPracticeApp')
  .filter('capital', capital);

capital.$inject = [];

function capital(item){
  return filter;

  function filter(item){
    return item.toUpperCase();
  }

}
