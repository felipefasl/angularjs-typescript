// Saiba mais sobre controladores em: https://devdocs.io/angularjs~1.7/guide/controller

class ComponenteLinksUteisComponentController implements ng.IComponentController {

    /**
     * Variável recebida via bind do componente-exemplo
     */
    listaLinks: { descricao: string, caminho: string }[];

    static $inject = [];

    constructor() { }
}



angular.module('linksUteisApp')
    .controller('ComponenteLinksUteisComponentController', ComponenteLinksUteisComponentController);