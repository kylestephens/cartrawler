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
        link: function (scope, element, attrs) {
            if(attrs.data){
                scope.vehicle = scope.$eval(attrs.data);
            }
        }
    };
});