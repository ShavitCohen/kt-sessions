/**
 * Created by cohensha on 10/5/2015.
 */
angular.module('KTPracticeApp')
  .service('session2Service', session2Service);

session2Service.$inject =[];

function session2Service(){

  var obj = {
    sayHello:sayHello,
    name:"shavit"
  };

  function sayHello(){
    console.log("hello");
  }

  return obj;

}
