define([''], function(ww) {

    "use strict";

    var Rectangle = function (p1, p2, highlightActive, wraping) {
        var minLong = Math.min(p2.Long, p1.Long);
        var maxLong = Math.max(p2.Long, p1.Long);

        var minLati = Math.min(p2.Lati, p1.Lati);
        var maxLati = Math.max(p2.Lati, p1.Lati);

        var boundaries = [];
        boundaries[0] = [];
        var step = 5, i;
        var pointsLati =  Math.floor((maxLati - minLati)/step);
        var pointsLong = Math.floor((maxLong - minLong)/step);
        boundaries[0].push(new WorldWind.Position(minLati, minLong, 0));
        if (wraping) {
            for (i = 1; i <= pointsLati; i++) {
                boundaries[0].push(new WorldWind.Position(minLati+step*i, minLong, 0));
            }
        }

        boundaries[0].push(new WorldWind.Position(maxLati, minLong, 0));
        if (wraping) {
            for (i = 1; i <= pointsLong; i++) {
                boundaries[0].push(new WorldWind.Position(maxLati, minLong + step * i, 0));
            }
        }

        boundaries[0].push(new WorldWind.Position(maxLati, maxLong, 0));
        if (wraping) {
            for (i = 1; i <= pointsLati; i++) {
                boundaries[0].push(new WorldWind.Position(maxLati - step * i, maxLong, 0));
            }
        }

        boundaries[0].push(new WorldWind.Position(minLati, maxLong, 0));
        if (wraping) {
            for (i = 1; i <= pointsLong; i++) {
                boundaries[0].push(new WorldWind.Position(minLati, maxLong - step * i, 0));
            }
        }

        // Create the polygon and assign its attributes.
        var polygon = new WorldWind.Polygon(boundaries, null);
        polygon.altitudeMode = WorldWind.ABSOLUTE;
        polygon.extrude = true;
        polygon.textureCoordinates = [
            [new WorldWind.Vec2(0, 0), new WorldWind.Vec2(1, 0), new WorldWind.Vec2(1, 1), new WorldWind.Vec2(0, 1)]
        ];

        var polygonAttributes = new WorldWind.ShapeAttributes(null);
        // Specify a texture for the polygon and its four extruded sides.
        polygonAttributes.drawInterior = false;
        polygonAttributes.drawOutline = true;
        polygonAttributes.outlineColor = WorldWind.Color.BLUE;
        polygonAttributes.interiorColor = WorldWind.Color.WHITE;
        polygonAttributes.drawVerticals = polygon.extrude;
        polygonAttributes.applyLighting = true;
        polygon.attributes = polygonAttributes;
        if (highlightActive) {
            var highlightAttributes = new WorldWind.ShapeAttributes(polygonAttributes);
            highlightAttributes.outlineColor = WorldWind.Color.RED;
            polygon.highlightAttributes = highlightAttributes;
        }

        return polygon;
    };

    return Rectangle;
});
