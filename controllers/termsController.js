/**
 * Terms of Service Page Controller
 */

(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('TermsController', TermsController);

    function TermsController() {
        var vm = this;

        vm.lastUpdated = 'January 3, 2026';
    }

})();
