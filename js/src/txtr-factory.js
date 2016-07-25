angular.module('app').factory('txtrFactory', ['$http', 'API', function ($http, API) {

    return {
        ping: function(){
            return $http.get(API + 'Text');
        },
        send: function (target) {
            return $http.post(API + 'Text/Send/', '"' + target + '"', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    }
}]);