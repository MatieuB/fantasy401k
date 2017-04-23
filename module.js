'use strict'
angular.module('fantasy401k', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: './partials/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: './partials/about.html'

        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: './partials/dashboard-view.html'

        })

});

    // .config(function($routeProvider, $locationProvider) {
    //     $routeProvider
    //         .when('/', {
    //             templateUrl: './partials/home.html',
    //             controller: function($scope) {
    //                 $scope.test = "hello world";
    //             }
    //         })
    //         .when('/about', {
    //             templateUrl: './partials/about.html'
    //             // controller: function($scope) {
    //             //     $scope.test = "hello world";
    //             // }
    //         })
    //         .otherwise({
    //             redirectTo: '/'
    //         });
    //
    //     // $locationProvider.html5Mode(true);
    // });
