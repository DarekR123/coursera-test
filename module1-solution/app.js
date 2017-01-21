(function () {
  'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
$scope.food = "";
$scope.result_txt = "--->";
$scope.what_food = function() {
  return "What do you eat for lunch? (enter separately with coma ',' )";
}

$scope.ile = function(){
  var re = /\s*,\s*/;
  var nameList=$scope.food.split(re);
  var counter = 0
  angular.forEach(nameList, function(value) {
     if (value) counter++;
   });
  console.log(counter);
  $scope.result(counter);
};

$scope.result = function(il){
  if (il >= 4) $scope.result_txt = "Too much!";
  if (il < 4) $scope.result_txt = "Enjoy!";
  if (il == 0) $scope.result_txt = "Please enter data first";

};

});

})();
