(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppControllerTest', MainMenuAppControllerTest)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


//MainMenuAppController.$inject = ['MenuDataService', 'items'];
//function MainMenuAppController(MenuDataService, items) {
MainMenuAppControllerTest.$inject = ['items'];
function MainMenuAppControllerTest(items) {
  var mainList = this;
  mainList.items = items.data;
  //console.log('kontroller - test');
  //console.log(items.data);
}

})();
