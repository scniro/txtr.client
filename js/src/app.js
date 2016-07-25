var app = angular.module('app', ['ui.router', 'oitozero.ngSweetAlert', 'angularSpinner']);

app.constant('API', document.location.hostname == 'localhost' ? 'http://localhost:2013/api/' : 'http://atxtr.azurewebsites.net/api/');

app.config(['$stateProvider', '$locationProvider', '$httpProvider', 'usSpinnerConfigProvider',
    function ($stateProvider, $locationProvider, $httpProvider, usSpinnerConfigProvider) {

        $locationProvider.html5Mode(true);

        usSpinnerConfigProvider.setDefaults({color: 'dodgerblue', radius: 20});

        $httpProvider.interceptors.push('HttpInterceptor');

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                controllerAs: 'homeCtrl',
                templateUrl: 'views/home.html',
            });
    }]);

app.run(['txtrFactory', 'SweetAlert', function (txtrFactory, SweetAlert) {
    txtrFactory.ping().then(function (response) {
        if (response.status !== 200) {
            SweetAlert.swal('service down!', 'we\'re surely working on it', 'warning');
        }
    }, function (error) {
        SweetAlert.swal('service down!', 'we\'re surely working on it', 'warning');
    });
}]);