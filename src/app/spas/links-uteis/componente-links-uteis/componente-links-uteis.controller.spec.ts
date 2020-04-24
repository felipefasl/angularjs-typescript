describe('ComponenteLinksUteisComponentController', () => {
    let _componente: app.links_uteis.LinksUteisController;
    let _$compile: ng.ICompileService;
    let _$templateCache: ng.ITemplateCacheService;
    let _$scope: ng.IScope;


    beforeEach(() => {

        angular.mock.module('linksUteisApp');
        angular.mock.inject((
            _$compile_: ng.ICompileService,
            _$templateCache_: ng.ITemplateCacheService,
            _$componentController_: ng.IComponentControllerService,
            _$rootScope_: ng.IRootScopeService) => {

            _$compile = _$compile_;
            _$templateCache = _$templateCache_;
            _$scope = _$rootScope_.$new();
            _componente = _$componentController_('componenteLinksUteis', { $scope: _$scope }, { listaLinks: [] });
        });
    });

    it('instancia', () => {

        expect(_componente).toBeDefined();
        expect(_componente.listaLinks).toBeDefined();
    });

    it('template', () => {

        const lista = [
            { descricao: 'descricao1', caminho: 'caminho1' }
        ];

        _$scope['lista'] = lista;

        _$templateCache.put('./app/spas/links-uteis/componente-links-uteis/componente-links-uteis.tpl.html',
            `<ul><li ng-repeat="link in vm.listaLinks"><a href="{{link.caminho}}" target="_blank">{{link.descricao}}</a></li></ul>`);

        const _element = angular.element(`<componente-links-uteis lista-links="lista"/>`);
        const _elementCompiled = _$compile(_element)(_$scope);
        _$scope.$digest();

        const html = _elementCompiled.html();

        expect(html.indexOf(lista[0].descricao)).not.toEqual(-1);
        expect(html.indexOf(lista[0].caminho)).not.toEqual(-1);
    });
});
