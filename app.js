(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchController',LunchController);
  LunchController.$inject =[$scope];
  function LunchController($scope) {
    $scope.nimi='vaino';
    $scope.items='items';
    $scope.numberOfItems = 0;
    $scope.checkLunch= function () {
      return $scope.items;
      console.log('number: '+$scope.nimi);
//return $scope.numberOfItems;
    };
  }


})();
