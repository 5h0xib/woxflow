(function () {
    'use strict';
    angular.module('woxflowApp', ['ngRoute']);

    window.onHCaptchaLoad = function () {
        var scope = angular.element(document.querySelector('[ng-controller="ContactController as vm"]')).scope();
        scope.vm && scope.vm.initHCaptcha && scope.vm.initHCaptcha();
    };
})();
