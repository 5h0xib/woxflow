(function () {
    'use strict';

    angular.module('woxflowApp')
        .directive('scrollAnimate', scrollAnimate);

    function scrollAnimate() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                // Add scroll-animate class
                element.addClass('scroll-animate');

                // Intersection Observer for performance
                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            // Add delay if specified
                            var delay = attrs.scrollDelay || 0;

                            setTimeout(function () {
                                element.addClass('active');
                            }, delay);

                            // Optionally stop observing after animation
                            if (attrs.scrollOnce !== 'false') {
                                observer.unobserve(entry.target);
                            }
                        } else {
                            // Remove active class if scrollOnce is false
                            if (attrs.scrollOnce === 'false') {
                                element.removeClass('active');
                            }
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px'
                });

                // Start observing
                observer.observe(element[0]);

                // Cleanup on destroy
                scope.$on('$destroy', function () {
                    observer.disconnect();
                });
            }
        };
    }

})();
