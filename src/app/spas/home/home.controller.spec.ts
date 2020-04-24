describe('HomeController', () => {
    let _homeController: app.home.HomeController;

    beforeEach(function () {

        angular.mock.module('homeApp');
        angular.mock.inject(function (_$controller_) {
            _homeController = _$controller_('HomeController');
        });
    });

    it('instancia', function () {

        expect(_homeController).toBeDefined();
    });
});
