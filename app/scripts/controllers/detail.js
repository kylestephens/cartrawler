'use strict';

/**
 * @ngdoc function
 * @name cartrawlerApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the cartrawlerApp
 */
angular.module('cartrawlerApp')
.controller('DetailCtrl', function($scope, $rootScope, $location, BookingService) {

	/**
	 * Referenced from Booking Service
	 * 
	 * If this was a real world scenario, there would ideally be a separate endpoint
	 * to retrieve more specific Vehicle information
	 * 
	 * The vehicle detail view would then be able to call this endpoint, via the Service,
	 * and reference this vehicle by id, e.g.:
	 * 		http://<baseurl>/#/detail/<vehicle_id>
	 */
    $scope.vehicle = BookingService.data.selectedVehicle;

});

