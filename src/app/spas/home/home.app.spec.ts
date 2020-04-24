describe('homeApp', () => {

    let _indexApp: ng.IModule;

    beforeEach(() => {

        _indexApp = angular.module('indexApp');
    });

    it('deveria ter registrado uma rota para \'/\'', () => {

        expect(_indexApp).toBeDefined();
    });
});
