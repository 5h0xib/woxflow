(function () {
    'use strict';

    angular.module('woxflowApp')
        .config(['$routeProvider', '$locationProvider', routeConfig])
        .run(['$rootScope', runBlock]);

    function routeConfig($routeProvider, $locationProvider) {
        // HTML5 mode disabled - using hash-based routing (#!/)
        // $locationProvider.html5Mode(true);

        $routeProvider
            // Home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                title: 'Woxflow - Building Websites That Flow'
            })
            // About page
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController',
                controllerAs: 'vm',
                title: 'About Us - Woxflow'
            })
            // Services page
            .when('/services', {
                templateUrl: 'views/services.html',
                controller: 'ServicesController',
                controllerAs: 'vm',
                title: 'Services - Woxflow'
            })
            // Portfolio page
            .when('/portfolio', {
                templateUrl: 'views/portfolio.html',
                controller: 'PortfolioController',
                controllerAs: 'vm',
                title: 'Portfolio - Woxflow'
            })
            // Contact page
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactController',
                controllerAs: 'vm',
                title: 'Contact Us - Woxflow'
            })
            // Terms of Service page
            .when('/terms', {
                templateUrl: 'views/terms.html',
                controller: 'TermsController',
                controllerAs: 'vm',
                title: 'Terms of Service - Woxflow'
            })
            // Privacy Policy page
            .when('/privacy', {
                templateUrl: 'views/privacy.html',
                controller: 'PrivacyController',
                controllerAs: 'vm',
                title: 'Privacy Policy - Woxflow'
            })
            // Success page (after form submission)
            .when('/success', {
                templateUrl: 'views/success.html',
                title: 'Message Sent - Woxflow'
            })
            // 404 Page Not Found
            .when('/404', {
                templateUrl: 'views/404.html',
                controller: 'NotFoundController',
                controllerAs: 'vm',
                title: '404 Not Found - Woxflow'
            })
            // Default redirect to 404
            .otherwise({
                redirectTo: '/404'
            });
    }

    function runBlock($rootScope, $route) {
        // Scroll to top on route change
        $rootScope.$on('$routeChangeSuccess', function () {
            window.scrollTo(0, 0);

            // Update page title
            if ($route.current.title) {
                document.title = $route.current.title;
            } else {
                document.title = 'Woxflow - Building Websites That Flow';
            }
        });
    }

})();

