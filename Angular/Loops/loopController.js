var app = angular.module('app', []);

app.controller('loopController', function simpleController($scope) {
  $scope.fruits = ['banana', 'apple', 'orange'];
});
