namespace app {

    /**
     * @description Realiza a orquestração de rotas do app
     * @param $routeProvider Objeto usado na configação de rotas no Angularjs
     */
    configurarRotas.$inject = ['$routeProvider', '$locationProvider'];
    function configurarRotas($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider) {

        // Utilizando o HTML5 History API
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: './app/spas/home/home.tpl.html',
            })
            .when('/links-uteis', {
                templateUrl: './app/spas/links-uteis/links-uteis.tpl.html',
            })
            .otherwise({ redirectTo: '/' });
    }

    // Lista de dependencias do módulo "app"
    const LISTA_DEPENDENCIAS = [
        'ngRoute',
        'ngSanitize',
        'homeApp',
        'linksUteisApp'
    ];

    angular.module('indexApp', LISTA_DEPENDENCIAS)
        .config(configurarRotas);
}
