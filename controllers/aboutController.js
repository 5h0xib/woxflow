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
        vm.story = 'Founded with a vision to build technology that genuinely helps businesses grow, Woxflow is a digital solutions agency based in Pune and part Dubai. We combine modern web development with intelligent business automation — building high-performance websites and designing workflows that reduce repetitive work, connect business tools, and help teams operate more efficiently.';

        vm.mission = 'To help businesses grow by building modern websites and automating the processes that slow them down — delivering practical, well-crafted solutions that save time and create real results.';

        vm.vision = 'To be a trusted digital partner for businesses that want both a strong online presence and the operational efficiency that smart automation provides.';

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
