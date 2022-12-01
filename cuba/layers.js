var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
    title: 'Этапы распространения эпидемии между городами Кубы<br />\
    <img src="styles/legend/_1_0.png" /> 1 этап<br />\
    <img src="styles/legend/_1_1.png" /> 2 этап<br />\
    <img src="styles/legend/_1_2.png" /> 3 этап<br />\
    <img src="styles/legend/_1_3.png" /> 4 этап<br />\
    <img src="styles/legend/_1_4.png" /> 5 этап<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'country': 'country', 'featurecla': 'featurecla', 'name': 'name', 'sov0name': 'sov0name', 'pop_max': 'pop_max', 'grav': 'grav', });
lyr__1.set('fieldImages', {'country': 'TextEdit', 'featurecla': 'TextEdit', 'name': 'TextEdit', 'sov0name': 'TextEdit', 'pop_max': 'TextEdit', 'grav': 'TextEdit', });
lyr__1.set('fieldLabels', {'country': 'no label', 'featurecla': 'no label', 'name': 'no label', 'sov0name': 'no label', 'pop_max': 'no label', 'grav': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});