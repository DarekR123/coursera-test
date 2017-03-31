(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common'])
.service('DataService', DataService);

DataService.$inject = ['$http', 'ApiPath'];
function DataService($http, ApiPath) {
    var service = this;
    var items = [];
    service.registered = false;

    service.firstname = '';
    service.lasttname = '';
    service.e_mail = '';
    service.phone = '';
    service.mymenu = '';
    service.name = '';
    service.description = '';

    service.storeData = function (f,l,e,p,m,n,d) {
      service.firstname = f;
      service.lasttname = l;
      service.e_mail = e;
      service.phone = p;
      service.mymenu = m.toUpperCase();
      service.name = n;
      service.description = d;
      service.registered = true;
      console.log('---->', service.name);
    };

    service.getMatchedMenuItems = function (searchTerm) {
       console.log(searchTerm);
       return $http({
         method: "GET",
         url: (ApiPath + "/menu_items/"+searchTerm+".json"),
       })
       .then(function (result){
           var wynik = result;

      // console.log('1-', wynik);
      // console.log('11-', wynik.data.name);
      // console.log('111-', wynik.data.description);
      // console.log('111-', wynik.status);

      //  if ((wynik >= 200) && (wynik < 301)) {
      //    service.founded = true;
      //  }
      //  console.log(w);
       return wynik;
     },
     function errorCallback(result) {
      var wynik = result.status;
      console.log('2-', wynik);
  // called asynchronously if an error occurs
  // or server returns response with an error status.
     return wynik;
   });

   };

}

})();
