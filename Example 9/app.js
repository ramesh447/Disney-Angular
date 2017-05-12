(function () {
'use strict';

angular.module('DIApp', [])

.controller('DIController', DIController);

function DIController ($scope, $filter) {
  $scope.name="ramesh";
   $scope.upper = function () {
    var upcase = $filter('uppercase');
    $scope.name = upcase($scope.name);
  };
 };
console.log(angular.injector().annotate(DIController));

})();
