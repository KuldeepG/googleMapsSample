'use strict';

angular.module('SportBookingAssignment.controllers', [])
  .controller('Navigation', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (currentLocation) { 
      return currentLocation === $location.path();
    };
  }]);