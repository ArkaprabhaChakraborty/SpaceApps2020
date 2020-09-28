
    // Tell WorldWind to log only warnings and errors.
    WorldWind.Logger.setLoggingLevel(WorldWind.Logger.LEVEL_WARNING);

    // Create the WorldWindow.
    var wwd = new WorldWind.WorldWindow('canvasOne',layerManager);

    // Create imagery layers.
    var BMNGLayer = new WorldWind.BMNGLayer();
    var atmosphereLayer = new WorldWind.AtmosphereLayer(); 
    // Add previously created layers to the WorldWindow.
    
    wwd.addLayer(BMNGLayer);
    wwd.addLayer(atmosphereLayer);
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd))

    // Create a layer manager for controlling layer visibility.
    var serviceAddress = "https://neo.sci.gsfc.nasa.gov/wms/wms?SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";
    let layer=null;

    function func1()
    {
        layer = "GISS_TA_M";
    }
    document.getElementById("btn14").addEventListener("click",func1());



    var createLayer = function (xmlDom) {
    var wms = new WorldWind.WmsCapabilities(xmlDom);
    var wmsLayerCapabilities = wms.getNamedLayer(layer);
    var wmsConfig = WorldWind.WmsLayer.formLayerConfiguration(wmsLayerCapabilities);
    var wmsLayer = new WorldWind.WmsLayer(wmsConfig);
    wwd.addLayer(wmsLayer);
    };

    var logError = function (jqXhr, text, exception) {
    console.log("There was a failure retrieving the capabilities document: " +
        text +
    " exception: " + exception);
    };

    $.get(serviceAddress).done(createLayer).fail(logError);
    var layerManager = new LayerManager(wwd);
