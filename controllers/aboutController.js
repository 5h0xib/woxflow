/**
 * About Page Controller
 */

(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('AboutController', AboutController);

    function AboutController() {
        var vm = this;

        // Agency information
        vm.story = 'Founded with a vision to create websites that flow seamlessly, Woxflow is a modern web development agency based in Pune. We specialize in crafting minimal, elegant digital experiences that help businesses thrive online.';

        vm.mission = 'To empower businesses with elegant, high-performing websites that drive growth and create lasting impressions.';

        vm.vision = 'To be the leading web development agency known for innovative design, exceptional quality, and client-focused solutions.';

        // Core values
        vm.values = [
            {
                title: 'Excellence',
                description: 'We pursue perfection in every pixel, every line of code, and every client interaction.'
            },
            {
                title: 'Innovation',
                description: 'We stay ahead of trends and continuously explore new technologies to deliver cutting-edge solutions.'
            },
            {
                title: 'Transparency',
                description: 'We believe in open communication, honest timelines, and clear pricing with no hidden surprises.'
            },
            {
                title: 'Partnership',
                description: 'We view our clients as partners and invest in their success as if it were our own.'
            }
        ];
    }

})();
