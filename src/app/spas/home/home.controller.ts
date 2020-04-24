// Saiba mais sobre controladores em: https://devdocs.io/angularjs~1.7/guide/controller

namespace app.home {

    export class HomeController implements ng.IController {

        public static $inject = [];

        constructor() { }
    }

    angular.module('homeApp')
        .controller('HomeController', HomeController);
}