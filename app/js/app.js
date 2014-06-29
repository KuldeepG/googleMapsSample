'use strict';

angular.module('SportBookingAssignment', [
  'ngRoute',
  'ngAnimate',
  'SportBookingAssignment.controllers',
	'SportBookingAssignment.directives'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
  $routeProvider.when('/maps', {templateUrl: 'partials/maps.html'});
  $routeProvider.otherwise({redirectTo: '/home'});
}]);