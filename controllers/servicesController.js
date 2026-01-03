/**
 * Services Page Controller
 */

(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('ServicesController', ServicesController);

    function ServicesController() {
        var vm = this;

        // Detailed services
        vm.services = [
            {
                title: 'Web Development',
                description: 'We build custom websites tailored to your business needs. From simple landing pages to complex web applications, our development team uses modern frameworks and best practices to deliver fast, secure, and scalable solutions.',
                features: [
                    'Responsive design',
                    'Custom functionality',
                    'CMS integration',
                    'API development',
                    'Performance optimization'
                ]
            },
            {
                title: 'UI/UX Design',
                description: 'Our design team creates beautiful, intuitive interfaces that engage users and drive conversions. We focus on user research, wireframing, prototyping, and visual design to craft exceptional digital experiences.',
                features: [
                    'User research',
                    'Wireframing & prototyping',
                    'Visual design',
                    'Interaction design',
                    'Usability testing'
                ]
            },
            {
                title: 'E-Commerce Solutions',
                description: 'Launch your online store with confidence. We develop complete e-commerce platforms with secure payment processing, inventory management, and seamless checkout experiences that convert browsers into buyers.',
                features: [
                    'Shopping cart systems',
                    'Payment gateway integration',
                    'Product management',
                    'Order tracking',
                    'Analytics & reporting'
                ]
            },
            {
                title: 'Maintenance & Support',
                description: 'Keep your website running smoothly with our ongoing maintenance and support services. We provide regular updates, security patches, performance monitoring, and technical support to ensure your site stays secure and up-to-date.',
                features: [
                    'Regular updates',
                    'Security monitoring',
                    'Performance optimization',
                    'Technical support',
                    'Backup & recovery'
                ]
            }
        ];
    }

})();
