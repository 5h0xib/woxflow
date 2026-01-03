(function () {
    'use strict';

    angular.module('woxflowApp')
        .controller('NotFoundController', NotFoundController);

    function NotFoundController() {
        var vm = this;

        // Controller initialization
        vm.pageTitle = '404 - Page Not Found';
    }

})();
