angular.module('todoApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: '/views/main.html'
            })
            .otherwise( { redirectTo: '/' } );
    }])
;
