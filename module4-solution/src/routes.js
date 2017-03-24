(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/MenuApp/templates/home.template.html'
  })

  // Premade list page
  .state('Categories', {
    url: '/Categories',
    // template: '<div>tttttttt <a ui-sref="home">Home</a> &lt; <span>Back to home</span> </div>'
    //templateUrl: 'src/MenuApp/templates/main-shoppinglist.template.html',
    templateUrl: 'src/MenuApp/templates/Main-MenuCategory.template.html',
    controller: 'MainMenuAppControllerTest as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
//  .state('mainList.itemDetail', {
    .state('MenuItemList', {
    url: '/MenuItemList/{itemId}',
  //  url: '/item-detail/{itemId}',
    //template: '<div>tttttttt {itemId} <a ui-sref="home">Home</a> &lt; <span>Back to home</span> </div>'
     templateUrl: 'src/MenuApp/templates/item-detail.template.html',
     controller: 'ItemDetailController as itemDetail',
     resolve: {
       item: ['$stateParams','MenuDataService',
          function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.itemId);
       }]
     }
    // params: {
    //   itemId: null
    // }
  });

}

})();
