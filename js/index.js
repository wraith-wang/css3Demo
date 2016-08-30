/**
 *
 * @authors Your Name (you@example.org)
 * @date    2016-08-30 10:24:31
 * @version $Id$
 */


var myApp = angular.module('app', ['ngAnimate']);

myApp.controller('ctrl', function($scope, $http) {
  $scope.imgs = [];
  $http.get('data.json').success(function(data) {
    $scope.imgs = data.data;
  });

  $scope.checkedImg = {};

  $scope.showPopup = false;
  $scope.show = function(img) {
    $scope.checkedImg = angular.copy(img);
    $scope.showPopup = true;
  };

  $scope.close = function() {
    $scope.showPopup = false;
  };
});