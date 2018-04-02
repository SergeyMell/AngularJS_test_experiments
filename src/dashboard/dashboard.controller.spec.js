describe('Dashboard Controller', function() {

    let $ctrl, $httpBackend;
    const userMock = require('../mocks/users');

    beforeEach(function() {
        angular.mock.module('core');
    });

    beforeEach(inject(function($controller, $injector) {
        $ctrl = $controller;
        $httpBackend = $injector.get('$httpBackend');

        $httpBackend.when('GET', 'https://jsonplaceholder.typicode.com/users')
            .respond(userMock);
    }));

    it('initial state', function() {
        const d = $ctrl('DashboardController', {});
        expect(d.model.users).toEqual([]);
    });

    it('mocked request', function() {
        $httpBackend.expectGET('https://jsonplaceholder.typicode.com/users');
        const d = $ctrl('DashboardController', {});
        $httpBackend.flush();

        expect(d.model.users[0].name).toBe('Sergey Mell');
    });

});