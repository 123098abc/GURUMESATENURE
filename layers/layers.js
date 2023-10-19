ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:21097").setExtent([504312.163328, 387672.569962, 508690.200094, 390248.796785]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_land_tenure_gurumesa_moyale_1 = new ol.format.GeoJSON();
var features_land_tenure_gurumesa_moyale_1 = format_land_tenure_gurumesa_moyale_1.readFeatures(json_land_tenure_gurumesa_moyale_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21097'});
var jsonSource_land_tenure_gurumesa_moyale_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_land_tenure_gurumesa_moyale_1.addFeatures(features_land_tenure_gurumesa_moyale_1);
var lyr_land_tenure_gurumesa_moyale_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_land_tenure_gurumesa_moyale_1, 
                style: style_land_tenure_gurumesa_moyale_1,
                interactive: true,
                title: '<img src="styles/legend/land_tenure_gurumesa_moyale_1.png" /> land_tenure_gurumesa_moyale'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_land_tenure_gurumesa_moyale_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_land_tenure_gurumesa_moyale_1];
lyr_land_tenure_gurumesa_moyale_1.set('fieldAliases', {'Id': 'Id', 'Parcel_Num': 'Parcel_Num', 'New_Parcel': 'New_Parcel', 'Areas': 'Areas', 'F1': 'F1', 'PARCEL_N_1': 'PARCEL_N_1', 'NAME': 'NAME', 'IDENITITY_': 'IDENITITY_', 'KRA_PIN': 'KRA_PIN', 'LAND_USE': 'LAND_USE', 'PHONE_NUMB': 'PHONE_NUMB', 'REMARKS': 'REMARKS', 'F9': 'F9', 'F10': 'F10', 'F11': 'F11', 'F12': 'F12', 'F13': 'F13', 'F14': 'F14', });
lyr_land_tenure_gurumesa_moyale_1.set('fieldImages', {'Id': 'Range', 'Parcel_Num': 'TextEdit', 'New_Parcel': 'TextEdit', 'Areas': 'TextEdit', 'F1': 'TextEdit', 'PARCEL_N_1': 'TextEdit', 'NAME': 'TextEdit', 'IDENITITY_': 'TextEdit', 'KRA_PIN': 'TextEdit', 'LAND_USE': 'TextEdit', 'PHONE_NUMB': 'TextEdit', 'REMARKS': 'TextEdit', 'F9': 'TextEdit', 'F10': 'TextEdit', 'F11': 'TextEdit', 'F12': 'TextEdit', 'F13': 'TextEdit', 'F14': 'TextEdit', });
lyr_land_tenure_gurumesa_moyale_1.set('fieldLabels', {'Id': 'no label', 'Parcel_Num': 'no label', 'New_Parcel': 'inline label', 'Areas': 'no label', 'F1': 'no label', 'PARCEL_N_1': 'no label', 'NAME': 'no label', 'IDENITITY_': 'no label', 'KRA_PIN': 'no label', 'LAND_USE': 'no label', 'PHONE_NUMB': 'no label', 'REMARKS': 'no label', 'F9': 'no label', 'F10': 'no label', 'F11': 'no label', 'F12': 'no label', 'F13': 'no label', 'F14': 'no label', });
lyr_land_tenure_gurumesa_moyale_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});