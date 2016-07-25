app.factory('HttpInterceptor', ['$q', 'usSpinnerService', function ($q, usSpinnerService) {

    return {
        'request': function (config) {
            usSpinnerService.spin('spinner');
            return config || $q.when(config);
        },
        'requestError': function (rejection) {
            usSpinnerService.spin('spinner');
            return $q.reject(rejection);
        },
        'response': function (response) {
            usSpinnerService.stop('spinner');
            return response || $q.when(response);
        },
        'responseError': function (rejection) {
            usSpinnerService.stop('spinner');
            return $q.reject(rejection);
        }
    };
}]);