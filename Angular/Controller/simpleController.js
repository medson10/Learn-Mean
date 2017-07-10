var app = angular.module('app', []);

app.controller('simpleController', function simpleController($scope) {
  $scope.user = {name: 'Medson'};
  $scope.counter = 0;
  $scope.addOne = function() {
    $scope.counter++;
  };
});
