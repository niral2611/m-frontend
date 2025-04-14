'use client';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';


const position = [36.778259, -119.417931]


const Map = ({ url, file }) => {
  const [geoJSONData, setGeoJSONData] = useState(null);

  useEffect(() => {
    setGeoJSONData(null);

    if (url) {
      const fetchGeoJSONData = async () => {
        try {
          const response = await axios.get(url);
          setGeoJSONData(response.data);
        } catch (error) {
          console.error('Error fetching GeoJSON data:', error);
        }
      };
      fetchGeoJSONData();
    } else if (file) {
      const fetchFileData = async () => {
        try {
          const response = await fetch(file);
          const data = await response.json();
          setGeoJSONData(data);
        } catch (error) {
          console.error('Error loading GeoJSON from file:', error);
        }
      };
      fetchFileData();
    } else {
      setGeoJSONData(null); 
      console.log('No URL provided, GeoJSON not loaded');
    }
  }, [url, file]);

  const geoJSONStyle = (feature) => {
    let goemetryType = feature.geometry.type
    console.log(goemetryType)
    if(goemetryType=='Point') {
      return {
        radius: 6,
        color: '#fff092',
        weight: 2,
        opacity: 1,
        fillColor: '#fff092',
        fillOpacity: 0.7,
      }
    }
    else if(goemetryType=='MultiPolygon' || goemetryType=='Polygon') {
      return {
        fillColor: '#fff092',
        weight: 10,
        opacity: 0.4,
        color: '#fff092',
        fillOpacity: 0.1,
      }
    }
    else if(goemetryType=='LineString') {
      return {
        color: '#fff092',
        weight: 2,
        opacity: 1,
      }
    }
  };

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, geoJSONStyle(feature));
  }

  return (
    <MapContainer
      center={position}
      zoom={6}
      minZoom={3}
      maxBounds={[
        [-85, -180],
        [85, 180]
      ]}
      maxBoundsViscosity={1.0}
      style={{ height: '100%', width: '100%', backgroundColor: 'black' }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://carto.com/">CARTO</a>'
        noWrap={true}
        maxZoom={20}
      />
      {geoJSONData && <GeoJSON data={geoJSONData} style={geoJSONStyle} />}
    </MapContainer>
  );
};


Map.propTypes = {
  url: PropTypes.string, 
  file: PropTypes.string,
};

export default Map;