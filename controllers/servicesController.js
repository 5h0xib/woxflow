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
                description: 'We build custom websites and web applications tailored to your business. From business websites and landing pages to complex web applications and APIs, our team uses modern technologies and best practices to deliver fast, secure, and scalable solutions.',
                features: [
                    'Business websites & landing pages',
                    'Web applications & portals',
                    'API development & integration',
                    'CMS integration',
                    'Performance optimization',
                    'Responsive design'
                ]
            },
            {
                title: 'UI/UX Design',
                description: 'Our design team creates clean, intuitive interfaces that engage users and improve conversions. We focus on user research, wireframing, prototyping, and visual design to craft digital experiences that are easy to use and built around your audience.',
                features: [
                    'User research',
                    'Wireframing & prototyping',
                    'Visual design',
                    'Responsive design',
                    'Usability optimization',
                    'Interaction design'
                ]
            },
            {
                title: 'E-Commerce Solutions',
                description: 'Launch your online store with confidence. We develop complete e-commerce platforms with secure payment processing, product management, and seamless checkout experiences designed to convert browsers into buyers and scale with your business.',
                features: [
                    'Online store development',
                    'Payment gateway integration',
                    'Product & inventory management',
                    'Order management',
                    'Third-party integrations',
                    'Analytics & reporting'
                ]
            },
            {
                title: 'Maintenance & Support',
                description: 'Keep your website running smoothly with our ongoing maintenance and support services. We provide regular updates, security monitoring, performance checks, and technical support so your site stays secure, fast, and up to date.',
                features: [
                    'Regular updates & patches',
                    'Security monitoring',
                    'Performance optimization',
                    'Technical support',
                    'Backup & recovery'
                ]
            },
            {
                title: 'AI Automation',
                description: 'We design intelligent workflows that automate repetitive business processes, connect the tools your team already uses, and apply AI where it can provide real value. The result is less manual work, fewer errors, and more time for your team to focus on what matters.',
                features: [
                    'Lead capture & qualification',
                    'Automated email workflows',
                    'CRM automation',
                    'Customer support automation',
                    'Document & data processing',
                    'Notifications & approval workflows',
                    'Social media & marketing workflows',
                    'Business reporting automation',
                    'API & application integrations'
                ]
            }
        ];
    }

})();
