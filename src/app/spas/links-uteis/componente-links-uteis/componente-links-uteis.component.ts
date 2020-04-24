// Saiba mais sobre components em: https://devdocs.io/angularjs~1.7/guide/component

function getOptionsComponenteExemplo(): ng.IComponentOptions {

    return {
        bindings: {
            listaLinks: '<'
        },
        templateUrl: './app/spas/links-uteis/componente-links-uteis/componente-links-uteis.tpl.html',
        controller: 'ComponenteLinksUteisComponentController as vm'
    };
}


angular.module('linksUteisApp')
    .component('componenteLinksUteis', getOptionsComponenteExemplo());