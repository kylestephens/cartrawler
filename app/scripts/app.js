'use strict';

/**
 * @ngdoc overview
 * @name cartrawlerApp
 * @description
 * # cartrawlerApp
 *
 * Main module of the application.
 */
angular
.module('cartrawlerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
])
.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/detail', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl',
            controllerAs: 'detail'
        })
        .otherwise({
            redirectTo: '/'
        });
});
