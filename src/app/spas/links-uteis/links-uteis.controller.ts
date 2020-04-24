// Saiba mais sobre controladores em: https://devdocs.io/angularjs~1.7/guide/controller

namespace app.links_uteis {

    export class LinksUteisController implements ng.IController {

        public titulo: string;
        public listaLinks: { descricao: string, caminho: string }[];

        public static $inject = [];

        constructor() { }

        $onInit() {

            this.titulo = 'Links Úteis';
            this.listaLinks = [
                { descricao: 'AngularJS', caminho: 'https://devdocs.io/angularjs' },
                { descricao: 'TypeScript', caminho: 'https://www.typescriptlang.org/' },
                { descricao: 'AngularJS + TypeScript', caminho: 'https://codepen.io/martinmcwhorter/post/angularjs-1-x-with-typescript-or-es6-best-practices' }
            ];
        }
    }

    angular.module('linksUteisApp')
        .controller('LinksUteisController', LinksUteisController);
}