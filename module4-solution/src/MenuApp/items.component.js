(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/MenuApp/templates/MenuItems.template.html',
  bindings: {
    items: '<'
  }
});

})();
