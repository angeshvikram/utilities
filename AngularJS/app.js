var app = angular.module("app", []);
app.controller("HelloController", function($scope,utilService) {
    utilService.testPrint();
    $scope.message = "Hello, AngularJS";
});