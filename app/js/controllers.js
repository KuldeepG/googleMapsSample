'use strict';

angular.module('SportBookingAssignment.controllers', [])
  .controller('Navigation', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function (currentLocation) { 
      return currentLocation === $location.path();
    };
  }])
  .controller('Map', ['$scope', function(){
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(52.4837, 13.3503),
        new google.maps.LatLng(52.5797, 13.4163));

    map.fitBounds(defaultBounds);
  }]);