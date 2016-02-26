'use strict';

/**
 * @ngdoc function
 * @name cartrawlerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cartrawlerApp
 */
angular.module('cartrawlerApp')
.controller('MainCtrl', function($scope, BookingService) {
    
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
