(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['DataService','ApiPath'];
function SignUpController(DataService, ApiPath) {
  var regs = this;
  regs.Path = ApiPath;
  regs.fname = DataService.firstname;
  regs.lname = DataService.lasttname ;
  regs.e_mail = DataService.e_mail;
  regs.phone = DataService.phone;
  regs.mymenu = DataService.mymenu;
  regs.registered = DataService.registered;
  regs.name = DataService.name;
  regs.description = DataService.description;
  console.log(regs.fname);
  console.log(regs.registered);
  console.log(regs.Path);
}

})();
