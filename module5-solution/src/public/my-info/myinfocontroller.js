(function () {

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['DataService'];
function RegistrationController(DataService) {
  var reg = this;
  //reg.user.phone = '###-###-####';

  reg.submit = function () {

    reg.completed = false;
    reg.nocategory = true;

   var wynik1 = DataService.getMatchedMenuItems(reg.user.sname.toUpperCase());

   var promise = DataService.getMatchedMenuItems(reg.user.sname.toUpperCase());
     promise.then(function (response) {

        if (response.status == 200) {
          DataService.storeData(reg.user.firstname,reg.user.lastname,reg.user.email,reg.user.phone,reg.user.sname,
            response.data.name, response.data.description);
          reg.nocategory = false;
          reg.completed = true;
        };
        console.log('3-',response.data.name);
      })
      .catch(function (error) {
        console.log("Something went Terribly wrong.");
      });
   //console.log('-----', wynik1.d.$$state.value);

  };
}

})();
