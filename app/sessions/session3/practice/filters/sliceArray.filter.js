/**
 * Created by cohensha on 10/7/2015.
 */
angular.module('KTPracticeApp')
  .filter('sliceArray', sliceArray);

sliceArray.$inject = [];

function sliceArray() {
  var cache = {}; // we are caching the results because we don't want to slice every angular digest loop - it consume too much resources
  return filter;

  function filter (array, startIndex, endIndex) {
    if(array){
      if(cache[startIndex + "-" + endIndex]){
        return cache[startIndex + "-" + endIndex];
      }else{
        cache[startIndex + "-" + endIndex] = array.slice(startIndex,endIndex);
      }
      return cache[startIndex + "-" + endIndex];
    }
  }

}
