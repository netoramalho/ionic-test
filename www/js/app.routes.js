(function() {
    'use strict';

    angular
        .module('ionicTest')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            })
            .state('create-user', {
                url: "/create-user",
                templateUrl: "templates/create-user.html",
                controller: 'CreateUserCtrl'
            })
            .state('tab', {
                url: "/tab",
                abstract: true,
                templateUrl: "templates/tabs.html"
            })
            .state('tab.nearby-users', {
                url: '/nearby-users',
                views: {
                    'tab-nearby-users': {
                        templateUrl: 'templates/tab-nearby-users.html',
                        controller: 'nearbyUsersCtrl'
                    }
                }
            })
            .state('tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            });

        $urlRouterProvider.otherwise('/login');
    }
})();