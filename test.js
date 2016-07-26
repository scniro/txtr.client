describe('homeCtrl', function() {

    var $controller, $scope, $httpBackend, txtrFactory;

    beforeEach(angular.mock.module('oitozero.ngSweetAlert'));

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$httpBackend_, _txtrFactory_){
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        txtrFactory = _txtrFactory_;
    }));

    it('should call the api', function() {

        $httpBackend
            .whenGET('http://localhost:2013/api/Text')
            .respond(200);

        $httpBackend.whenGET(/views/).respond(200);

        $httpBackend
            .whenPOST('http://localhost:2013/api/Text/Send/', '"7165415574"')
            .respond(200, 'yo mama');

        var controller = $controller('homeCtrl', { $scope: $scope});

        controller.textForm = {
            $valid: true
        }

        controller.send('7165415574').then(function(response){
            expect(response.data).toBe('yo mama');
        });

        $httpBackend.flush();
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});