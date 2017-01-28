(function(){
'use strict';
angular.module('my_module', [])
.controller('my_controller', fff);

fff.$inject = ['$scope'];
function fff($scope){
  $scope.name = 'cos_tam';
  $scope.ile = 0;

  $scope.policz = function(){
    var il = liczasc($scope.name);
    $scope.ile = il;
  };

  function liczasc(napis){
    var num = 0;
    for (var x=0;x<napis.length;x++){
      num+=napis.charCodeAt(x);
    };
    return num
  };

  $scope.zamien_name =function(){
    $scope.name += 'dddddd';
    $scope.policz();
  };


    $scope.rootFolders = 'bob@go.com';
    $scope.buy_list = [{
        id: 0,
        state: 1,
        name: 'cake',
        quantity: '10',
        unit: 'packs of'
    }, {
        id: 1,
        state: 1,
        name: 'milks',
        quantity: '4',
        unit: 'bootles of'
    }, {
      id: 3,
      state: 1,
      name: 'chese',
      quantity: '0,25',
      unit: 'kg of'

    }]

    $scope.toby = '----------To Buy:';
    $scope.loadEmail = function (user) {
        user.state = 0;
        var wyn = 0;
        for (var x = 0; x<$scope.buy_list.length; x++){
          wyn+=user.state;
        };
        if (wyn = 0) $scope.toby=$scope.toby+'all is already bought';
        console.log(wyn)
    };



};

})()
