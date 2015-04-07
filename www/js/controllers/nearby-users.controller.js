(function() {
    'use strict';

    angular
        .module('ionicTest')
        .controller('nearbyUsersCtrl', nearbyUsersCtrl);

    nearbyUsersCtrl.$inject = ['$scope', '$ionicPopup', '$ionicLoading', '$timeout'];

    function nearbyUsersCtrl($scope, $ionicPopup, $ionicLoading, $timeout){
        
        $scope.doRefresh = doRefresh;

        ///////

        // doRefresh - Atualiza a listagem
        function doRefresh(){
            $timeout(function(){
                $scope.$broadcast('scroll.refreshComplete');
            }, 1500);
        }
    }
})();