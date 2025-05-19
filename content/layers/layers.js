ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5266").setExtent([85962.027702, 2891856.896309, 523739.396232, 3173876.987617]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Bumthang_3 = new ol.format.GeoJSON();
var features_Bumthang_3 = format_Bumthang_3.readFeatures(json_Bumthang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Bumthang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bumthang_3.addFeatures(features_Bumthang_3);
var lyr_Bumthang_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bumthang_3, 
                style: style_Bumthang_3,
                popuplayertitle: 'Bumthang',
                interactive: true,
    title: 'Bumthang<br />\
    <img src="styles/legend/Bumthang_3_0.png" /> 5000<br />\
    <img src="styles/legend/Bumthang_3_1.png" /> 10000<br />\
    <img src="styles/legend/Bumthang_3_2.png" /> 15000<br />\
    <img src="styles/legend/Bumthang_3_3.png" /> 20000<br />\
    <img src="styles/legend/Bumthang_3_4.png" /> 25000<br />\
    <img src="styles/legend/Bumthang_3_5.png" /> 30000<br />\
    <img src="styles/legend/Bumthang_3_6.png" /> 35000<br />\
    <img src="styles/legend/Bumthang_3_7.png" /> 40000<br />\
    <img src="styles/legend/Bumthang_3_8.png" /> 45000<br />\
    <img src="styles/legend/Bumthang_3_9.png" /> 50000<br />\
    <img src="styles/legend/Bumthang_3_10.png" /> 55000<br />\
    <img src="styles/legend/Bumthang_3_11.png" /> 60000<br />\
    <img src="styles/legend/Bumthang_3_12.png" /> 65000<br />\
    <img src="styles/legend/Bumthang_3_13.png" /> <br />' });
var format_Chhukha_4 = new ol.format.GeoJSON();
var features_Chhukha_4 = format_Chhukha_4.readFeatures(json_Chhukha_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Chhukha_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Chhukha_4.addFeatures(features_Chhukha_4);
var lyr_Chhukha_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Chhukha_4, 
                style: style_Chhukha_4,
                popuplayertitle: 'Chhukha',
                interactive: true,
    title: 'Chhukha<br />\
    <img src="styles/legend/Chhukha_4_0.png" /> 5000<br />\
    <img src="styles/legend/Chhukha_4_1.png" /> 10000<br />\
    <img src="styles/legend/Chhukha_4_2.png" /> 15000<br />\
    <img src="styles/legend/Chhukha_4_3.png" /> 20000<br />\
    <img src="styles/legend/Chhukha_4_4.png" /> 25000<br />\
    <img src="styles/legend/Chhukha_4_5.png" /> 30000<br />\
    <img src="styles/legend/Chhukha_4_6.png" /> 35000<br />\
    <img src="styles/legend/Chhukha_4_7.png" /> 40000<br />\
    <img src="styles/legend/Chhukha_4_8.png" /> 45000<br />\
    <img src="styles/legend/Chhukha_4_9.png" /> 50000<br />\
    <img src="styles/legend/Chhukha_4_10.png" /> 55000<br />\
    <img src="styles/legend/Chhukha_4_11.png" /> <br />' });
var format_Dagana_5 = new ol.format.GeoJSON();
var features_Dagana_5 = format_Dagana_5.readFeatures(json_Dagana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Dagana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dagana_5.addFeatures(features_Dagana_5);
var lyr_Dagana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dagana_5, 
                style: style_Dagana_5,
                popuplayertitle: 'Dagana',
                interactive: true,
    title: 'Dagana<br />\
    <img src="styles/legend/Dagana_5_0.png" /> 5000<br />\
    <img src="styles/legend/Dagana_5_1.png" /> 10000<br />\
    <img src="styles/legend/Dagana_5_2.png" /> 15000<br />\
    <img src="styles/legend/Dagana_5_3.png" /> 20000<br />\
    <img src="styles/legend/Dagana_5_4.png" /> 25000<br />\
    <img src="styles/legend/Dagana_5_5.png" /> 30000<br />\
    <img src="styles/legend/Dagana_5_6.png" /> 35000<br />\
    <img src="styles/legend/Dagana_5_7.png" /> 40000<br />\
    <img src="styles/legend/Dagana_5_8.png" /> 45000<br />\
    <img src="styles/legend/Dagana_5_9.png" /> <br />' });
var format_Gasa_6 = new ol.format.GeoJSON();
var features_Gasa_6 = format_Gasa_6.readFeatures(json_Gasa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Gasa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gasa_6.addFeatures(features_Gasa_6);
var lyr_Gasa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gasa_6, 
                style: style_Gasa_6,
                popuplayertitle: 'Gasa',
                interactive: true,
    title: 'Gasa<br />\
    <img src="styles/legend/Gasa_6_0.png" /> 5000<br />\
    <img src="styles/legend/Gasa_6_1.png" /> 10000<br />\
    <img src="styles/legend/Gasa_6_2.png" /> 15000<br />\
    <img src="styles/legend/Gasa_6_3.png" /> 20000<br />\
    <img src="styles/legend/Gasa_6_4.png" /> 25000<br />\
    <img src="styles/legend/Gasa_6_5.png" /> 30000<br />\
    <img src="styles/legend/Gasa_6_6.png" /> 35000<br />\
    <img src="styles/legend/Gasa_6_7.png" /> 40000<br />\
    <img src="styles/legend/Gasa_6_8.png" /> 45000<br />\
    <img src="styles/legend/Gasa_6_9.png" /> 50000<br />\
    <img src="styles/legend/Gasa_6_10.png" /> 55000<br />\
    <img src="styles/legend/Gasa_6_11.png" /> 60000<br />\
    <img src="styles/legend/Gasa_6_12.png" /> 65000<br />\
    <img src="styles/legend/Gasa_6_13.png" /> 70000<br />\
    <img src="styles/legend/Gasa_6_14.png" /> 75000<br />\
    <img src="styles/legend/Gasa_6_15.png" /> 80000<br />\
    <img src="styles/legend/Gasa_6_16.png" /> <br />' });
var format_Haa_7 = new ol.format.GeoJSON();
var features_Haa_7 = format_Haa_7.readFeatures(json_Haa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Haa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haa_7.addFeatures(features_Haa_7);
var lyr_Haa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haa_7, 
                style: style_Haa_7,
                popuplayertitle: 'Haa',
                interactive: true,
    title: 'Haa<br />\
    <img src="styles/legend/Haa_7_0.png" /> 5000<br />\
    <img src="styles/legend/Haa_7_1.png" /> 10000<br />\
    <img src="styles/legend/Haa_7_2.png" /> 15000<br />\
    <img src="styles/legend/Haa_7_3.png" /> 20000<br />\
    <img src="styles/legend/Haa_7_4.png" /> 25000<br />\
    <img src="styles/legend/Haa_7_5.png" /> 30000<br />\
    <img src="styles/legend/Haa_7_6.png" /> 35000<br />\
    <img src="styles/legend/Haa_7_7.png" /> 40000<br />\
    <img src="styles/legend/Haa_7_8.png" /> 45000<br />\
    <img src="styles/legend/Haa_7_9.png" /> <br />' });
var format_Lhuentse_8 = new ol.format.GeoJSON();
var features_Lhuentse_8 = format_Lhuentse_8.readFeatures(json_Lhuentse_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Lhuentse_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lhuentse_8.addFeatures(features_Lhuentse_8);
var lyr_Lhuentse_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lhuentse_8, 
                style: style_Lhuentse_8,
                popuplayertitle: 'Lhuentse',
                interactive: true,
    title: 'Lhuentse<br />\
    <img src="styles/legend/Lhuentse_8_0.png" /> 5000<br />\
    <img src="styles/legend/Lhuentse_8_1.png" /> 10000<br />\
    <img src="styles/legend/Lhuentse_8_2.png" /> 15000<br />\
    <img src="styles/legend/Lhuentse_8_3.png" /> 20000<br />\
    <img src="styles/legend/Lhuentse_8_4.png" /> 25000<br />\
    <img src="styles/legend/Lhuentse_8_5.png" /> 30000<br />\
    <img src="styles/legend/Lhuentse_8_6.png" /> 35000<br />\
    <img src="styles/legend/Lhuentse_8_7.png" /> 40000<br />\
    <img src="styles/legend/Lhuentse_8_8.png" /> 45000<br />\
    <img src="styles/legend/Lhuentse_8_9.png" /> 50000<br />\
    <img src="styles/legend/Lhuentse_8_10.png" /> 55000<br />\
    <img src="styles/legend/Lhuentse_8_11.png" /> 60000<br />\
    <img src="styles/legend/Lhuentse_8_12.png" /> <br />' });
var format_Mongar_9 = new ol.format.GeoJSON();
var features_Mongar_9 = format_Mongar_9.readFeatures(json_Mongar_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Mongar_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mongar_9.addFeatures(features_Mongar_9);
var lyr_Mongar_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mongar_9, 
                style: style_Mongar_9,
                popuplayertitle: 'Mongar',
                interactive: true,
    title: 'Mongar<br />\
    <img src="styles/legend/Mongar_9_0.png" /> 5000<br />\
    <img src="styles/legend/Mongar_9_1.png" /> 10000<br />\
    <img src="styles/legend/Mongar_9_2.png" /> 15000<br />\
    <img src="styles/legend/Mongar_9_3.png" /> 20000<br />\
    <img src="styles/legend/Mongar_9_4.png" /> 25000<br />\
    <img src="styles/legend/Mongar_9_5.png" /> 30000<br />\
    <img src="styles/legend/Mongar_9_6.png" /> 35000<br />\
    <img src="styles/legend/Mongar_9_7.png" /> 40000<br />\
    <img src="styles/legend/Mongar_9_8.png" /> <br />' });
var format_Paro_10 = new ol.format.GeoJSON();
var features_Paro_10 = format_Paro_10.readFeatures(json_Paro_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Paro_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paro_10.addFeatures(features_Paro_10);
var lyr_Paro_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paro_10, 
                style: style_Paro_10,
                popuplayertitle: 'Paro',
                interactive: true,
    title: 'Paro<br />\
    <img src="styles/legend/Paro_10_0.png" /> 5000<br />\
    <img src="styles/legend/Paro_10_1.png" /> 10000<br />\
    <img src="styles/legend/Paro_10_2.png" /> 15000<br />\
    <img src="styles/legend/Paro_10_3.png" /> 20000<br />\
    <img src="styles/legend/Paro_10_4.png" /> 25000<br />\
    <img src="styles/legend/Paro_10_5.png" /> 30000<br />\
    <img src="styles/legend/Paro_10_6.png" /> 35000<br />\
    <img src="styles/legend/Paro_10_7.png" /> 40000<br />\
    <img src="styles/legend/Paro_10_8.png" /> 45000<br />\
    <img src="styles/legend/Paro_10_9.png" /> <br />' });
var format_PemaGatshel_11 = new ol.format.GeoJSON();
var features_PemaGatshel_11 = format_PemaGatshel_11.readFeatures(json_PemaGatshel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_PemaGatshel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemaGatshel_11.addFeatures(features_PemaGatshel_11);
var lyr_PemaGatshel_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemaGatshel_11, 
                style: style_PemaGatshel_11,
                popuplayertitle: 'Pema Gatshel',
                interactive: true,
    title: 'Pema Gatshel<br />\
    <img src="styles/legend/PemaGatshel_11_0.png" /> 5000<br />\
    <img src="styles/legend/PemaGatshel_11_1.png" /> 10000<br />\
    <img src="styles/legend/PemaGatshel_11_2.png" /> 15000<br />\
    <img src="styles/legend/PemaGatshel_11_3.png" /> 20000<br />\
    <img src="styles/legend/PemaGatshel_11_4.png" /> 25000<br />\
    <img src="styles/legend/PemaGatshel_11_5.png" /> 30000<br />\
    <img src="styles/legend/PemaGatshel_11_6.png" /> 35000<br />\
    <img src="styles/legend/PemaGatshel_11_7.png" /> 40000<br />\
    <img src="styles/legend/PemaGatshel_11_8.png" /> 45000<br />\
    <img src="styles/legend/PemaGatshel_11_9.png" /> 50000<br />\
    <img src="styles/legend/PemaGatshel_11_10.png" /> <br />' });
var format_Punakha_12 = new ol.format.GeoJSON();
var features_Punakha_12 = format_Punakha_12.readFeatures(json_Punakha_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Punakha_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punakha_12.addFeatures(features_Punakha_12);
var lyr_Punakha_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punakha_12, 
                style: style_Punakha_12,
                popuplayertitle: 'Punakha',
                interactive: true,
    title: 'Punakha<br />\
    <img src="styles/legend/Punakha_12_0.png" /> 5000<br />\
    <img src="styles/legend/Punakha_12_1.png" /> 10000<br />\
    <img src="styles/legend/Punakha_12_2.png" /> 15000<br />\
    <img src="styles/legend/Punakha_12_3.png" /> 20000<br />\
    <img src="styles/legend/Punakha_12_4.png" /> 25000<br />\
    <img src="styles/legend/Punakha_12_5.png" /> 30000<br />\
    <img src="styles/legend/Punakha_12_6.png" /> 35000<br />\
    <img src="styles/legend/Punakha_12_7.png" /> <br />' });
var format_Samtse_13 = new ol.format.GeoJSON();
var features_Samtse_13 = format_Samtse_13.readFeatures(json_Samtse_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Samtse_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Samtse_13.addFeatures(features_Samtse_13);
var lyr_Samtse_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Samtse_13, 
                style: style_Samtse_13,
                popuplayertitle: 'Samtse',
                interactive: true,
    title: 'Samtse<br />\
    <img src="styles/legend/Samtse_13_0.png" /> 5000<br />\
    <img src="styles/legend/Samtse_13_1.png" /> 10000<br />\
    <img src="styles/legend/Samtse_13_2.png" /> 15000<br />\
    <img src="styles/legend/Samtse_13_3.png" /> 20000<br />\
    <img src="styles/legend/Samtse_13_4.png" /> 25000<br />\
    <img src="styles/legend/Samtse_13_5.png" /> 30000<br />\
    <img src="styles/legend/Samtse_13_6.png" /> 35000<br />\
    <img src="styles/legend/Samtse_13_7.png" /> 40000<br />\
    <img src="styles/legend/Samtse_13_8.png" /> 45000<br />\
    <img src="styles/legend/Samtse_13_9.png" /> 50000<br />\
    <img src="styles/legend/Samtse_13_10.png" /> <br />' });
var format_Sarpang_14 = new ol.format.GeoJSON();
var features_Sarpang_14 = format_Sarpang_14.readFeatures(json_Sarpang_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Sarpang_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarpang_14.addFeatures(features_Sarpang_14);
var lyr_Sarpang_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarpang_14, 
                style: style_Sarpang_14,
                popuplayertitle: 'Sarpang',
                interactive: true,
    title: 'Sarpang<br />\
    <img src="styles/legend/Sarpang_14_0.png" /> 5000<br />\
    <img src="styles/legend/Sarpang_14_1.png" /> 10000<br />\
    <img src="styles/legend/Sarpang_14_2.png" /> 15000<br />\
    <img src="styles/legend/Sarpang_14_3.png" /> 20000<br />\
    <img src="styles/legend/Sarpang_14_4.png" /> 25000<br />\
    <img src="styles/legend/Sarpang_14_5.png" /> 30000<br />\
    <img src="styles/legend/Sarpang_14_6.png" /> 35000<br />\
    <img src="styles/legend/Sarpang_14_7.png" /> 40000<br />\
    <img src="styles/legend/Sarpang_14_8.png" /> 45000<br />\
    <img src="styles/legend/Sarpang_14_9.png" /> 50000<br />\
    <img src="styles/legend/Sarpang_14_10.png" /> 55000<br />\
    <img src="styles/legend/Sarpang_14_11.png" /> <br />' });
var format_SamdrupJongkhar_15 = new ol.format.GeoJSON();
var features_SamdrupJongkhar_15 = format_SamdrupJongkhar_15.readFeatures(json_SamdrupJongkhar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_SamdrupJongkhar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamdrupJongkhar_15.addFeatures(features_SamdrupJongkhar_15);
var lyr_SamdrupJongkhar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamdrupJongkhar_15, 
                style: style_SamdrupJongkhar_15,
                popuplayertitle: 'Samdrup Jongkhar',
                interactive: true,
    title: 'Samdrup Jongkhar<br />\
    <img src="styles/legend/SamdrupJongkhar_15_0.png" /> 5000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_1.png" /> 10000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_2.png" /> 15000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_3.png" /> 20000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_4.png" /> 25000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_5.png" /> 30000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_6.png" /> 35000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_7.png" /> 40000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_8.png" /> 45000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_9.png" /> 50000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_10.png" /> 55000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_11.png" /> 60000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_12.png" /> 65000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_13.png" /> 70000<br />\
    <img src="styles/legend/SamdrupJongkhar_15_14.png" /> <br />' });
var format_TashiGang_16 = new ol.format.GeoJSON();
var features_TashiGang_16 = format_TashiGang_16.readFeatures(json_TashiGang_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_TashiGang_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TashiGang_16.addFeatures(features_TashiGang_16);
var lyr_TashiGang_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TashiGang_16, 
                style: style_TashiGang_16,
                popuplayertitle: 'Tashi Gang',
                interactive: true,
    title: 'Tashi Gang<br />\
    <img src="styles/legend/TashiGang_16_0.png" /> 5000<br />\
    <img src="styles/legend/TashiGang_16_1.png" /> 10000<br />\
    <img src="styles/legend/TashiGang_16_2.png" /> 15000<br />\
    <img src="styles/legend/TashiGang_16_3.png" /> 20000<br />\
    <img src="styles/legend/TashiGang_16_4.png" /> 25000<br />\
    <img src="styles/legend/TashiGang_16_5.png" /> 30000<br />\
    <img src="styles/legend/TashiGang_16_6.png" /> 35000<br />\
    <img src="styles/legend/TashiGang_16_7.png" /> 40000<br />\
    <img src="styles/legend/TashiGang_16_8.png" /> 45000<br />\
    <img src="styles/legend/TashiGang_16_9.png" /> 50000<br />\
    <img src="styles/legend/TashiGang_16_10.png" /> 55000<br />\
    <img src="styles/legend/TashiGang_16_11.png" /> 60000<br />\
    <img src="styles/legend/TashiGang_16_12.png" /> 65000<br />\
    <img src="styles/legend/TashiGang_16_13.png" /> <br />' });
var format_Thimphu_17 = new ol.format.GeoJSON();
var features_Thimphu_17 = format_Thimphu_17.readFeatures(json_Thimphu_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Thimphu_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thimphu_17.addFeatures(features_Thimphu_17);
var lyr_Thimphu_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thimphu_17, 
                style: style_Thimphu_17,
                popuplayertitle: 'Thimphu',
                interactive: true,
    title: 'Thimphu<br />\
    <img src="styles/legend/Thimphu_17_0.png" /> 5000<br />\
    <img src="styles/legend/Thimphu_17_1.png" /> 10000<br />\
    <img src="styles/legend/Thimphu_17_2.png" /> 15000<br />\
    <img src="styles/legend/Thimphu_17_3.png" /> 20000<br />\
    <img src="styles/legend/Thimphu_17_4.png" /> 25000<br />\
    <img src="styles/legend/Thimphu_17_5.png" /> 30000<br />\
    <img src="styles/legend/Thimphu_17_6.png" /> 35000<br />\
    <img src="styles/legend/Thimphu_17_7.png" /> 40000<br />\
    <img src="styles/legend/Thimphu_17_8.png" /> 45000<br />\
    <img src="styles/legend/Thimphu_17_9.png" /> 50000<br />\
    <img src="styles/legend/Thimphu_17_10.png" /> 55000<br />\
    <img src="styles/legend/Thimphu_17_11.png" /> 60000<br />\
    <img src="styles/legend/Thimphu_17_12.png" /> 65000<br />\
    <img src="styles/legend/Thimphu_17_13.png" /> <br />' });
var format_Trongsa_18 = new ol.format.GeoJSON();
var features_Trongsa_18 = format_Trongsa_18.readFeatures(json_Trongsa_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Trongsa_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trongsa_18.addFeatures(features_Trongsa_18);
var lyr_Trongsa_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trongsa_18, 
                style: style_Trongsa_18,
                popuplayertitle: 'Trongsa',
                interactive: true,
                title: 'Trongsa'
            });
var format_Tsirang_19 = new ol.format.GeoJSON();
var features_Tsirang_19 = format_Tsirang_19.readFeatures(json_Tsirang_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Tsirang_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tsirang_19.addFeatures(features_Tsirang_19);
var lyr_Tsirang_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tsirang_19, 
                style: style_Tsirang_19,
                popuplayertitle: 'Tsirang',
                interactive: true,
    title: 'Tsirang<br />\
    <img src="styles/legend/Tsirang_19_0.png" /> 5000<br />\
    <img src="styles/legend/Tsirang_19_1.png" /> 10000<br />\
    <img src="styles/legend/Tsirang_19_2.png" /> 15000<br />\
    <img src="styles/legend/Tsirang_19_3.png" /> 20000<br />\
    <img src="styles/legend/Tsirang_19_4.png" /> 25000<br />\
    <img src="styles/legend/Tsirang_19_5.png" /> 30000<br />\
    <img src="styles/legend/Tsirang_19_6.png" /> <br />' });
var format_WangduePhodrang_20 = new ol.format.GeoJSON();
var features_WangduePhodrang_20 = format_WangduePhodrang_20.readFeatures(json_WangduePhodrang_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_WangduePhodrang_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WangduePhodrang_20.addFeatures(features_WangduePhodrang_20);
var lyr_WangduePhodrang_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WangduePhodrang_20, 
                style: style_WangduePhodrang_20,
                popuplayertitle: 'Wangdue Phodrang ',
                interactive: true,
    title: 'Wangdue Phodrang <br />\
    <img src="styles/legend/WangduePhodrang_20_0.png" /> 5000<br />\
    <img src="styles/legend/WangduePhodrang_20_1.png" /> 10000<br />\
    <img src="styles/legend/WangduePhodrang_20_2.png" /> 15000<br />\
    <img src="styles/legend/WangduePhodrang_20_3.png" /> 20000<br />\
    <img src="styles/legend/WangduePhodrang_20_4.png" /> 25000<br />\
    <img src="styles/legend/WangduePhodrang_20_5.png" /> 30000<br />\
    <img src="styles/legend/WangduePhodrang_20_6.png" /> 35000<br />\
    <img src="styles/legend/WangduePhodrang_20_7.png" /> 40000<br />\
    <img src="styles/legend/WangduePhodrang_20_8.png" /> 45000<br />\
    <img src="styles/legend/WangduePhodrang_20_9.png" /> 50000<br />\
    <img src="styles/legend/WangduePhodrang_20_10.png" /> 55000<br />\
    <img src="styles/legend/WangduePhodrang_20_11.png" /> 60000<br />\
    <img src="styles/legend/WangduePhodrang_20_12.png" /> 65000<br />\
    <img src="styles/legend/WangduePhodrang_20_13.png" /> 70000<br />\
    <img src="styles/legend/WangduePhodrang_20_14.png" /> 75000<br />\
    <img src="styles/legend/WangduePhodrang_20_15.png" /> 80000<br />\
    <img src="styles/legend/WangduePhodrang_20_16.png" /> 85000<br />\
    <img src="styles/legend/WangduePhodrang_20_17.png" /> <br />' });
var format_TashiYangtse_21 = new ol.format.GeoJSON();
var features_TashiYangtse_21 = format_TashiYangtse_21.readFeatures(json_TashiYangtse_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_TashiYangtse_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TashiYangtse_21.addFeatures(features_TashiYangtse_21);
var lyr_TashiYangtse_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TashiYangtse_21, 
                style: style_TashiYangtse_21,
                popuplayertitle: 'Tashi Yangtse',
                interactive: true,
    title: 'Tashi Yangtse<br />\
    <img src="styles/legend/TashiYangtse_21_0.png" /> 5000<br />\
    <img src="styles/legend/TashiYangtse_21_1.png" /> 10000<br />\
    <img src="styles/legend/TashiYangtse_21_2.png" /> 15000<br />\
    <img src="styles/legend/TashiYangtse_21_3.png" /> 20000<br />\
    <img src="styles/legend/TashiYangtse_21_4.png" /> 25000<br />\
    <img src="styles/legend/TashiYangtse_21_5.png" /> 30000<br />\
    <img src="styles/legend/TashiYangtse_21_6.png" /> 35000<br />\
    <img src="styles/legend/TashiYangtse_21_7.png" /> 40000<br />\
    <img src="styles/legend/TashiYangtse_21_8.png" /> 45000<br />\
    <img src="styles/legend/TashiYangtse_21_9.png" /> <br />' });
var format_Zhemganag_22 = new ol.format.GeoJSON();
var features_Zhemganag_22 = format_Zhemganag_22.readFeatures(json_Zhemganag_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_Zhemganag_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zhemganag_22.addFeatures(features_Zhemganag_22);
var lyr_Zhemganag_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zhemganag_22, 
                style: style_Zhemganag_22,
                popuplayertitle: 'Zhemganag',
                interactive: true,
    title: 'Zhemganag<br />\
    <img src="styles/legend/Zhemganag_22_0.png" /> 5000<br />\
    <img src="styles/legend/Zhemganag_22_1.png" /> 10000<br />\
    <img src="styles/legend/Zhemganag_22_2.png" /> 15000<br />\
    <img src="styles/legend/Zhemganag_22_3.png" /> 20000<br />\
    <img src="styles/legend/Zhemganag_22_4.png" /> 25000<br />\
    <img src="styles/legend/Zhemganag_22_5.png" /> 30000<br />\
    <img src="styles/legend/Zhemganag_22_6.png" /> 35000<br />\
    <img src="styles/legend/Zhemganag_22_7.png" /> 40000<br />\
    <img src="styles/legend/Zhemganag_22_8.png" /> 45000<br />\
    <img src="styles/legend/Zhemganag_22_9.png" /> 50000<br />\
    <img src="styles/legend/Zhemganag_22_10.png" /> 55000<br />' });
var format_ZhemgangYabilaptsaHospital_23 = new ol.format.GeoJSON();
var features_ZhemgangYabilaptsaHospital_23 = format_ZhemgangYabilaptsaHospital_23.readFeatures(json_ZhemgangYabilaptsaHospital_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_ZhemgangYabilaptsaHospital_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZhemgangYabilaptsaHospital_23.addFeatures(features_ZhemgangYabilaptsaHospital_23);
var lyr_ZhemgangYabilaptsaHospital_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZhemgangYabilaptsaHospital_23, 
                style: style_ZhemgangYabilaptsaHospital_23,
                popuplayertitle: 'Zhemgang (Yabilaptsa Hospital)',
                interactive: true,
                title: '<img src="styles/legend/ZhemgangYabilaptsaHospital_23.png" /> Zhemgang (Yabilaptsa Hospital)'
            });
var format_TashiYangtseYangtseHospital_24 = new ol.format.GeoJSON();
var features_TashiYangtseYangtseHospital_24 = format_TashiYangtseYangtseHospital_24.readFeatures(json_TashiYangtseYangtseHospital_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_TashiYangtseYangtseHospital_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TashiYangtseYangtseHospital_24.addFeatures(features_TashiYangtseYangtseHospital_24);
var lyr_TashiYangtseYangtseHospital_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TashiYangtseYangtseHospital_24, 
                style: style_TashiYangtseYangtseHospital_24,
                popuplayertitle: 'Tashi Yangtse (Yangtse Hospital)',
                interactive: true,
                title: '<img src="styles/legend/TashiYangtseYangtseHospital_24.png" /> Tashi Yangtse (Yangtse Hospital)'
            });
var format_WangduePhodrangArmyHospital_25 = new ol.format.GeoJSON();
var features_WangduePhodrangArmyHospital_25 = format_WangduePhodrangArmyHospital_25.readFeatures(json_WangduePhodrangArmyHospital_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_WangduePhodrangArmyHospital_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WangduePhodrangArmyHospital_25.addFeatures(features_WangduePhodrangArmyHospital_25);
var lyr_WangduePhodrangArmyHospital_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WangduePhodrangArmyHospital_25, 
                style: style_WangduePhodrangArmyHospital_25,
                popuplayertitle: 'Wangdue Phodrang (Army Hospital)',
                interactive: true,
                title: '<img src="styles/legend/WangduePhodrangArmyHospital_25.png" /> Wangdue Phodrang (Army Hospital)'
            });
var format_TsirangDamphuHospital_26 = new ol.format.GeoJSON();
var features_TsirangDamphuHospital_26 = format_TsirangDamphuHospital_26.readFeatures(json_TsirangDamphuHospital_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_TsirangDamphuHospital_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TsirangDamphuHospital_26.addFeatures(features_TsirangDamphuHospital_26);
var lyr_TsirangDamphuHospital_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TsirangDamphuHospital_26, 
                style: style_TsirangDamphuHospital_26,
                popuplayertitle: 'Tsirang (Damphu Hospital)',
                interactive: true,
                title: '<img src="styles/legend/TsirangDamphuHospital_26.png" /> Tsirang (Damphu Hospital)'
            });
var format_TrongsaTrongsaHospital_27 = new ol.format.GeoJSON();
var features_TrongsaTrongsaHospital_27 = format_TrongsaTrongsaHospital_27.readFeatures(json_TrongsaTrongsaHospital_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_TrongsaTrongsaHospital_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrongsaTrongsaHospital_27.addFeatures(features_TrongsaTrongsaHospital_27);
var lyr_TrongsaTrongsaHospital_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrongsaTrongsaHospital_27, 
                style: style_TrongsaTrongsaHospital_27,
                popuplayertitle: 'Trongsa (Trongsa Hospital)',
                interactive: true,
                title: '<img src="styles/legend/TrongsaTrongsaHospital_27.png" /> Trongsa (Trongsa Hospital)'
            });
var format_TrashiGangTashiGangHospital_28 = new ol.format.GeoJSON();
var features_TrashiGangTashiGangHospital_28 = format_TrashiGangTashiGangHospital_28.readFeatures(json_TrashiGangTashiGangHospital_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_TrashiGangTashiGangHospital_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrashiGangTashiGangHospital_28.addFeatures(features_TrashiGangTashiGangHospital_28);
var lyr_TrashiGangTashiGangHospital_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrashiGangTashiGangHospital_28, 
                style: style_TrashiGangTashiGangHospital_28,
                popuplayertitle: 'Trashi Gang (Tashi Gang Hospital)',
                interactive: true,
                title: '<img src="styles/legend/TrashiGangTashiGangHospital_28.png" /> Trashi Gang (Tashi Gang Hospital)'
            });
var format_ThimphuJDWNRH_29 = new ol.format.GeoJSON();
var features_ThimphuJDWNRH_29 = format_ThimphuJDWNRH_29.readFeatures(json_ThimphuJDWNRH_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_ThimphuJDWNRH_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThimphuJDWNRH_29.addFeatures(features_ThimphuJDWNRH_29);
var lyr_ThimphuJDWNRH_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThimphuJDWNRH_29, 
                style: style_ThimphuJDWNRH_29,
                popuplayertitle: 'Thimphu (JDWNRH)',
                interactive: true,
                title: '<img src="styles/legend/ThimphuJDWNRH_29.png" /> Thimphu (JDWNRH)'
            });
var format_SarpangGelephuRegionalHospital_30 = new ol.format.GeoJSON();
var features_SarpangGelephuRegionalHospital_30 = format_SarpangGelephuRegionalHospital_30.readFeatures(json_SarpangGelephuRegionalHospital_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_SarpangGelephuRegionalHospital_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SarpangGelephuRegionalHospital_30.addFeatures(features_SarpangGelephuRegionalHospital_30);
var lyr_SarpangGelephuRegionalHospital_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SarpangGelephuRegionalHospital_30, 
                style: style_SarpangGelephuRegionalHospital_30,
                popuplayertitle: 'Sarpang (Gelephu Regional Hospital)',
                interactive: true,
                title: '<img src="styles/legend/SarpangGelephuRegionalHospital_30.png" /> Sarpang (Gelephu Regional Hospital)'
            });
var format_SamtseSamtseHospital_31 = new ol.format.GeoJSON();
var features_SamtseSamtseHospital_31 = format_SamtseSamtseHospital_31.readFeatures(json_SamtseSamtseHospital_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_SamtseSamtseHospital_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamtseSamtseHospital_31.addFeatures(features_SamtseSamtseHospital_31);
var lyr_SamtseSamtseHospital_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamtseSamtseHospital_31, 
                style: style_SamtseSamtseHospital_31,
                popuplayertitle: 'Samtse (Samtse Hospital)',
                interactive: true,
                title: '<img src="styles/legend/SamtseSamtseHospital_31.png" /> Samtse (Samtse Hospital)'
            });
var format_SamdrupJongkharDeothangMilitaryHospital_32 = new ol.format.GeoJSON();
var features_SamdrupJongkharDeothangMilitaryHospital_32 = format_SamdrupJongkharDeothangMilitaryHospital_32.readFeatures(json_SamdrupJongkharDeothangMilitaryHospital_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_SamdrupJongkharDeothangMilitaryHospital_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SamdrupJongkharDeothangMilitaryHospital_32.addFeatures(features_SamdrupJongkharDeothangMilitaryHospital_32);
var lyr_SamdrupJongkharDeothangMilitaryHospital_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SamdrupJongkharDeothangMilitaryHospital_32, 
                style: style_SamdrupJongkharDeothangMilitaryHospital_32,
                popuplayertitle: 'Samdrup Jongkhar (Deothang Military Hospital)',
                interactive: true,
                title: '<img src="styles/legend/SamdrupJongkharDeothangMilitaryHospital_32.png" /> Samdrup Jongkhar (Deothang Military Hospital)'
            });
var format_PunakhaPunakhaHospital_33 = new ol.format.GeoJSON();
var features_PunakhaPunakhaHospital_33 = format_PunakhaPunakhaHospital_33.readFeatures(json_PunakhaPunakhaHospital_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_PunakhaPunakhaHospital_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PunakhaPunakhaHospital_33.addFeatures(features_PunakhaPunakhaHospital_33);
var lyr_PunakhaPunakhaHospital_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PunakhaPunakhaHospital_33, 
                style: style_PunakhaPunakhaHospital_33,
                popuplayertitle: 'Punakha (Punakha Hospital)',
                interactive: true,
                title: '<img src="styles/legend/PunakhaPunakhaHospital_33.png" /> Punakha (Punakha Hospital)'
            });
var format_PemaGatshelPemaGatshelHospital_34 = new ol.format.GeoJSON();
var features_PemaGatshelPemaGatshelHospital_34 = format_PemaGatshelPemaGatshelHospital_34.readFeatures(json_PemaGatshelPemaGatshelHospital_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_PemaGatshelPemaGatshelHospital_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PemaGatshelPemaGatshelHospital_34.addFeatures(features_PemaGatshelPemaGatshelHospital_34);
var lyr_PemaGatshelPemaGatshelHospital_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PemaGatshelPemaGatshelHospital_34, 
                style: style_PemaGatshelPemaGatshelHospital_34,
                popuplayertitle: 'Pema Gatshel (Pema Gatshel Hospital)',
                interactive: true,
                title: '<img src="styles/legend/PemaGatshelPemaGatshelHospital_34.png" /> Pema Gatshel (Pema Gatshel Hospital)'
            });
var format_ParoParoHospital_35 = new ol.format.GeoJSON();
var features_ParoParoHospital_35 = format_ParoParoHospital_35.readFeatures(json_ParoParoHospital_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_ParoParoHospital_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParoParoHospital_35.addFeatures(features_ParoParoHospital_35);
var lyr_ParoParoHospital_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParoParoHospital_35, 
                style: style_ParoParoHospital_35,
                popuplayertitle: 'Paro (Paro Hospital)',
                interactive: true,
                title: '<img src="styles/legend/ParoParoHospital_35.png" /> Paro (Paro Hospital)'
            });
var format_MongarMongarRegionalReferralHospital_36 = new ol.format.GeoJSON();
var features_MongarMongarRegionalReferralHospital_36 = format_MongarMongarRegionalReferralHospital_36.readFeatures(json_MongarMongarRegionalReferralHospital_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_MongarMongarRegionalReferralHospital_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MongarMongarRegionalReferralHospital_36.addFeatures(features_MongarMongarRegionalReferralHospital_36);
var lyr_MongarMongarRegionalReferralHospital_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MongarMongarRegionalReferralHospital_36, 
                style: style_MongarMongarRegionalReferralHospital_36,
                popuplayertitle: 'Mongar (Mongar Regional Referral Hospital)',
                interactive: true,
                title: '<img src="styles/legend/MongarMongarRegionalReferralHospital_36.png" /> Mongar (Mongar Regional Referral Hospital)'
            });
var format_LhuentseLhuentseHospital_37 = new ol.format.GeoJSON();
var features_LhuentseLhuentseHospital_37 = format_LhuentseLhuentseHospital_37.readFeatures(json_LhuentseLhuentseHospital_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_LhuentseLhuentseHospital_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LhuentseLhuentseHospital_37.addFeatures(features_LhuentseLhuentseHospital_37);
var lyr_LhuentseLhuentseHospital_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LhuentseLhuentseHospital_37, 
                style: style_LhuentseLhuentseHospital_37,
                popuplayertitle: 'Lhuentse (Lhuentse Hospital)',
                interactive: true,
                title: '<img src="styles/legend/LhuentseLhuentseHospital_37.png" /> Lhuentse (Lhuentse Hospital)'
            });
var format_DaganaDagapelaHospital_38 = new ol.format.GeoJSON();
var features_DaganaDagapelaHospital_38 = format_DaganaDagapelaHospital_38.readFeatures(json_DaganaDagapelaHospital_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_DaganaDagapelaHospital_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DaganaDagapelaHospital_38.addFeatures(features_DaganaDagapelaHospital_38);
var lyr_DaganaDagapelaHospital_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DaganaDagapelaHospital_38, 
                style: style_DaganaDagapelaHospital_38,
                popuplayertitle: 'Dagana (Dagapela Hospital)',
                interactive: true,
                title: '<img src="styles/legend/DaganaDagapelaHospital_38.png" /> Dagana (Dagapela Hospital)'
            });
var format_ChhukhaPhuentsholingHospital_39 = new ol.format.GeoJSON();
var features_ChhukhaPhuentsholingHospital_39 = format_ChhukhaPhuentsholingHospital_39.readFeatures(json_ChhukhaPhuentsholingHospital_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_ChhukhaPhuentsholingHospital_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChhukhaPhuentsholingHospital_39.addFeatures(features_ChhukhaPhuentsholingHospital_39);
var lyr_ChhukhaPhuentsholingHospital_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChhukhaPhuentsholingHospital_39, 
                style: style_ChhukhaPhuentsholingHospital_39,
                popuplayertitle: 'Chhukha (Phuentsholing Hospital)',
                interactive: true,
                title: '<img src="styles/legend/ChhukhaPhuentsholingHospital_39.png" /> Chhukha (Phuentsholing Hospital)'
            });
var format_HaaMilitaryHospitalIMTART_40 = new ol.format.GeoJSON();
var features_HaaMilitaryHospitalIMTART_40 = format_HaaMilitaryHospitalIMTART_40.readFeatures(json_HaaMilitaryHospitalIMTART_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_HaaMilitaryHospitalIMTART_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HaaMilitaryHospitalIMTART_40.addFeatures(features_HaaMilitaryHospitalIMTART_40);
var lyr_HaaMilitaryHospitalIMTART_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HaaMilitaryHospitalIMTART_40, 
                style: style_HaaMilitaryHospitalIMTART_40,
                popuplayertitle: 'Haa (Military Hospital, IMTART)',
                interactive: true,
                title: '<img src="styles/legend/HaaMilitaryHospitalIMTART_40.png" /> Haa (Military Hospital, IMTART)'
            });
var format_GasaGasaHospital_41 = new ol.format.GeoJSON();
var features_GasaGasaHospital_41 = format_GasaGasaHospital_41.readFeatures(json_GasaGasaHospital_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_GasaGasaHospital_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasaGasaHospital_41.addFeatures(features_GasaGasaHospital_41);
var lyr_GasaGasaHospital_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasaGasaHospital_41, 
                style: style_GasaGasaHospital_41,
                popuplayertitle: 'Gasa (Gasa Hospital)',
                interactive: true,
                title: '<img src="styles/legend/GasaGasaHospital_41.png" /> Gasa (Gasa Hospital)'
            });
var format_BumthangWangdiCholing_42 = new ol.format.GeoJSON();
var features_BumthangWangdiCholing_42 = format_BumthangWangdiCholing_42.readFeatures(json_BumthangWangdiCholing_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_BumthangWangdiCholing_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BumthangWangdiCholing_42.addFeatures(features_BumthangWangdiCholing_42);
var lyr_BumthangWangdiCholing_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BumthangWangdiCholing_42, 
                style: style_BumthangWangdiCholing_42,
                popuplayertitle: 'Bumthang (Wangdi Choling) ',
                interactive: true,
                title: '<img src="styles/legend/BumthangWangdiCholing_42.png" /> Bumthang (Wangdi Choling) '
            });
var format_RoadsofBhutan_43 = new ol.format.GeoJSON();
var features_RoadsofBhutan_43 = format_RoadsofBhutan_43.readFeatures(json_RoadsofBhutan_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5266'});
var jsonSource_RoadsofBhutan_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadsofBhutan_43.addFeatures(features_RoadsofBhutan_43);
var lyr_RoadsofBhutan_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoadsofBhutan_43, 
                style: style_RoadsofBhutan_43,
                popuplayertitle: 'Roads of Bhutan',
                interactive: true,
                title: '<img src="styles/legend/RoadsofBhutan_43.png" /> Roads of Bhutan'
            });
var group_HospitalsinBhutan = new ol.layer.Group({
                                layers: [lyr_ZhemgangYabilaptsaHospital_23,lyr_TashiYangtseYangtseHospital_24,lyr_WangduePhodrangArmyHospital_25,lyr_TsirangDamphuHospital_26,lyr_TrongsaTrongsaHospital_27,lyr_TrashiGangTashiGangHospital_28,lyr_ThimphuJDWNRH_29,lyr_SarpangGelephuRegionalHospital_30,lyr_SamtseSamtseHospital_31,lyr_SamdrupJongkharDeothangMilitaryHospital_32,lyr_PunakhaPunakhaHospital_33,lyr_PemaGatshelPemaGatshelHospital_34,lyr_ParoParoHospital_35,lyr_MongarMongarRegionalReferralHospital_36,lyr_LhuentseLhuentseHospital_37,lyr_DaganaDagapelaHospital_38,lyr_ChhukhaPhuentsholingHospital_39,lyr_HaaMilitaryHospitalIMTART_40,lyr_GasaGasaHospital_41,lyr_BumthangWangdiCholing_42,],
                                fold: 'close',
                                title: 'Hospitals in Bhutan'});
var group_Distancem = new ol.layer.Group({
                                layers: [lyr_Bumthang_3,lyr_Chhukha_4,lyr_Dagana_5,lyr_Gasa_6,lyr_Haa_7,lyr_Lhuentse_8,lyr_Mongar_9,lyr_Paro_10,lyr_PemaGatshel_11,lyr_Punakha_12,lyr_Samtse_13,lyr_Sarpang_14,lyr_SamdrupJongkhar_15,lyr_TashiGang_16,lyr_Thimphu_17,lyr_Trongsa_18,lyr_Tsirang_19,lyr_WangduePhodrang_20,lyr_TashiYangtse_21,lyr_Zhemganag_22,],
                                fold: 'close',
                                title: 'Distance (m)'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_GoogleHybrid_2,],
                                fold: 'close',
                                title: 'Base Maps'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GoogleHybrid_2.setVisible(true);lyr_Bumthang_3.setVisible(true);lyr_Chhukha_4.setVisible(true);lyr_Dagana_5.setVisible(true);lyr_Gasa_6.setVisible(true);lyr_Haa_7.setVisible(true);lyr_Lhuentse_8.setVisible(true);lyr_Mongar_9.setVisible(true);lyr_Paro_10.setVisible(true);lyr_PemaGatshel_11.setVisible(true);lyr_Punakha_12.setVisible(true);lyr_Samtse_13.setVisible(true);lyr_Sarpang_14.setVisible(true);lyr_SamdrupJongkhar_15.setVisible(true);lyr_TashiGang_16.setVisible(true);lyr_Thimphu_17.setVisible(true);lyr_Trongsa_18.setVisible(true);lyr_Tsirang_19.setVisible(true);lyr_WangduePhodrang_20.setVisible(true);lyr_TashiYangtse_21.setVisible(true);lyr_Zhemganag_22.setVisible(true);lyr_ZhemgangYabilaptsaHospital_23.setVisible(true);lyr_TashiYangtseYangtseHospital_24.setVisible(true);lyr_WangduePhodrangArmyHospital_25.setVisible(true);lyr_TsirangDamphuHospital_26.setVisible(true);lyr_TrongsaTrongsaHospital_27.setVisible(true);lyr_TrashiGangTashiGangHospital_28.setVisible(true);lyr_ThimphuJDWNRH_29.setVisible(true);lyr_SarpangGelephuRegionalHospital_30.setVisible(true);lyr_SamtseSamtseHospital_31.setVisible(true);lyr_SamdrupJongkharDeothangMilitaryHospital_32.setVisible(true);lyr_PunakhaPunakhaHospital_33.setVisible(true);lyr_PemaGatshelPemaGatshelHospital_34.setVisible(true);lyr_ParoParoHospital_35.setVisible(true);lyr_MongarMongarRegionalReferralHospital_36.setVisible(true);lyr_LhuentseLhuentseHospital_37.setVisible(true);lyr_DaganaDagapelaHospital_38.setVisible(true);lyr_ChhukhaPhuentsholingHospital_39.setVisible(true);lyr_HaaMilitaryHospitalIMTART_40.setVisible(true);lyr_GasaGasaHospital_41.setVisible(true);lyr_BumthangWangdiCholing_42.setVisible(true);lyr_RoadsofBhutan_43.setVisible(true);
var layersList = [group_BaseMaps,group_Distancem,group_HospitalsinBhutan,lyr_RoadsofBhutan_43];
lyr_Bumthang_3.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Chhukha_4.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Dagana_5.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Gasa_6.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Haa_7.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Lhuentse_8.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Mongar_9.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Paro_10.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_PemaGatshel_11.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Punakha_12.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Samtse_13.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Sarpang_14.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_SamdrupJongkhar_15.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_TashiGang_16.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Thimphu_17.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Trongsa_18.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Tsirang_19.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_WangduePhodrang_20.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_TashiYangtse_21.set('fieldAliases', {'fid': 'fid', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_Zhemganag_22.set('fieldAliases', {'fid': 'fid', 'H_Center': 'H_Center', 'Dzongkhag': 'Dzongkhag', 'distance': 'distance', });
lyr_ZhemgangYabilaptsaHospital_23.set('fieldAliases', {'Image': 'Image', });
lyr_TashiYangtseYangtseHospital_24.set('fieldAliases', {'Image': 'Image', });
lyr_WangduePhodrangArmyHospital_25.set('fieldAliases', {'Image': 'Image', });
lyr_TsirangDamphuHospital_26.set('fieldAliases', {'Image': 'Image', });
lyr_TrongsaTrongsaHospital_27.set('fieldAliases', {'Image': 'Image', });
lyr_TrashiGangTashiGangHospital_28.set('fieldAliases', {'Image': 'Image', });
lyr_ThimphuJDWNRH_29.set('fieldAliases', {'Image': 'Image', });
lyr_SarpangGelephuRegionalHospital_30.set('fieldAliases', {'Image': 'Image', });
lyr_SamtseSamtseHospital_31.set('fieldAliases', {'Image': 'Image', });
lyr_SamdrupJongkharDeothangMilitaryHospital_32.set('fieldAliases', {'Image': 'Image', });
lyr_PunakhaPunakhaHospital_33.set('fieldAliases', {'Image': 'Image', });
lyr_PemaGatshelPemaGatshelHospital_34.set('fieldAliases', {'Image': 'Image', });
lyr_ParoParoHospital_35.set('fieldAliases', {'Image': 'Image', });
lyr_MongarMongarRegionalReferralHospital_36.set('fieldAliases', {'Image': 'Image', });
lyr_LhuentseLhuentseHospital_37.set('fieldAliases', {'Image': 'Image', });
lyr_DaganaDagapelaHospital_38.set('fieldAliases', {'Image': 'Image', });
lyr_ChhukhaPhuentsholingHospital_39.set('fieldAliases', {'Image': 'Image', });
lyr_HaaMilitaryHospitalIMTART_40.set('fieldAliases', {'Image': 'Image', });
lyr_GasaGasaHospital_41.set('fieldAliases', {'Image': 'Image', });
lyr_BumthangWangdiCholing_42.set('fieldAliases', {'Image': 'Image', });
lyr_RoadsofBhutan_43.set('fieldAliases', {'id_0': 'id_0', 'gewog': 'gewog', 'surfacetyp': 'surfacetyp', 'length': 'length', 'sec_name': 'sec_name', });
lyr_Bumthang_3.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Chhukha_4.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Dagana_5.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Gasa_6.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Haa_7.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Lhuentse_8.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Mongar_9.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Paro_10.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_PemaGatshel_11.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Punakha_12.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Samtse_13.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Sarpang_14.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_SamdrupJongkhar_15.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_TashiGang_16.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Thimphu_17.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Trongsa_18.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Tsirang_19.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_WangduePhodrang_20.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_TashiYangtse_21.set('fieldImages', {'fid': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_Zhemganag_22.set('fieldImages', {'fid': 'TextEdit', 'H_Center': 'TextEdit', 'Dzongkhag': 'TextEdit', 'distance': 'TextEdit', });
lyr_ZhemgangYabilaptsaHospital_23.set('fieldImages', {'Image': 'ExternalResource', });
lyr_TashiYangtseYangtseHospital_24.set('fieldImages', {'Image': 'ExternalResource', });
lyr_WangduePhodrangArmyHospital_25.set('fieldImages', {'Image': 'ExternalResource', });
lyr_TsirangDamphuHospital_26.set('fieldImages', {'Image': 'ExternalResource', });
lyr_TrongsaTrongsaHospital_27.set('fieldImages', {'Image': 'ExternalResource', });
lyr_TrashiGangTashiGangHospital_28.set('fieldImages', {'Image': 'ExternalResource', });
lyr_ThimphuJDWNRH_29.set('fieldImages', {'Image': 'ExternalResource', });
lyr_SarpangGelephuRegionalHospital_30.set('fieldImages', {'Image': 'ExternalResource', });
lyr_SamtseSamtseHospital_31.set('fieldImages', {'Image': 'ExternalResource', });
lyr_SamdrupJongkharDeothangMilitaryHospital_32.set('fieldImages', {'Image': 'ExternalResource', });
lyr_PunakhaPunakhaHospital_33.set('fieldImages', {'Image': 'ExternalResource', });
lyr_PemaGatshelPemaGatshelHospital_34.set('fieldImages', {'Image': 'ExternalResource', });
lyr_ParoParoHospital_35.set('fieldImages', {'Image': 'ExternalResource', });
lyr_MongarMongarRegionalReferralHospital_36.set('fieldImages', {'Image': 'ExternalResource', });
lyr_LhuentseLhuentseHospital_37.set('fieldImages', {'Image': 'ExternalResource', });
lyr_DaganaDagapelaHospital_38.set('fieldImages', {'Image': 'ExternalResource', });
lyr_ChhukhaPhuentsholingHospital_39.set('fieldImages', {'Image': 'ExternalResource', });
lyr_HaaMilitaryHospitalIMTART_40.set('fieldImages', {'Image': 'ExternalResource', });
lyr_GasaGasaHospital_41.set('fieldImages', {'Image': 'ExternalResource', });
lyr_BumthangWangdiCholing_42.set('fieldImages', {'Image': 'ExternalResource', });
lyr_RoadsofBhutan_43.set('fieldImages', {'id_0': 'TextEdit', 'gewog': 'TextEdit', 'surfacetyp': 'TextEdit', 'length': 'TextEdit', 'sec_name': 'TextEdit', });
lyr_Bumthang_3.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Chhukha_4.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Dagana_5.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Gasa_6.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'inline label - visible with data', 'distance': 'header label - visible with data', });
lyr_Haa_7.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Lhuentse_8.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Mongar_9.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Paro_10.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_PemaGatshel_11.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Punakha_12.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Samtse_13.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Sarpang_14.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_SamdrupJongkhar_15.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_TashiGang_16.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Thimphu_17.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Trongsa_18.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Tsirang_19.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_WangduePhodrang_20.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_TashiYangtse_21.set('fieldLabels', {'fid': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_Zhemganag_22.set('fieldLabels', {'fid': 'hidden field', 'H_Center': 'hidden field', 'Dzongkhag': 'hidden field', 'distance': 'header label - visible with data', });
lyr_ZhemgangYabilaptsaHospital_23.set('fieldLabels', {'Image': 'inline label - visible with data', });
lyr_TashiYangtseYangtseHospital_24.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_WangduePhodrangArmyHospital_25.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_TsirangDamphuHospital_26.set('fieldLabels', {'Image': 'inline label - visible with data', });
lyr_TrongsaTrongsaHospital_27.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_TrashiGangTashiGangHospital_28.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_ThimphuJDWNRH_29.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_SarpangGelephuRegionalHospital_30.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_SamtseSamtseHospital_31.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_SamdrupJongkharDeothangMilitaryHospital_32.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_PunakhaPunakhaHospital_33.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_PemaGatshelPemaGatshelHospital_34.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_ParoParoHospital_35.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_MongarMongarRegionalReferralHospital_36.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_LhuentseLhuentseHospital_37.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_DaganaDagapelaHospital_38.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_ChhukhaPhuentsholingHospital_39.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_HaaMilitaryHospitalIMTART_40.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_GasaGasaHospital_41.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_BumthangWangdiCholing_42.set('fieldLabels', {'Image': 'header label - visible with data', });
lyr_RoadsofBhutan_43.set('fieldLabels', {'id_0': 'hidden field', 'gewog': 'hidden field', 'surfacetyp': 'hidden field', 'length': 'hidden field', 'sec_name': 'hidden field', });
lyr_RoadsofBhutan_43.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});