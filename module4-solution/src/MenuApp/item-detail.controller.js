(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['item'];
function ItemDetailController(item) {
  var itemDetail = this;
  console.log(item.data.menu_items);
  // var item = items[$stateParams.itemId];
  itemDetail.item = item.data.menu_items;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}

})();
