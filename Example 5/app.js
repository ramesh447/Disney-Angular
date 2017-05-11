(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyController', function ($scope) {
$scope.name="ramesh";
$scope.sayHello = function () {
return "Hello Disney";
};
});

})();
