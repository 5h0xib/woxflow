(function () {
    'use strict';

    angular.module('woxflowApp')
        .config(['$routeProvider', '$locationProvider', routeConfig])
        .run(['$rootScope', '$route', runBlock]);

    function routeConfig($routeProvider, $locationProvider) {
        // HTML5 mode disabled - using hash-based routing (#!/)
        // $locationProvider.html5Mode(true);

        $routeProvider
            // Home page
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                title: 'Woxflow \u2013 Websites That Flow. Automations That Work.',
                meta: 'Woxflow builds high-performance websites and intelligent business automations that help businesses save time, reduce repetitive work, and operate more efficiently. Based in Pune, India.',
                canonical: 'https://woxflow.in/'
            })
            // About page
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutController',
                controllerAs: 'vm',
                title: 'About Woxflow | Web Development & AI Automation Agency \u2013 Pune',
                meta: 'Learn about Woxflow \u2014 a digital solutions agency in Pune combining modern web development, UI/UX design, e-commerce, and AI workflow automation to help businesses grow.',
                canonical: 'https://woxflow.in/#!/about'
            })
            // Services page
            .when('/services', {
                templateUrl: 'views/services.html',
                controller: 'ServicesController',
                controllerAs: 'vm',
                title: 'Services | Web Development & AI Automation \u2013 Woxflow Pune',
                meta: 'Woxflow offers web development, UI/UX design, e-commerce solutions, and AI business automation services in Pune. We build websites and automate workflows for growing businesses.',
                canonical: 'https://woxflow.in/#!/services'
            })
            // Portfolio page
            .when('/portfolio', {
                templateUrl: 'views/portfolio.html',
                controller: 'PortfolioController',
                controllerAs: 'vm',
                title: 'Portfolio | Web Development Projects \u2013 Woxflow',
                meta: 'Explore Woxflow\u2019s portfolio of web development and design projects. See how we build high-performance websites for businesses across industries.',
                canonical: 'https://woxflow.in/#!/portfolio'
            })
            // Contact page
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactController',
                controllerAs: 'vm',
                title: 'Contact Woxflow | Get a Quote \u2013 Web Development & AI Automation',
                meta: 'Ready to build a website or automate your business processes? Contact Woxflow in Pune for a free quote on web development, UI/UX design, e-commerce, or AI automation.',
                canonical: 'https://woxflow.in/#!/contact'
            })
            // Terms of Service page
            .when('/terms', {
                templateUrl: 'views/terms.html',
                controller: 'TermsController',
                controllerAs: 'vm',
                title: 'Terms of Service \u2013 Woxflow',
                meta: 'Read the Terms of Service for Woxflow, a digital solutions agency providing web development and AI automation services in Pune, India.',
                canonical: 'https://woxflow.in/#!/terms'
            })
            // Privacy Policy page
            .when('/privacy', {
                templateUrl: 'views/privacy.html',
                controller: 'PrivacyController',
                controllerAs: 'vm',
                title: 'Privacy Policy \u2013 Woxflow',
                meta: 'Read the Privacy Policy for Woxflow. We are committed to protecting your personal information and your right to privacy.',
                canonical: 'https://woxflow.in/#!/privacy'
            })
            // Success page (after form submission)
            .when('/success', {
                templateUrl: 'views/success.html',
                title: 'Message Sent \u2013 Woxflow',
                meta: 'Your message has been sent successfully. The Woxflow team will be in touch with you shortly.',
                canonical: 'https://woxflow.in/'
            })
            // 404 Page Not Found
            .when('/404', {
                templateUrl: 'views/404.html',
                controller: 'NotFoundController',
                controllerAs: 'vm',
                title: '404 Not Found \u2013 Woxflow',
                meta: 'The page you are looking for could not be found. Return to the Woxflow homepage.',
                canonical: 'https://woxflow.in/'
            })
            // Default redirect to 404
            .otherwise({
                redirectTo: '/404'
            });
    }

    function runBlock($rootScope, $route) {
        var DEFAULT_TITLE = 'Woxflow \u2013 Websites That Flow. Automations That Work.';
        var DEFAULT_META  = 'Woxflow is a digital solutions agency in Pune offering web development, UI/UX design, e-commerce, and AI business automation services.';
        var DEFAULT_URL   = 'https://woxflow.in/';

        $rootScope.$on('$routeChangeSuccess', function () {
            window.scrollTo(0, 0);

            var current   = $route.current;
            var title     = (current && current.title)     || DEFAULT_TITLE;
            var meta      = (current && current.meta)      || DEFAULT_META;
            var canonical = (current && current.canonical) || DEFAULT_URL;

            // --- Browser tab title ---
            document.title = title;

            // --- Meta description ---
            var descTag = document.querySelector('meta[name="description"]');
            if (descTag) { descTag.setAttribute('content', meta); }

            // --- Canonical URL ---
            var canonicalTag = document.querySelector('link[rel="canonical"]');
            if (canonicalTag) { canonicalTag.setAttribute('href', canonical); }

            // --- Open Graph ---
            var ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) { ogTitle.setAttribute('content', title); }

            var ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) { ogDesc.setAttribute('content', meta); }

            var ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) { ogUrl.setAttribute('content', canonical); }

            // --- Twitter Card ---
            var twTitle = document.querySelector('meta[property="twitter:title"]');
            if (twTitle) { twTitle.setAttribute('content', title); }

            var twDesc = document.querySelector('meta[property="twitter:description"]');
            if (twDesc) { twDesc.setAttribute('content', meta); }

            var twUrl = document.querySelector('meta[property="twitter:url"]');
            if (twUrl) { twUrl.setAttribute('content', canonical); }
        });
    }

})();


