var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nmero_1 = new ol.format.GeoJSON();
var features_Nmero_1 = format_Nmero_1.readFeatures(json_Nmero_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nmero_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nmero_1.addFeatures(features_Nmero_1);
var lyr_Nmero_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nmero_1, 
                style: style_Nmero_1,
                interactive: true,
    title: 'Número<br />\
    <img src="styles/legend/Nmero_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Nmero_1_1.png" /> 1 - 5<br />\
    <img src="styles/legend/Nmero_1_2.png" /> 5 - 10<br />\
    <img src="styles/legend/Nmero_1_3.png" /> 10 - 15<br />\
    <img src="styles/legend/Nmero_1_4.png" /> 15 - 30<br />\
    <img src="styles/legend/Nmero_1_5.png" /> 30 - 50<br />\
    <img src="styles/legend/Nmero_1_6.png" /> 50 - 80<br />\
    <img src="styles/legend/Nmero_1_7.png" /> 80 - 110<br />\
    <img src="styles/legend/Nmero_1_8.png" /> 110 - 200<br />\
    <img src="styles/legend/Nmero_1_9.png" /> 200 - 341<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Nmero_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Nmero_1];
lyr_Nmero_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', });
lyr_Nmero_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', });
lyr_Nmero_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', });
lyr_Nmero_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});