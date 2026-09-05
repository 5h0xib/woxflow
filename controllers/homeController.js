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
                description: 'Custom websites and web applications built for performance, scalability, and business growth.',
                icon: 'code'
            },
            {
                title: 'UI/UX Design',
                description: 'Clean, intuitive digital experiences designed to improve usability, engagement, and conversions.',
                icon: 'palette'
            },
            {
                title: 'E-Commerce',
                description: 'Conversion-focused online stores with payments, product management, integrations, and scalable architecture.',
                icon: 'shopping'
            },
            {
                title: 'AI Automation',
                description: 'AI-powered workflows that automate repetitive business tasks, connect your tools, and reduce manual work.',
                icon: 'automation'
            }
        ];

        // Process steps
        vm.process = [
            {
                step: '01',
                title: 'Discover',
                description: 'Understand the business, current tools, problems, and goals.'
            },
            {
                step: '02',
                title: 'Plan',
                description: 'Identify the right website, automation, integrations, and technology.'
            },
            {
                step: '03',
                title: 'Build',
                description: 'Develop the website or automation workflow and connect the required systems.'
            },
            {
                step: '04',
                title: 'Launch & Optimize',
                description: 'Deploy the solution, test it, monitor it, and improve it over time.'
            }
        ];

        // Why Woxflow benefits
        vm.benefits = [
            {
                title: 'Business-Focused Solutions',
                description: 'We build technology around your actual business goals, not just technical requirements.'
            },
            {
                title: 'Automation That Saves Time',
                description: 'We identify repetitive processes and turn them into reliable automated workflows.'
            },
            {
                title: 'Built to Scale',
                description: 'Solutions are designed so your website and workflows can grow with your business.'
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
