'use strict';

/**
 * Vehicle Card - Represents a single vehicle on search results
 * 
 * Used as follows:
 * 		<vehicle-card data="my-vehicle"></vehicle-data>
 */
angular.module('cartrawlerApp')
.directive('vehicleCard', function() {
    
    return {

        restrict: 'E',
        templateUrl: 'modules/vehicleCard/vehicleCard.html',

        controller: function($scope, $rootScope) {
        	/**
        	 * Event handler for click of vehicle card
        	 * 
        	 * Fire event on root scope and attach the vehicle object
        	 * If a controller is interested in this event, it can choose
        	 * to act accordingly. This approach reduces coupling and ensures
        	 * the directive is a self-contained, modular unit.
        	 * 
        	 * @param  {Object} vehicle
        	 * @return {null}
        	 */
        	$scope.onClickCard = function(vehicle) {
        		$rootScope.$broadcast('onClickVehicleCard', vehicle);
        	}
        },

        link: function (scope, element, attrs) {
            if(attrs.data){
                scope.vehicle = scope.$eval(attrs.data);
            }
        }

    };

});