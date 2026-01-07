/**
 * Home Page Controller
 */

(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('HomeController', HomeController);

    function HomeController() {
        var vm = this;

        // Services preview data
        vm.services = [
            {
                title: 'Web Development',
                description: 'Custom websites built with modern technologies, optimized for performance and scalability.',
                icon: 'code'
            },
            {
                title: 'UI/UX Design',
                description: 'Beautiful, intuitive interfaces designed to engage users and drive conversions.',
                icon: 'palette'
            },
            {
                title: 'E-Commerce',
                description: 'Complete online stores with secure payments and seamless shopping experiences.',
                icon: 'shopping'
            },
            {
                title: 'Maintenance',
                description: 'Ongoing support and updates to keep your website running smoothly and securely.',
                icon: 'support'
            }
        ];

        // Process steps
        vm.process = [
            {
                step: '01',
                title: 'Discovery',
                description: 'We learn about your business, goals, and target audience.'
            },
            {
                step: '02',
                title: 'Design',
                description: 'We create wireframes and design mockups for your approval.'
            },
            {
                step: '03',
                title: 'Development',
                description: 'We build your website using modern technologies and best practices.'
            },
            {
                step: '04',
                title: 'Launch',
                description: 'We deploy your website and provide training and ongoing support.'
            }
        ];

        // Why Woxflow benefits
        vm.benefits = [
            {
                title: 'Modern Design',
                description: 'Clean, minimal interfaces that make an impact'
            },
            {
                title: 'Fast Performance',
                description: 'Optimized code for lightning-fast load times'
            },
            {
                title: 'Mobile First',
                description: 'Responsive designs that work on any device'
            }
        ];

        // Client Testimonials
        vm.testimonials = [
            {
                name: 'Sarah Mitchell',
                role: 'CEO, TechFlow',
                quote: 'Woxflow transformed our online presence. Their minimalist approach and attention to detail gave us exactly the premium look we needed.'
            },
            {
                name: 'James Reynolds',
                role: 'Founder, Creative Pulse',
                quote: 'The team understood our vision perfectly. The development process was smooth, and the end result exceeded our expectations.'
            },
            {
                name: 'Elena Rodriguez',
                role: 'Marketing Director, Skyline',
                quote: 'Our conversion rates have increased by 40% since launching the new site. The user experience is flawless on every device.'
            }
        ];

        // Testimonial Scroll Logic
        vm.scrollTestimonials = function (direction) {
            var container = document.querySelector('.testimonial-slider');
            if (container) {
                var scrollAmount = container.clientWidth;
                container.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });
            }
        };
    }

})();
