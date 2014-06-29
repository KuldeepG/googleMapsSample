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

    var searchBox = new google.maps.places.Autocomplete(document.getElementById('pac-input'), {componentRestrictions: {country: 'de'}});
    searchBox.bindTo('bounds', map);
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    google.maps.event.addListener(searchBox, 'place_changed', function() {
      marker.setVisible(false);
      var place = searchBox.getPlace();
      if (!place.geometry) {
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }

      marker.setIcon(({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
    });
  }]);