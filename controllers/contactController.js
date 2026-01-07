/**
 * Contact Page Controller
 * Handles form submission, validation, and captcha verification
 */

(function () {
    'use strict';

    angular
        .module('woxflowApp')
        .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope', '$timeout', '$location'];

    function ContactController($scope, $timeout, $location) {
        var vm = this;

        // Initialize form data
        vm.formData = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        // Initialize contact information
        vm.contactInfo = {
            address: 'Office 16, Second Floor Navrang Plaza Tingre Nagar, Airport Rd, near Sawant Petrol Pump, Vishrantwadi, Pune, Maharashtra 411015',
            addressDubai: 'Internet city Dubai -- -- ',
            email: 'contact@woxflow.in',
            phones: ['+971 56 164 8987', '+91 92843 89021', '+91 87660 99144'],
            social: {
                facebook: 'https://www.facebook.com/profile.php?id=61561313854576',
                instagram: 'https://www.instagram.com/woxflow/',
                whatsapp: 'https://wa.me/7757060229'
            }
        };

        // Form state
        vm.isSubmitting = false;
        vm.submitted = false;
        vm.successMessage = '';
        vm.errorMessage = '';
        vm.captchaError = false;
        vm.captchaVerified = false;

        // hCaptcha widget ID (for resetting)
        vm.hcaptchaWidgetId = null;

        // Initialize the controller
        vm.init = function () {
            // Load hCaptcha script if not already loaded
            $timeout(function () {
                loadHCaptchaScript();
            }, 500);

            // Initialize form watchers
            initFormWatchers();
        };

        // Load hCaptcha script
        function loadHCaptchaScript() {
            // Check if hCaptcha script is already loaded
            if (typeof hcaptcha === 'undefined') {
                var script = document.createElement('script');
                script.src = 'https://js.hcaptcha.com/1/api.js?onload=onHCaptchaLoad&render=explicit';
                script.async = true;
                script.defer = true;
                script.onload = function () {
                    // Initialize hCaptcha after script loads
                    $timeout(function () {
                        initHCaptcha();
                    }, 100);
                };
                document.head.appendChild(script);
            } else {
                // hCaptcha already loaded, initialize it
                $timeout(function () {
                    initHCaptcha();
                }, 100);
            }
        }

        // Initialize hCaptcha widget
        vm.initHCaptcha = function () {
            if (typeof hcaptcha !== 'undefined') {
                // Check if hCaptcha container exists
                var container = document.getElementById('hcaptcha-container');
                if (container && !container.querySelector('iframe')) {
                    // Use test key for development, replace with real key in production
                    var sitekey = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'; // Test key
                    // For production: var sitekey = 'YOUR_ACTUAL_HCAPTCHA_SITE_KEY';

                    vm.hcaptchaWidgetId = hcaptcha.render('hcaptcha-container', {
                        sitekey: sitekey,
                        callback: function (response) {
                            // Called when hCaptcha is successfully completed
                            vm.captchaVerified = true;
                            vm.captchaError = false;
                            $scope.$apply();
                        },
                        'error-callback': function () {
                            vm.captchaError = true;
                            $scope.$apply();
                        },
                        'expired-callback': function () {
                            vm.captchaVerified = false;
                            $scope.$apply();
                        }
                    });
                }
            }
        }

        // Format phone number (remove non-numeric characters)
        vm.formatPhoneNumber = function () {
            if (vm.formData.phone) {
                // Remove all non-numeric characters
                var numeric = vm.formData.phone.replace(/\D/g, '');

                // Limit to 10 digits for Indian numbers
                if (numeric.length > 10) {
                    numeric = numeric.substring(0, 10);
                }

                // Update model if changed
                if (numeric !== vm.formData.phone) {
                    vm.formData.phone = numeric;
                }
            }
        };

        // Initialize form watchers
        function initFormWatchers() {
            // Watch for form submission state changes
            $scope.$watch('vm.submitted', function (newVal) {
                if (newVal) {
                    // Mark all form fields as touched when form is submitted
                    markAllFieldsAsTouched();
                }
            });
        }

        // Mark all form fields as touched
        function markAllFieldsAsTouched() {
            if ($scope.contactForm) {
                angular.forEach($scope.contactForm, function (value, key) {
                    if (value && typeof value === 'object' && value.$setTouched) {
                        value.$setTouched();
                    }
                });
            }
        }

        // Reset the form
        vm.resetForm = function () {
            vm.formData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
            vm.submitted = false;
            vm.successMessage = '';
            vm.errorMessage = '';
            vm.captchaError = false;
            vm.captchaVerified = false;

            // Reset form validation state
            if ($scope.contactForm) {
                $scope.contactForm.$setPristine();
                $scope.contactForm.$setUntouched();
            }

            // Reset hCaptcha
            if (typeof hcaptcha !== 'undefined' && vm.hcaptchaWidgetId !== null) {
                hcaptcha.reset(vm.hcaptchaWidgetId);
            }
        };

        // Submit form function
        vm.submitForm = function (isFormValid) {
            vm.submitted = true;
            vm.errorMessage = '';
            vm.successMessage = '';

            // Mark all fields as touched to show validation errors
            markAllFieldsAsTouched();

            // Check if form is valid
            if (!isFormValid) {
                vm.errorMessage = 'Please fill all required fields correctly.';
                scrollToError();
                return;
            }

            // Check if captcha is verified
            if (!vm.captchaVerified) {
                vm.captchaError = true;
                vm.errorMessage = 'Please complete the captcha verification.';
                scrollToError();
                return;
            }

            // Start submitting
            vm.isSubmitting = true;
            vm.captchaError = false;

            // Get hCaptcha response
            var hcaptchaResponse = '';
            if (typeof hcaptcha !== 'undefined') {
                hcaptchaResponse = hcaptcha.getResponse(vm.hcaptchaWidgetId);
            }

            var encodedKey = 'NjZiMDU4ZDYtMmEyNy00MWRiLWJkMzMtYzJlMTJhZWU2NGRj';
            var accessKey = atob(encodedKey);

            // Prepare form data object for Web3Forms
            var formObject = {
                access_key: accessKey,
                subject: 'New Contact Form Submission from ' + vm.formData.name,
                from_name: vm.formData.name,
                email: vm.formData.email,
                phone: vm.formData.phone,
                message: vm.formData.message,
                botcheck: '' // Empty for bot check
            };

            // Add hCaptcha response if available
            if (hcaptchaResponse) {
                formObject['h-captcha-response'] = hcaptchaResponse;
            }

            // Convert to JSON
            var json = JSON.stringify(formObject);

            // Submit to Web3Forms API
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
                .then(function (response) {
                    return response.json().then(function (data) {
                        return {
                            status: response.status,
                            data: data
                        };
                    });
                })
                .then(function (result) {
                    vm.isSubmitting = false;

                    if (result.status === 200 && result.data.success) {
                        // Success - redirect to success page
                        $timeout(function () {
                            $location.path('/success');
                        }, 100);
                    } else {
                        // API returned error
                        vm.errorMessage = result.data.message || 'Failed to send message. Please try again.';

                        // Clear error message after 5 seconds
                        $timeout(function () {
                            vm.errorMessage = '';
                        }, 5000);

                        $scope.$apply();
                    }
                })
                .catch(function (error) {
                    console.error('Form submission error:', error);
                    vm.isSubmitting = false;
                    vm.errorMessage = 'Unable to send message. Please check your internet connection and try again.';

                    // Clear error message after 5 seconds
                    $timeout(function () {
                        vm.errorMessage = '';
                    }, 5000);

                    $scope.$apply();
                });
        };

        // Simulate form submission (for development/testing)
        function simulateFormSubmission() {
            // Simulate API call delay
            $timeout(function () {
                vm.isSubmitting = false;
                vm.successMessage = 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.';

                // Reset form after successful submission
                vm.resetForm();

                // Clear success message after 8 seconds
                $timeout(function () {
                    vm.successMessage = '';
                }, 8000);

                console.log('Simulated form submission:', vm.formData);
            }, 1500);
        }

        // Scroll to first error in form
        function scrollToError() {
            $timeout(function () {
                var firstError = document.querySelector('.error-border');
                if (firstError) {
                    firstError.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            }, 100);
        }

        // Initialize the controller
        vm.init();

        // Expose reset function for debugging if needed
        vm.debugReset = function () {
            vm.resetForm();
        };
    }
})();