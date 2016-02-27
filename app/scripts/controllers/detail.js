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
    $scope.vehicle = BookingService.data.selectedVehicle;

    $scope.onGoBack = function() {
    	$location.path( "/" );
    }
});

