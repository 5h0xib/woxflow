/**
 * Privacy Policy Page Controller
 */

(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('PrivacyController', PrivacyController);

    function PrivacyController() {
        var vm = this;

        vm.lastUpdated = 'January 3, 2026';
    }

})();
