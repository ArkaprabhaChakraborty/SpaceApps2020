/**
 * Created by gagaus on 8/3/16.
 */

define(['./worldwind.min'],
    function (WorldWind) {

        "use strict";
        function shapeConfigurationCallback(geometry, properties) {
            var configuration = {};
            configuration.attributes = new WorldWind.ShapeAttributes(null);
            configuration.attributes.drawOutline = true;
            configuration.attributes.outlineColor = new WorldWind.Color(
                0.6 * configuration.attributes.interiorColor.red,
                0.3 * configuration.attributes.interiorColor.green,
                0.3 * configuration.attributes.interiorColor.blue,
                1.0);
            configuration.attributes.outlineWidth = 1.0;
            return configuration;
        };

        function TectonicPlateLayer() {

            var plateBoundariesLayer = new WorldWind.RenderableLayer("Tectonic Plates");
            var plateBoundariesJSON = new WorldWind.GeoJSONParser("/static/new_eq_app_files/plate_boundaries.json");
            plateBoundariesJSON.load(null, shapeConfigurationCallback, plateBoundariesLayer);
            return plateBoundariesLayer;
        }


        return TectonicPlateLayer;

        // var TectonicPlateLayer = function () {
        //     WorldWind.RenderableLayer.call(this, "Blue Marble Image");
        //
        //     var surfaceImage = new WorldWind.SurfaceImage(WorldWind.Sector.FULL_SPHERE,
        //        './images/wms_plate_boundaries.png');
        //
        //     this.addRenderable(surfaceImage);
        //
        //     this.pickEnabled = false;
        //     this.minActiveAltitude = 3e6;
        // };
        //
        // TectonicPlateLayer.prototype = Object.create(WorldWind.RenderableLayer.prototype);
        //
        // return TectonicPlateLayer;
    });
