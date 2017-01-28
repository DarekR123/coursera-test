(function () {
'use strict';

angular.module('my_module', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  var showList = this;

    showList.w = false;
    showList.wy = true;
    showList.w2 = true;
    showList.wy2 = false;

  showList.items = ShoppingListCheckOffService.getItems();


  showList.aremoveItem = function (itemIndex) {
    ShoppingListCheckOffService.aremoveItem(itemIndex);
    showList.wynik = ShoppingListCheckOffService.emptytobuy();
    showList.wynik2 = ShoppingListCheckOffService.emptytobuy1();

    if (showList.wynik2 == 0){
        showList.w2 = true;
        showList.wy2 = false;
    }
      else {
          showList.w2 = false;
          showList.wy2 = true;
      }

    if (showList.wynik == 0){
       showList.w = true;
       showList.wy = false;

    }
      else {
          showList.w = false;
          showList.wy = true;
      }
  };


}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.w = false;
  showList.wy = true;

  showList.items = ShoppingListCheckOffService.getbItems();




}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [];


  var items_tobuy = [
      {
      name: 'cakes',
      quantity: '10 bags'
      },
      {
      name: 'milk',
      quantity: '2 bottles'
      },
      {
      name: 'pizza',
      quantity: '2 pieces'
      },
      {
      name: 'chocolate',
      quantity: '1 plate'
      },
      {
      name: 'apples',
      quantity: '2 kg'
      },
      {
      name: 'tomatoes',
      quantity: '10'
      }

    ];

    //var iptb = 3;
    var iptb = items_tobuy.length;
    var ipb = 0;

  service.emptytobuy = function(){

      return iptb;

  };

    service.emptytobuy1 = function(){

      return ipb;

  };

  service.aremoveItem = function (itemIdex) {
    var item = [];
      item = items_tobuy[itemIdex];
    items.push(item);

    items_tobuy.splice(itemIdex, 1);
    iptb-=1;
    ipb+=1;

  };



  service.getItems = function () {
    return items_tobuy;
  };

  service.getbItems = function () {
    return items;
  };
}

})();
