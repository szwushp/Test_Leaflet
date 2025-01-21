var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_S_Z4_V2_1 = new ol.format.GeoJSON();
var features_S_Z4_V2_1 = format_S_Z4_V2_1.readFeatures(json_S_Z4_V2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_Z4_V2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_Z4_V2_1.addFeatures(features_S_Z4_V2_1);
var lyr_S_Z4_V2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_Z4_V2_1, 
                style: style_S_Z4_V2_1,
                popuplayertitle: "S_Z4_V2",
                interactive: true,
                title: '<img src="styles/legend/S_Z4_V2_1.png" /> S_Z4_V2'
            });
var group_Survey = new ol.layer.Group({
                                layers: [lyr_S_Z4_V2_1,],
                                fold: "open",
                                title: "Survey"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: "Base Map"});

lyr_GoogleSatellite_0.setVisible(true);lyr_S_Z4_V2_1.setVisible(true);
var layersList = [group_BaseMap,group_Survey];
lyr_S_Z4_V2_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LPoint': 'LPoint', 'Easting': 'Easting', 'Northing': 'Northing', 'DeltaE': 'DeltaE', 'DeltaN': 'DeltaN', 'Zipper': 'Zipper', 'Line': 'Line', 'Point': 'Point', });
lyr_S_Z4_V2_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'LPoint': 'Range', 'Easting': 'Range', 'Northing': 'Range', 'DeltaE': 'Range', 'DeltaN': 'Range', 'Zipper': 'Range', 'Line': 'Range', 'Point': 'Range', });
lyr_S_Z4_V2_1.set('fieldLabels', {'OBJECTID': 'no label', 'LPoint': 'no label', 'Easting': 'no label', 'Northing': 'no label', 'DeltaE': 'no label', 'DeltaN': 'no label', 'Zipper': 'no label', 'Line': 'no label', 'Point': 'no label', });
lyr_S_Z4_V2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});