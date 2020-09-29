/**
 * Created by researchcomputer on 8/4/16.
 */

define([''], function(ww) {
    "use strict";

    // Data Display
    var Metadata = function (control) {
        this.control = control;
        // Individual Earthquakes
        this.magnitudePlaceholder = document.getElementById('magnitude');
        this.locPlaceholder = document.getElementById('location');
        this.eventdatePlaceholder = document.getElementById('time');
        this.latitudePlaceholder = document.getElementById('latitude');
        this.longitudePlaceholder = document.getElementById('longitude');
        this.depthPlaceholder = document.getElementById('depth');

        // Query Metadata
        this.earthquakecountPlaceholder = document.getElementById('eq_count');
        this.min_datePlaceholder = document.getElementById('minDate');
        this.max_datePlaceholder = document.getElementById('maxDate');
        this.minMagnitudePlaceholder = document.getElementById('minMagnitude');
        this.maxMagnitudePlaceholder = document.getElementById('maxMagnitude');
        this.minDepthPlaceholder = document.getElementById('minDepth');
        this.maxDepthPlaceholder = document.getElementById('maxDepth');
        this.drawnMaxLatPlaceholder = document.getElementById('drawnMaxLat');
        this.drawnMinLatPlaceholder = document.getElementById('drawnMinLat');
        this.drawnMaxLongPlaceholder = document.getElementById('drawnMaxLong');
        this.drawnMinLongPlaceholder = document.getElementById('drawnMinLong');
        this.drawnRLatPlaceholder = document.getElementById('drawnRLat');
        this.drawnRLongPlaceholder = document.getElementById('drawnRLong');
        this.drawnRadiusPlaceholder = document.getElementById('drawnRadius');

    };

    Metadata.prototype.setMagnitude = function(value) {
        this.magnitudePlaceholder.textContent = value;
    };

    Metadata.prototype.setlocation = function (value) {
        this.locPlaceholder.textContent = value;
    };

    Metadata.prototype.settime = function (value) {
        this.eventdatePlaceholder.textContent = value;
    };

    Metadata.prototype.setlatitude = function (value) {
        this.latitudePlaceholder.textContent = value;
    };

    Metadata.prototype.setlongitude = function (value) {
        this.longitudePlaceholder.textContent = value;
    };

    Metadata.prototype.setdepth = function (value) {
        this.depthPlaceholder.textContent = value;
    };

    Metadata.prototype.seteq_count = function (value) {
        this.earthquakecountPlaceholder.textContent = value;
        this.control.endRedraw();
    };

    Metadata.prototype.setminDate = function (value) {
        this.min_datePlaceholder.textContent = value;
    };

    Metadata.prototype.setmaxDate = function (value) {
        this.max_datePlaceholder.textContent = value;
    };

    Metadata.prototype.setminMagnitude = function (value) {
        this.minMagnitudePlaceholder.textContent = value;
    };

    Metadata.prototype.setmaxMagnitude = function (value) {
        this.maxMagnitudePlaceholder.textContent = value;
    };

    Metadata.prototype.setminDepth = function (value) {
        this.minDepthPlaceholder.textContent = value;
    };

    Metadata.prototype.setmaxDepth = function (value) {
        this.maxDepthPlaceholder.textContent = value;
    };

    Metadata.prototype.setminLatitude = function (value) {
        this.drawnMinLatPlaceholder.textContent = value;
    };

    Metadata.prototype.setmaxLatitude = function (value) {
        this.drawnMaxLatPlaceholder.textContent = value;
    };

    Metadata.prototype.setminLongitude = function (value) {
        this.drawnMinLongPlaceholder.textContent = value;
    };

    Metadata.prototype.setmaxLongitude = function (value) {
        this.drawnMaxLongPlaceholder.textContent = value;
    };

    Metadata.prototype.setRLatitude = function (value) {
        this.drawnRLatPlaceholder.textContent = value;
    };

    Metadata.prototype.setRLongitude = function (value) {
        this.drawnRLongPlaceholder.textContent = value;
    };

    Metadata.prototype.setRadius = function (value) {
        this.drawnRadiusPlaceholder.textContent = value;
    };
    
    return Metadata;

});