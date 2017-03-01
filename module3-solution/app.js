(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
  templateUrl: 'menuList.html',
  scope: {
      items: '<',
      myTitle: '@titlexx',
      onRemove: '&'
    },
  };

  return ddo;
}

 NarrowItDownController.$inject = ['MenuSearchService'];
 function NarrowItDownController(MenuSearchService) {
   var menu = this;
   menu.search_txt='';
  // menu.title='tytulllll';

   menu.go_search=function(){
     menu.alert = '';

     if (((menu.search_txt).length) === 0) {
       menu.alert = 'Nothing to search';
       menu.found = [];
     }

     else {

    //console.log((menu.search_txt).length);

     var promise = MenuSearchService.getMatchedMenuItems(menu.search_txt);
     promise.then(function (response) {
     menu.found = response;
     if (((menu.found).length) === 0) {
       menu.alert = 'Nothing found!';
     };
    //    console.log(menu.found);
      })
      .catch(function (error) {
        console.log("Something went Terribly wrong.");
      });

    };
   };


    menu.delete = function(pos){
  //   console.log(pos);
     menu.found.splice(pos,1);
   };

 }



MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  var items = [];


  service.getMatchedMenuItems = function (searchTerm) {

   return $http({
     method: "GET",
     url: (ApiBasePath + "/menu_items.json"),
   })
   .then(function (result){

     var foundItems = [];
     var men =  result.data.menu_items;
     var item ={
       short_name: '',
       name: '',
       desc: '',
       id:''
     };

      for (var x=0; x<men.length; x++){

        //if ((men[x].description).indexOf(searchTerm) != -1) {
        if ((men[x].description).toLowerCase().indexOf((searchTerm).toLowerCase()) != -1) {

           item = {
                  short_name:men[x].short_name,
                  name:men[x].name,
                  desc:men[x].description,
                  id:men[x].id
                };
           foundItems.push(item);

         };

      };

   //console.log(foundItems);
   return foundItems;

   });

  };

  // service.AddItem = function(s,n,d){
  //   var item ={
  //     short_name: s,
  //     name: n,
  //     desc: d
  //   };
  //   items.push(item);
  // };
  //
  // service.GetItems = function(){
  //   return foundItems;
  // };
  //
  // service.Clear_Items = function(){
  //   foundItems = [];
  // };

  service.DelItem = function(pos){
    foundItems.splice(pos,1);
  }
}

})();
