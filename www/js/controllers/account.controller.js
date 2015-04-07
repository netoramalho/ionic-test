(function() {
    'use strict';

    angular
        .module('ionicTest')
        .controller('AccountCtrl', AccountCtrl);

    AccountCtrl.$inject = ['$scope', '$state', '$ionicPopup', '$ionicLoading'];

    function AccountCtrl($scope, $state, $ionicPopup, $ionicLoading){
        
        $scope.logout = logout;

        ///////

        // logout - Efetua o logout do usuário na API
        function logout(){
            $state.go('login');
        }
    }
})();