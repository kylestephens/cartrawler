'use strict';

/**
 * @ngdoc function
 * @name cartrawlerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cartrawlerApp
 */
angular.module('cartrawlerApp')
.controller('MainCtrl', function($scope, $rootScope, $location, BookingService) {

	$scope.filterOptions = [{
		id: 'rateTotalAmount',
		label: 'Price: Low to High'
	}, {
		id: '-rateTotalAmount',
		label: 'Price: High to Low'
	}, {
		id: 'vendor',
		label: 'Vendor: Asc'
	}, {
		id: '-vendor',
		label: 'Vendor: Desc'
	}];

	$scope.orderBySelection = 'rateTotalAmount';

	/**
	 * Event handler for filter change
	 * @param  {Object} option a filterOption value
	 * @return {null}
	 */
	$scope.changeFilter = function(option) {
		$scope.orderBySelection = option.id;
	};

	$rootScope.$on('onClickVehicleCard', function (event, vehicle) {
        BookingService.data.selectedVehicle = vehicle;
        $location.path( "/detail" );
    });
    
    BookingService.getBookingDetails(function(data) {
        $scope.bookingMeta = data;
    });

    BookingService.getAllAvailableVendors(function(data) {
        $scope.allAvailableVendors = data;
    });

    BookingService.getAllAvailableVehicles(function(data) {
        $scope.allAvailableVehicles = data;
    });

});
