(function () {
  'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name = "DArek";
$scope.sayHello = function() {
  return "Hello Coursera!";
}

});

})();
