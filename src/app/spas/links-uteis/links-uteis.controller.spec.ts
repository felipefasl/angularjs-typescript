describe('LinksUteisController', () => {
    let _linksUteisController: app.links_uteis.LinksUteisController;

    beforeEach(() => {

        angular.mock.module('linksUteisApp');
        angular.mock.inject((_$controller_: ng.IControllerService) => {

            _linksUteisController = _$controller_('LinksUteisController');
        });
    });

    it('instancia', () => {

        expect(_linksUteisController).toBeDefined();
    });
    it('$onInit', () => {

        _linksUteisController.$onInit();
        expect(_linksUteisController.listaLinks).toBeDefined();
        expect(_linksUteisController.titulo).toBeDefined();
    });
});
