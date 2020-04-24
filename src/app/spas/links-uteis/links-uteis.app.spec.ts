describe('linksUteisApp', () => {

    let _linksUteisApp: ng.IModule;

    beforeEach(() => {

        _linksUteisApp = angular.module('linksUteisApp');
    });

    it('deveria ter registrado uma rota para \'/\'', () => {

        expect(_linksUteisApp).toBeDefined();
    });
});
