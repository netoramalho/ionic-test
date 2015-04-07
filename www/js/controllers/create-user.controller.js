(function() {
    'use strict';

    angular
        .module('ionicTest')
        .controller('CreateUserCtrl', CreateUserCtrl);

    CreateUserCtrl.$inject = ['$scope', '$ionicPopup', '$ionicLoading'];

    function CreateUserCtrl($scope, $ionicPopup, $ionicLoading){

        $scope.createUser = createUser;

        ///////

        // createUser - Direciona o usuário para tela de criar conta
        function createUser(){
            $ionicPopup.alert({
                title: 'ERRO',
                template: 'Problema na comunicação com o servidor'
            });
        }
    }
})();