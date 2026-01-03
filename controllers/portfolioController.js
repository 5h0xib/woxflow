(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('PortfolioController', PortfolioController);

    function PortfolioController() {
        var vm = this;

        // Portfolio projects
        vm.projects = [
            {
                id: 1,
                name: 'The Saysha',
                type: 'Office Automation Solutions',
                color: '#f06e6eff',
                description: 'Modern website with elegant product showcase and smooth user experience.',
                image: 'assets/images/portfolio-thesaysha.png',
                url: 'https://thesaysha.com'
            },
            {
                id: 2,
                name: 'Research Graph',
                type: 'Research Platform',
                color: '#3a89ffff',
                description: 'Academic research platform with market research, data analytics and more',
                image: 'assets/images/portfolio-ResearchGraph.png',
                url: 'https://researchgraph.in'
            },
            {
                id: 3,
                name: 'Rise Tech Global',
                type: 'Technology Company',
                color: '#389adbff',
                description: 'Corporate website showcasing technology solutions with clean, professional design.',
                image: 'assets/images/portfolio-RiseTechGlobal.png',
                url: 'https://risetechglobal.com'
            },
            {
                id: 4,
                name: 'Poonawala Cab Services',
                type: 'Service Platform',
                color: '#f7c621',
                description: 'Complete cab booking platform with user-friendly interface.',
                image: 'assets/images/portfolio-poonawalacabservices.png',
                url: 'https://poonawalacabservices.in'
            },
            {
                id: 5,
                name: 'iPhonic Services',
                type: 'Corporate Website',
                color: '#f18f44',
                description: 'Apple devices repair services website with modern design and seamless user experience.',
                image: 'assets/images/portfolio-iphonicservices.png',
                url: 'https://iphonicservices.com'
            }
        ];
    }

})();
