describe('indexApp - Teste de configuração', () => {

    let _$routeProvider: ng.route.IRouteProvider;

    beforeEach(() => {

        angular.mock.module('ngRoute', (_$routeProvider_: ng.route.IRouteProvider) => {

            _$routeProvider = _$routeProvider_;
            spyOn(_$routeProvider, 'when').and.callThrough();
            spyOn(_$routeProvider, 'otherwise').and.callThrough();
        });
        angular.mock.module('indexApp');
        angular.mock.inject();
    });

    it('deveria ter registrado uma rota para \'/\'', () => {

        expect(_$routeProvider.when).toHaveBeenCalled();
    });
});
