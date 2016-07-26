angular.module('app').controller('homeCtrl', ['$scope', 'txtrFactory', 'SweetAlert', function ($scope, txtrFactory, SweetAlert) {

    var vm = this;

    vm.send = function (target) {

        if (!vm.textForm.$valid) {

            SweetAlert.swal('oops!', 'this form is invalid', 'warning');
        } else {
            return txtrFactory.send(target).then(function (response) {
                SweetAlert.swal('Damn dude!', response.data, 'success');
                return response;
            }, function (response) {
                SweetAlert.swal('oops!', response.data.Message, 'warning');
                return response;
            });
        }
    }
}]);