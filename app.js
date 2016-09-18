(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.items = "";
  $scope.numberOfItems = 0;
  $scope.customMessage = '';
  $scope.countItems = function () {
  var totalLunches = checkLunch($scope.items);
  // switch (totalLunches) {
  //   case false:
  //     $scope.customMessage='Please enter data first'
  //     break;
  //     case :
  //       $scope.customMessage='Please enter data first'
  //       break;
  //   default:
  //
  // }
  if (totalLunches == false)
    {$scope.customMessage='Please enter data first'}
  else if (totalLunches > 3) {
    {$scope.customMessage='Too much!'}
  }
  else
    {$scope.customMessage='Enjoy!'}
  $scope.numberOfItems = totalLunches;
  };
  function checkLunch(items_string) {
    if (!items_string) {
        return false;
    }
    else {
        var items = items_string.split(',');
            console.log('praegu on '+ items+ 'ja elemente on '+ items.length);

        return items.length;
    }
};

}

})();
