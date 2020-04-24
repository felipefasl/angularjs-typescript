// Saiba mais sobre controladores em: https://devdocs.io/angularjs~1.7/guide/controller

class HomeController implements ng.IController {

    public static $inject = ['$scope', '$location'];

    constructor(private $scope: ng.IScope, private $location: ng.ILocationService) {

        this.$scope['rotaAtiva'] = this.$location.path();
        console.log(this.$scope['rotaAtiva']);
    }
}

angular.module('homeApp')
    .controller('HomeController', HomeController);
