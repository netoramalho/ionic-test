(function() {
    'use strict';

    angular
        .module('ionicTest')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$state', '$ionicLoading', '$timeout'];

    function LoginCtrl($scope, $state, $ionicLoading, $timeout){

        $scope.goToCreateUser = goToCreateUser;
        $scope.login = login;

        ///////

        // goToCreateUser - Direciona o usuário para tela de criar conta
        function goToCreateUser(){
            $state.go('create-user');
        }

        // login - Efetua o login do usuário na API
        function login(){
            $ionicLoading.show({
                template: 'Aguarde...'
            });
            $timeout(function(){
                $ionicLoading.hide();
                $state.go('tab.nearby-users');
            }, 1500);
        }
    }
})();