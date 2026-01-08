var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UASRestrictedArea_1 = new ol.format.GeoJSON();
var features_UASRestrictedArea_1 = format_UASRestrictedArea_1.readFeatures(json_UASRestrictedArea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UASRestrictedArea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UASRestrictedArea_1.addFeatures(features_UASRestrictedArea_1);
var lyr_UASRestrictedArea_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UASRestrictedArea_1, 
                style: style_UASRestrictedArea_1,
                popuplayertitle: 'UAS Restricted Area',
                interactive: false,
                title: '<img src="styles/legend/UASRestrictedArea_1.png" /> UAS Restricted Area'
            });
var format_UASProhibitedZones_2 = new ol.format.GeoJSON();
var features_UASProhibitedZones_2 = format_UASProhibitedZones_2.readFeatures(json_UASProhibitedZones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UASProhibitedZones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UASProhibitedZones_2.addFeatures(features_UASProhibitedZones_2);
var lyr_UASProhibitedZones_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UASProhibitedZones_2, 
                style: style_UASProhibitedZones_2,
                popuplayertitle: 'UAS Prohibited Zones',
                interactive: false,
                title: '<img src="styles/legend/UASProhibitedZones_2.png" /> UAS Prohibited Zones'
            });
var format_MilitaryBases_3 = new ol.format.GeoJSON();
var features_MilitaryBases_3 = format_MilitaryBases_3.readFeatures(json_MilitaryBases_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitaryBases_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitaryBases_3.addFeatures(features_MilitaryBases_3);
var lyr_MilitaryBases_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitaryBases_3, 
                style: style_MilitaryBases_3,
                popuplayertitle: 'Military Bases',
                interactive: false,
                title: '<img src="styles/legend/MilitaryBases_3.png" /> Military Bases'
            });
var format_Cemetery_4 = new ol.format.GeoJSON();
var features_Cemetery_4 = format_Cemetery_4.readFeatures(json_Cemetery_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cemetery_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cemetery_4.addFeatures(features_Cemetery_4);
var lyr_Cemetery_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cemetery_4, 
                style: style_Cemetery_4,
                popuplayertitle: 'Cemetery',
                interactive: false,
                title: '<img src="styles/legend/Cemetery_4.png" /> Cemetery'
            });
var format_Universities_5 = new ol.format.GeoJSON();
var features_Universities_5 = format_Universities_5.readFeatures(json_Universities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_5.addFeatures(features_Universities_5);
var lyr_Universities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universities_5, 
                style: style_Universities_5,
                popuplayertitle: 'Universities',
                interactive: false,
                title: '<img src="styles/legend/Universities_5.png" /> Universities'
            });
var format_Schools_6 = new ol.format.GeoJSON();
var features_Schools_6 = format_Schools_6.readFeatures(json_Schools_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_6.addFeatures(features_Schools_6);
var lyr_Schools_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_6, 
                style: style_Schools_6,
                popuplayertitle: 'Schools',
                interactive: false,
                title: '<img src="styles/legend/Schools_6.png" /> Schools'
            });
var format_Doctors_7 = new ol.format.GeoJSON();
var features_Doctors_7 = format_Doctors_7.readFeatures(json_Doctors_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Doctors_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Doctors_7.addFeatures(features_Doctors_7);
var lyr_Doctors_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Doctors_7, 
                style: style_Doctors_7,
                popuplayertitle: 'Doctors',
                interactive: false,
                title: '<img src="styles/legend/Doctors_7.png" /> Doctors'
            });
var format_Hospitals_8 = new ol.format.GeoJSON();
var features_Hospitals_8 = format_Hospitals_8.readFeatures(json_Hospitals_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_8.addFeatures(features_Hospitals_8);
var lyr_Hospitals_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitals_8, 
                style: style_Hospitals_8,
                popuplayertitle: 'Hospitals',
                interactive: false,
                title: '<img src="styles/legend/Hospitals_8.png" /> Hospitals'
            });
var format_Ports_9 = new ol.format.GeoJSON();
var features_Ports_9 = format_Ports_9.readFeatures(json_Ports_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ports_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ports_9.addFeatures(features_Ports_9);
var lyr_Ports_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ports_9, 
                style: style_Ports_9,
                popuplayertitle: 'Ports',
                interactive: false,
                title: '<img src="styles/legend/Ports_9.png" /> Ports'
            });
var format_Airports_10 = new ol.format.GeoJSON();
var features_Airports_10 = format_Airports_10.readFeatures(json_Airports_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airports_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airports_10.addFeatures(features_Airports_10);
var lyr_Airports_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airports_10, 
                style: style_Airports_10,
                popuplayertitle: 'Airports',
                interactive: false,
                title: '<img src="styles/legend/Airports_10.png" /> Airports'
            });

lyr_OSMStandard_0.setVisible(true);lyr_UASRestrictedArea_1.setVisible(true);lyr_UASProhibitedZones_2.setVisible(true);lyr_MilitaryBases_3.setVisible(true);lyr_Cemetery_4.setVisible(true);lyr_Universities_5.setVisible(true);lyr_Schools_6.setVisible(true);lyr_Doctors_7.setVisible(true);lyr_Hospitals_8.setVisible(true);lyr_Ports_9.setVisible(true);lyr_Airports_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UASRestrictedArea_1,lyr_UASProhibitedZones_2,lyr_MilitaryBases_3,lyr_Cemetery_4,lyr_Universities_5,lyr_Schools_6,lyr_Doctors_7,lyr_Hospitals_8,lyr_Ports_9,lyr_Airports_10];
lyr_UASRestrictedArea_1.set('fieldAliases', {'identifier': 'identifier', 'country': 'country', 'name': 'name', 'type': 'type', 'restriction': 'restriction', 'reason': 'reason', 'regulationExemption': 'regulationExemption', 'message': 'message', 'zoneAuthority': 'zoneAuthority', 'applicability': 'applicability', 'circle_center_lon': 'circle_center_lon', 'circle_center_lat': 'circle_center_lat', 'circle_radius_m': 'circle_radius_m', 'uomDimensions': 'uomDimensions', 'lowerLimit': 'lowerLimit', 'lowerVerticalReference': 'lowerVerticalReference', 'upperLimit': 'upperLimit', 'upperVerticalReference': 'upperVerticalReference', 'geometry_index': 'geometry_index', });
lyr_UASProhibitedZones_2.set('fieldAliases', {'fid': 'fid', });
lyr_MilitaryBases_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'locked': 'locked', 'emergency': 'emergency', 'traffic_calming': 'traffic_calming', 'wheelchair': 'wheelchair', 'opening_hours': 'opening_hours', 'horse': 'horse', 'foot': 'foot', 'motor_vehicle': 'motor_vehicle', 'bicycle': 'bicycle', 'noexit': 'noexit', 'barrier': 'barrier', 'maxspeed': 'maxspeed', 'highway': 'highway', 'direction': 'direction', 'military': 'military', 'access': 'access', 'source:url': 'source:url', 'natural': 'natural', 'name:tr': 'name:tr', 'name': 'name', 'fid': 'fid', 'historic': 'historic', 'layer': 'layer', 'path': 'path', });
lyr_Cemetery_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'cemetery': 'cemetery', });
lyr_Universities_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr:housename': 'addr:housename', 'phone': 'phone', 'website': 'website', 'education': 'education', 'operator:type': 'operator:type', 'operator': 'operator', 'name:en': 'name:en', 'name:el': 'name:el', 'branch:en': 'branch:en', 'branch:el': 'branch:el', 'branch': 'branch', 'addr:postcode': 'addr:postcode', 'material': 'material', 'bollard': 'bollard', 'barrier': 'barrier', 'automated': 'automated', 'stop': 'stop', 'highway': 'highway', 'direction': 'direction', 'level': 'level', 'entrance': 'entrance', 'office': 'office', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'traffic_calming': 'traffic_calming', 'name': 'name', 'building': 'building', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'start_date': 'start_date', 'short_name:en': 'short_name:en', 'short_name': 'short_name', 'opening_hours:signed': 'opening_hours:signed', 'check_date:opening_hours': 'check_date:opening_hours', 'name:tr': 'name:tr', 'faculty': 'faculty', 'opening_hours': 'opening_hours', 'email': 'email', 'access': 'access', 'layer': 'layer', 'path': 'path', });
lyr_Schools_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator:type': 'operator:type', 'operator': 'operator', 'mobile': 'mobile', 'grades': 'grades', 'traffic_calming': 'traffic_calming', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'door': 'door', 'wheelchair': 'wheelchair', 'entrance': 'entrance', 'phone': 'phone', 'opening_hours': 'opening_hours', 'email': 'email', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:street': 'addr:street', 'name:tr': 'name:tr', 'access': 'access', 'website': 'website', 'barrier': 'barrier', 'name:en': 'name:en', 'name': 'name', 'fid': 'fid', 'school': 'school', 'survey:date': 'survey:date', 'addr:district': 'addr:district', 'start_date': 'start_date', 'isced:level': 'isced:level', 'width': 'width', 'language:en': 'language:en', 'motor_vehicle': 'motor_vehicle', 'horse': 'horse', 'language:ru': 'language:ru', 'locked': 'locked', 'material': 'material', 'name:prefix': 'name:prefix', 'int_name': 'int_name', 'name:ru': 'name:ru', 'check_date': 'check_date', 'maxwidth:physical': 'maxwidth:physical', 'foot': 'foot', 'bicycle': 'bicycle', 'wikidata': 'wikidata', 'fee': 'fee', 'addr:city': 'addr:city', 'url': 'url', 'name:el': 'name:el', 'description': 'description', 'ref': 'ref', 'name:ro': 'name:ro', 'fax': 'fax', 'layer': 'layer', 'path': 'path', });
lyr_Doctors_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'survey:date': 'survey:date', 'check_date:opening_hours': 'check_date:opening_hours', 'health_specialty:physiotherapy': 'health_specialty:physiotherapy', 'operator:type': 'operator:type', 'health_specialty:pulmonology': 'health_specialty:pulmonology', 'fax': 'fax', 'contact:facebook': 'contact:facebook', 'name:ru': 'name:ru', 'level': 'level', 'reservation': 'reservation', 'addr:unit': 'addr:unit', 'opening_hours:signed': 'opening_hours:signed', 'name:tr': 'name:tr', 'name:hu': 'name:hu', 'internet_access': 'internet_access', 'email': 'email', 'addr:country': 'addr:country', 'name:el': 'name:el', 'int_name': 'int_name', 'wheelchair': 'wheelchair', 'addr:flats': 'addr:flats', 'operator': 'operator', 'alt_name': 'alt_name', 'emergency': 'emergency', 'designation': 'designation', 'contact:phone': 'contact:phone', 'addr:postcode': 'addr:postcode', 'description': 'description', 'check_date': 'check_date', 'website': 'website', 'opening_hours': 'opening_hours', 'name:en': 'name:en', 'postal_code': 'postal_code', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'phone': 'phone', 'healthcare:speciality': 'healthcare:speciality', 'name': 'name', 'healthcare': 'healthcare', 'layer': 'layer', 'path': 'path', });
lyr_Hospitals_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'health_facility:type': 'health_facility:type', 'building': 'building', 'entrance': 'entrance', 'addr:housename': 'addr:housename', 'operator:type': 'operator:type', 'addr:postcode': 'addr:postcode', 'level': 'level', 'healthcare:speciality': 'healthcare:speciality', 'emergency': 'emergency', 'operator': 'operator', 'addr:city': 'addr:city', 'internet_access': 'internet_access', 'highway': 'highway', 'crossing:markings': 'crossing:markings', 'crossing': 'crossing', 'website': 'website', 'opening_hours': 'opening_hours', 'name:en': 'name:en', 'email': 'email', 'contact:facebook': 'contact:facebook', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'phone': 'phone', 'name:tr': 'name:tr', 'name:ru': 'name:ru', 'name': 'name', 'healthcare': 'healthcare', 'fid': 'fid', 'locked': 'locked', 'addr:unit': 'addr:unit', 'name:de': 'name:de', 'designation': 'designation', 'check_date': 'check_date', 'wheelchair': 'wheelchair', 'start_date': 'start_date', 'fax': 'fax', 'barrier': 'barrier', 'name:el': 'name:el', 'layer': 'layer', 'path': 'path', });
lyr_Ports_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'name:en': 'name:en', 'name': 'name', 'barrier': 'barrier', 'access': 'access', });
lyr_Airports_10.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'barrier': 'barrier', 'access': 'access', 'aeroway': 'aeroway', 'level': 'level', 'door:wings': 'door:wings', 'door:opening': 'door:opening', 'door': 'door', 'name': 'name', 'entrance': 'entrance', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'locked': 'locked', 'layer': 'layer', 'path': 'path', });
lyr_UASRestrictedArea_1.set('fieldImages', {'identifier': 'TextEdit', 'country': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'restriction': 'TextEdit', 'reason': 'List', 'regulationExemption': 'TextEdit', 'message': 'TextEdit', 'zoneAuthority': 'List', 'applicability': 'List', 'circle_center_lon': 'TextEdit', 'circle_center_lat': 'TextEdit', 'circle_radius_m': 'TextEdit', 'uomDimensions': 'TextEdit', 'lowerLimit': 'Range', 'lowerVerticalReference': 'TextEdit', 'upperLimit': 'Range', 'upperVerticalReference': 'TextEdit', 'geometry_index': 'Range', });
lyr_UASProhibitedZones_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_MilitaryBases_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'landuse': 'TextEdit', 'locked': 'TextEdit', 'emergency': 'TextEdit', 'traffic_calming': 'TextEdit', 'wheelchair': 'TextEdit', 'opening_hours': 'TextEdit', 'horse': 'TextEdit', 'foot': 'TextEdit', 'motor_vehicle': 'TextEdit', 'bicycle': 'TextEdit', 'noexit': 'TextEdit', 'barrier': 'TextEdit', 'maxspeed': 'TextEdit', 'highway': 'TextEdit', 'direction': 'TextEdit', 'military': 'TextEdit', 'access': 'TextEdit', 'source:url': 'TextEdit', 'natural': 'TextEdit', 'name:tr': 'TextEdit', 'name': 'TextEdit', 'fid': 'TextEdit', 'historic': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Cemetery_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'cemetery': 'TextEdit', });
lyr_Universities_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr:housename': 'TextEdit', 'phone': 'TextEdit', 'website': 'TextEdit', 'education': 'TextEdit', 'operator:type': 'TextEdit', 'operator': 'TextEdit', 'name:en': 'TextEdit', 'name:el': 'TextEdit', 'branch:en': 'TextEdit', 'branch:el': 'TextEdit', 'branch': 'TextEdit', 'addr:postcode': 'TextEdit', 'material': 'TextEdit', 'bollard': 'TextEdit', 'barrier': 'TextEdit', 'automated': 'TextEdit', 'stop': 'TextEdit', 'highway': 'TextEdit', 'direction': 'TextEdit', 'level': 'TextEdit', 'entrance': 'TextEdit', 'office': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'traffic_calming': 'TextEdit', 'name': 'TextEdit', 'building': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'start_date': 'TextEdit', 'short_name:en': 'TextEdit', 'short_name': 'TextEdit', 'opening_hours:signed': 'TextEdit', 'check_date:opening_hours': 'TextEdit', 'name:tr': 'TextEdit', 'faculty': 'TextEdit', 'opening_hours': 'TextEdit', 'email': 'TextEdit', 'access': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Schools_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'operator:type': 'TextEdit', 'operator': 'TextEdit', 'mobile': 'TextEdit', 'grades': 'TextEdit', 'traffic_calming': 'TextEdit', 'highway': 'TextEdit', 'crossing:markings': 'TextEdit', 'crossing': 'TextEdit', 'door': 'TextEdit', 'wheelchair': 'TextEdit', 'entrance': 'TextEdit', 'phone': 'TextEdit', 'opening_hours': 'TextEdit', 'email': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:street': 'TextEdit', 'name:tr': 'TextEdit', 'access': 'TextEdit', 'website': 'TextEdit', 'barrier': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'fid': 'TextEdit', 'school': 'TextEdit', 'survey:date': 'TextEdit', 'addr:district': 'TextEdit', 'start_date': 'TextEdit', 'isced:level': 'TextEdit', 'width': 'TextEdit', 'language:en': 'TextEdit', 'motor_vehicle': 'TextEdit', 'horse': 'TextEdit', 'language:ru': 'TextEdit', 'locked': 'TextEdit', 'material': 'TextEdit', 'name:prefix': 'TextEdit', 'int_name': 'TextEdit', 'name:ru': 'TextEdit', 'check_date': 'TextEdit', 'maxwidth:physical': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'wikidata': 'TextEdit', 'fee': 'TextEdit', 'addr:city': 'TextEdit', 'url': 'TextEdit', 'name:el': 'TextEdit', 'description': 'TextEdit', 'ref': 'TextEdit', 'name:ro': 'TextEdit', 'fax': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Doctors_7.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'survey:date': 'TextEdit', 'check_date:opening_hours': 'TextEdit', 'health_specialty:physiotherapy': 'TextEdit', 'operator:type': 'TextEdit', 'health_specialty:pulmonology': 'TextEdit', 'fax': 'TextEdit', 'contact:facebook': 'TextEdit', 'name:ru': 'TextEdit', 'level': 'TextEdit', 'reservation': 'TextEdit', 'addr:unit': 'TextEdit', 'opening_hours:signed': 'TextEdit', 'name:tr': 'TextEdit', 'name:hu': 'TextEdit', 'internet_access': 'TextEdit', 'email': 'TextEdit', 'addr:country': 'TextEdit', 'name:el': 'TextEdit', 'int_name': 'TextEdit', 'wheelchair': 'TextEdit', 'addr:flats': 'TextEdit', 'operator': 'TextEdit', 'alt_name': 'TextEdit', 'emergency': 'TextEdit', 'designation': 'TextEdit', 'contact:phone': 'TextEdit', 'addr:postcode': 'TextEdit', 'description': 'TextEdit', 'check_date': 'TextEdit', 'website': 'TextEdit', 'opening_hours': 'TextEdit', 'name:en': 'TextEdit', 'postal_code': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'phone': 'TextEdit', 'healthcare:speciality': 'TextEdit', 'name': 'TextEdit', 'healthcare': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Hospitals_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'health_facility:type': 'TextEdit', 'building': 'TextEdit', 'entrance': 'TextEdit', 'addr:housename': 'TextEdit', 'operator:type': 'TextEdit', 'addr:postcode': 'TextEdit', 'level': 'TextEdit', 'healthcare:speciality': 'TextEdit', 'emergency': 'TextEdit', 'operator': 'TextEdit', 'addr:city': 'TextEdit', 'internet_access': 'TextEdit', 'highway': 'TextEdit', 'crossing:markings': 'TextEdit', 'crossing': 'TextEdit', 'website': 'TextEdit', 'opening_hours': 'TextEdit', 'name:en': 'TextEdit', 'email': 'TextEdit', 'contact:facebook': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'phone': 'TextEdit', 'name:tr': 'TextEdit', 'name:ru': 'TextEdit', 'name': 'TextEdit', 'healthcare': 'TextEdit', 'fid': 'TextEdit', 'locked': 'TextEdit', 'addr:unit': 'TextEdit', 'name:de': 'TextEdit', 'designation': 'TextEdit', 'check_date': 'TextEdit', 'wheelchair': 'TextEdit', 'start_date': 'TextEdit', 'fax': 'TextEdit', 'barrier': 'TextEdit', 'name:el': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ports_9.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'tourism': 'TextEdit', 'name:en': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', });
lyr_Airports_10.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'barrier': 'TextEdit', 'access': 'TextEdit', 'aeroway': 'TextEdit', 'level': 'TextEdit', 'door:wings': 'TextEdit', 'door:opening': 'TextEdit', 'door': 'TextEdit', 'name': 'TextEdit', 'entrance': 'TextEdit', 'motorcar': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'locked': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_UASRestrictedArea_1.set('fieldLabels', {'identifier': 'no label', 'country': 'no label', 'name': 'no label', 'type': 'no label', 'restriction': 'no label', 'reason': 'no label', 'regulationExemption': 'no label', 'message': 'no label', 'zoneAuthority': 'no label', 'applicability': 'no label', 'circle_center_lon': 'no label', 'circle_center_lat': 'no label', 'circle_radius_m': 'no label', 'uomDimensions': 'no label', 'lowerLimit': 'no label', 'lowerVerticalReference': 'no label', 'upperLimit': 'no label', 'upperVerticalReference': 'no label', 'geometry_index': 'no label', });
lyr_UASProhibitedZones_2.set('fieldLabels', {'fid': 'no label', });
lyr_MilitaryBases_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'locked': 'no label', 'emergency': 'no label', 'traffic_calming': 'no label', 'wheelchair': 'no label', 'opening_hours': 'no label', 'horse': 'no label', 'foot': 'no label', 'motor_vehicle': 'no label', 'bicycle': 'no label', 'noexit': 'no label', 'barrier': 'no label', 'maxspeed': 'no label', 'highway': 'no label', 'direction': 'no label', 'military': 'no label', 'access': 'no label', 'source:url': 'no label', 'natural': 'no label', 'name:tr': 'no label', 'name': 'no label', 'fid': 'no label', 'historic': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Cemetery_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'cemetery': 'no label', });
lyr_Universities_5.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'addr:housename': 'no label', 'phone': 'no label', 'website': 'no label', 'education': 'no label', 'operator:type': 'no label', 'operator': 'no label', 'name:en': 'no label', 'name:el': 'no label', 'branch:en': 'no label', 'branch:el': 'no label', 'branch': 'no label', 'addr:postcode': 'no label', 'material': 'no label', 'bollard': 'no label', 'barrier': 'no label', 'automated': 'no label', 'stop': 'no label', 'highway': 'no label', 'direction': 'no label', 'level': 'no label', 'entrance': 'no label', 'office': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'traffic_calming': 'no label', 'name': 'no label', 'building': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'start_date': 'no label', 'short_name:en': 'no label', 'short_name': 'no label', 'opening_hours:signed': 'no label', 'check_date:opening_hours': 'no label', 'name:tr': 'no label', 'faculty': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'access': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Schools_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'operator:type': 'no label', 'operator': 'no label', 'mobile': 'no label', 'grades': 'no label', 'traffic_calming': 'no label', 'highway': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'door': 'no label', 'wheelchair': 'no label', 'entrance': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:street': 'no label', 'name:tr': 'no label', 'access': 'no label', 'website': 'no label', 'barrier': 'no label', 'name:en': 'no label', 'name': 'no label', 'fid': 'no label', 'school': 'no label', 'survey:date': 'no label', 'addr:district': 'no label', 'start_date': 'no label', 'isced:level': 'no label', 'width': 'no label', 'language:en': 'no label', 'motor_vehicle': 'no label', 'horse': 'no label', 'language:ru': 'no label', 'locked': 'no label', 'material': 'no label', 'name:prefix': 'no label', 'int_name': 'no label', 'name:ru': 'no label', 'check_date': 'no label', 'maxwidth:physical': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'wikidata': 'no label', 'fee': 'no label', 'addr:city': 'no label', 'url': 'no label', 'name:el': 'no label', 'description': 'no label', 'ref': 'no label', 'name:ro': 'no label', 'fax': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Doctors_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'survey:date': 'no label', 'check_date:opening_hours': 'no label', 'health_specialty:physiotherapy': 'no label', 'operator:type': 'no label', 'health_specialty:pulmonology': 'no label', 'fax': 'no label', 'contact:facebook': 'no label', 'name:ru': 'no label', 'level': 'no label', 'reservation': 'no label', 'addr:unit': 'no label', 'opening_hours:signed': 'no label', 'name:tr': 'no label', 'name:hu': 'no label', 'internet_access': 'no label', 'email': 'no label', 'addr:country': 'no label', 'name:el': 'no label', 'int_name': 'no label', 'wheelchair': 'no label', 'addr:flats': 'no label', 'operator': 'no label', 'alt_name': 'no label', 'emergency': 'no label', 'designation': 'no label', 'contact:phone': 'no label', 'addr:postcode': 'no label', 'description': 'no label', 'check_date': 'no label', 'website': 'no label', 'opening_hours': 'no label', 'name:en': 'no label', 'postal_code': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'phone': 'no label', 'healthcare:speciality': 'no label', 'name': 'no label', 'healthcare': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Hospitals_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'health_facility:type': 'no label', 'building': 'no label', 'entrance': 'no label', 'addr:housename': 'no label', 'operator:type': 'no label', 'addr:postcode': 'no label', 'level': 'no label', 'healthcare:speciality': 'no label', 'emergency': 'no label', 'operator': 'no label', 'addr:city': 'no label', 'internet_access': 'no label', 'highway': 'no label', 'crossing:markings': 'no label', 'crossing': 'no label', 'website': 'no label', 'opening_hours': 'no label', 'name:en': 'no label', 'email': 'no label', 'contact:facebook': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'phone': 'no label', 'name:tr': 'no label', 'name:ru': 'no label', 'name': 'no label', 'healthcare': 'no label', 'fid': 'no label', 'locked': 'no label', 'addr:unit': 'no label', 'name:de': 'no label', 'designation': 'no label', 'check_date': 'no label', 'wheelchair': 'no label', 'start_date': 'no label', 'fax': 'no label', 'barrier': 'no label', 'name:el': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ports_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'name:en': 'no label', 'name': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_Airports_10.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'barrier': 'no label', 'access': 'no label', 'aeroway': 'no label', 'level': 'no label', 'door:wings': 'no label', 'door:opening': 'no label', 'door': 'no label', 'name': 'no label', 'entrance': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'locked': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Airports_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});