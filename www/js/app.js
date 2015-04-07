(function() {
    'use strict';

    angular
        .module('ionicTest', [
            'ionic'
        ]);

    angular
        .module('ionicTest')
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleLightContent();
                }
            });
        });

})();