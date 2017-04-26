'use strict'
angular.module('fantasy401k', ['ui.router', 'zingchart-angularjs']).config(function($stateProvider, $urlRouterProvider) {
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

    }).state('dashboard', {
        url: '/dashboard',
        templateUrl: './partials/dashboard-view.html'

    })
    .state('graphs', {templateUrl: './partials/graphs.html'})
    .state('graphs.profile', {
        url: '/profile/base',
        //template: '<mb-report title={{info.title}} image={{info.image}} data={{info.data}} </mb-report>',
        templateUrl: './partials/graphs.base.html',
        controller: function($scope) {
            $scope.info = {}
            $scope.info.title = "User's Base Profile";
            $scope.info.image = '/assets/photos/balanced.png';
            $scope.data = {
                type: 'line',
                series: [
                    {
                        values: [54, 23, 34, 23, 43,20,19,37]
                    }, {
                        values: [10, 15, 16, 20, 40,45,17,47]
                    },
                    {
                        values: [9,13,17,23,29,31,37,41]
                    }
                ]
            };

        }
    })
    .state('graphs.moderate', {
        url: '/profile/moderate',
        templateUrl: './partials/graphs.moderate.html',
        controller: function($scope) {
            $scope.info = {}
            $scope.info.title = "User's Moderate Profile";
            $scope.info.image = '/assets/photos/moderate.png';
            $scope.data = {
                type: 'line',
                series: [
                    {
                      values: [10, 15, 16, 20, 40,45,17,47]
                    }, {
                      values: [54, 23, 34, 23, 43,20,19,37]
                    },
                    {
                        values: [9, 13, 17, 23, 29, 31, 37, 41 ]
                    }
                ]
            };

        }
    })
    .state('graphs.stable', {
        url: '/profile/stable',
        templateUrl: './partials/graphs.stable.html',
        controller: function($scope) {
            $scope.info = {}
            $scope.info.title = "User's Stable Profile";
            $scope.info.image = '/assets/photos/stable.png';
            $scope.data = {
                type: 'line',
                series: [
                    {
                        values: [54, 23, 34, 23, 43,20,19,37]
                    }, {
                      values: [9,13,17,23,29,31,37,41]
                    },
                    {
                      values: [10, 15, 16, 20, 40,45,17,47]
                    }
                ]
            };

        }
    })
    .state('graphs.aggressive', {
        url: '/profile/aggressive',
        templateUrl: './partials/graphs.aggressive.html',
        controller: function($scope) {
            $scope.info = {}
            $scope.info.title = "User's Aggressive Profile";
            $scope.info.image = '/assets/photos/aggressive.png';
            $scope.data = {
                type: 'line',
                series: [
                    {
                      values: [9,13,17,23,29,31,37,41]
                    }, {
                      values: [10, 15, 16, 20, 40,45,17,47]
                    },
                    {
                      values: [54, 23, 34, 23, 43,20,19,37]
                    }
                ]
            };

        }
    });
});
