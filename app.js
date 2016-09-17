(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchController',LunchController);
  LunchController.$inject =[$scope];
  function LunchController($scope) {
    $scope.nimi='vaino';
    $scope.lunch='';
    $scope.checkLunch= function () {

    }
  }
}

)();
