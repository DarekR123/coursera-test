(function () {
'use strict';

//angular.module('MenuApp')
angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
    var service = this;
    var items = [];

    var service = this;

    service.getAllCategories = function () {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
        //http://davids-restaurant.herokuapp.com
      //url: ("http://davids-restaurant.herokuapp.com/categories.json")
      });
      console.log('wszystkie kategorie', response);
      //console.log(response);
      return response;
    };


  service.getItemsForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };


    };

})();
