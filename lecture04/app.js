(function () {
  'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.name1 = "Darek";
$scope.sayHello = function() {
  return "Hello Coursera";
}

});

})();
