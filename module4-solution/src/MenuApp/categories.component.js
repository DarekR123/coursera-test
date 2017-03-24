(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/MenuApp/templates/MenuCategories.template.html',
  bindings: {
    items: '<'
  }
});

})();
