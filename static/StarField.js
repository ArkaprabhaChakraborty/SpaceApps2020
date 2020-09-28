
requirejs([
        './static/WorldWindShim',
        './static/LayerManager'
    ],
    function (WorldWind,
              LayerManager) {
        'use strict';

        // Tell WorldWind to log only warnings and errors.
        WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

        // Create the WorldWindow.
        var wwd = new WorldWind.WorldWindow('canvasOne',layerManager);

        // Create imagery layers.
        var BMNGLayer = new WorldWind.BMNGLayer();
        var starFieldLayer = new WorldWind.StarFieldLayer();
        var atmosphereLayer = new WorldWind.AtmosphereLayer('https://files.worldwind.arc.nasa.gov/artifactory/apps/web/images/dnb_land_ocean_ice_2012.png');

        // Add previously created layers to the WorldWindow.
        
        wwd.addLayer(BMNGLayer);
        wwd.addLayer(starFieldLayer); //IMPORTANT: add the starFieldLayer before the atmosphereLayer
        wwd.addLayer(atmosphereLayer);
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd))

        var date = new Date();
        starFieldLayer.time = date;
        atmosphereLayer.time = date;

        wwd.redraw();

        wwd.redrawCallbacks.push(runSunSimulation);

        var sunSimulationCheckBox = document.getElementById('stars-simulation');
        var doRunSimulation = false;
        var timeStamp = Date.now();
        var factor = 1;

        sunSimulationCheckBox.addEventListener('change', onSunCheckBoxClick, false);

        function onSunCheckBoxClick() {
            doRunSimulation = this.checked;
            if (!doRunSimulation) {
                var date = new Date();
                starFieldLayer.time = date;
                atmosphereLayer.time = date;
            }
            wwd.redraw();
        }

        function runSunSimulation(wwd, stage) {
            if (stage === WorldWind.AFTER_REDRAW && doRunSimulation) {
                timeStamp += (factor * 60 * 1000);
                var date = new Date(timeStamp);
                starFieldLayer.time = date;
                atmosphereLayer.time = date;
                wwd.redraw();
            }
        }

        // Create a layer manager for controlling layer visibility.
        var layerManager = new LayerManager(wwd);
    });