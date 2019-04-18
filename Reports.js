/// <reference path="scripts/angular.js" />

angular.module('myApp', []).controller('personCtrl', function ($scope, $http) {
    $http.get("Reportss.json").then(function (response) {
        $scope.myReport = response.data.records;
    });
    });