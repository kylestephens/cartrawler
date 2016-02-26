'use strict';

/**
 * Booking Service - used as a service to manage data retrieval for booking
 * details
 *
 * For the purposes of this assignment, it simply calls the locally hosted JSON
 * In a real-world scenario, it should provide access points for the various
 * endpoints exposed by a RESTful API on the server side. This reduces code duplication
 * by ensuring the various controlers have one access point for the data
 */
angular.module('cartrawlerApp')
.service('BookingService', function($http) {
    var bookingService = {};
    bookingService.data = {};

    /**
     * Used when wish to retrieve the high level details about the booking,
     * pickup date, pickup location, etc.
     * @param  {Function} callback - a callback function to handle the data
     */
    bookingService.getBookingDetails = function(callback) {
        $http({
            method: 'GET',
            url: 'data/sample.json'
        }).then(function successCallback(response) {
            // flatten rental meta object and remove references to '@'
            var RentalMeta = {};
            RentalMeta.pickUpDateTime = response.data[0].VehAvailRSCore.VehRentalCore['@PickUpDateTime'];
            RentalMeta.returnDateTime = response.data[0].VehAvailRSCore.VehRentalCore['@ReturnDateTime']
            RentalMeta.pickupLocation = response.data[0].VehAvailRSCore.VehRentalCore.PickUpLocation['@Name'];
            RentalMeta.returnLocation = response.data[0].VehAvailRSCore.VehRentalCore.ReturnLocation['@Name'];
            callback(RentalMeta);
        }, function errorCallback(response) {
            // For assignment purposes -> silently fail
            // In real-world -> present user friendly handler for
            // network failures/endpoint failures to user
            console.log(response.data);
        });
    };

    /**
     * Used when wish to retrieve all available car vendors
     * and their available vehicles for a given booking selection
     * @param  {Function} callback - a callback function to handle the data
     */
    bookingService.getAllAvailableVendors = function(callback) {
        $http({
            method: 'GET',
            url: 'data/sample.json'
        }).then(function successCallback(response) {
            var RentalVendors = {};
            for(var i = 0; i < response.data[0].VehAvailRSCore.VehVendorAvails.length; i++) {
                RentalVendors[response.data[0].VehAvailRSCore.VehVendorAvails[i].Vendor['@Name']] = response.data[0].VehAvailRSCore.VehVendorAvails[i];
            }
            callback(RentalVendors);
        }, function errorCallback(response) {
            // For assignment purposes -> silently fail
            // In real-world -> present user friendly handler for
            // network failures/endpoint failures to user
            console.log(response.data);
        });
    };

    /**
     * Used when wish to retrieve all available vehicles
     * for a given booking selection
     * @param  {Function} callback - a callback function to handle the data
     */
    bookingService.getAllAvailableVehicles = function(callback) {
        $http({
            method: 'GET',
            url: 'data/sample.json'
        }).then(function successCallback(response) {
            var RentalVehicles = [];

            // for each vendor
            for(var i = 0; i < response.data[0].VehAvailRSCore.VehVendorAvails.length; i++) {
                // for each vehicle for that vendor
                for(var j = 0; j < response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails.length; j++) {
                    // flatten vehicle object and remove references to '@'
                    var vehicle = {};
                    vehicle.airCondition = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@AirConditionInd'];
                    vehicle.transmissionType = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@TransmissionType'];
                    vehicle.fuelType = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@FuelType'];
                    vehicle.driveType = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@DriveType'];
                    vehicle.passengerQuantity = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@PassengerQuantity'];
                    vehicle.baggageQuantity = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@BaggageQuantity'];
                    vehicle.doorCount = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle['@DoorCount'];
                    vehicle.makeAndModel = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle.VehMakeModel['@Name'];
                    vehicle.pictureUrl = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].Vehicle.PictureURL;
                    vehicle.vendor = response.data[0].VehAvailRSCore.VehVendorAvails[i].Vendor["@Name"];
                    vehicle.status = response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j]["@Status"];
                    vehicle.rateTotalAmount = parseFloat(response.data[0].VehAvailRSCore.VehVendorAvails[i].VehAvails[j].TotalCharge['@RateTotalAmount']);
                    RentalVehicles.push(vehicle);
                }
            }
            callback(RentalVehicles);
        }, function errorCallback(response) {
            // For assignment purposes -> silently fail
            // In real-world -> present user friendly handler for
            // network failures/endpoint failures to user
            console.log(response.data);
        });
    };

    return bookingService;
});