'use client';

import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import L from 'leaflet';
import GeoRasterLayer from 'georaster-layer-for-leaflet';
import georaster from 'georaster';

const position = [36.778259, -119.417931];

const Map = ({ url, file }) => {
  const [geoJSONData, setGeoJSONData] = useState(null);
  const [tiffLayer, setTiffLayer] = useState(null);
  const [rasterBounds, setRasterBounds] = useState(null);

  useEffect(() => {
    const loadGeoJSON = async (file) => {
      try {
        const response = await fetch(file);
        const data = await response.json();
        setGeoJSONData(data);
      } catch (error) {
        console.error('Error loading GeoJSON from file:', error);
      }
    };

    const loadTIFF = async (file) => {
      try {
        const response = await fetch(file);
        const arrayBuffer = await response.arrayBuffer();
        const raster = await georaster(arrayBuffer);

        const layer = new GeoRasterLayer({
          georaster: raster,
          opacity: 0.5,
          resolution: 256,
        });

        setTiffLayer(layer);
        setRasterBounds(layer.getBounds());
      } catch (error) {
        console.error('Error loading TIFF file:', error);
      }
    };

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
      if (file.endsWith('.geojson')) {
        loadGeoJSON(file);
      } else if (file.endsWith('.tif')) {
        loadTIFF(file);
      } else {
        console.log('Unsupported file type');
      }
    } else {
      setGeoJSONData(null);
      console.log('No URL or file provided, GeoJSON not loaded');
    }
  }, [url, file]);

  const geoJSONStyle = (feature) => {
    const geometryType = feature.geometry.type;
    if (geometryType === 'Point') {
      return {
        radius: 6,
        color: '#fff092',
        weight: 2,
        opacity: 1,
        fillColor: '#fff092',
        fillOpacity: 0.7,
      };
    } else if (geometryType === 'MultiPolygon' || geometryType === 'Polygon') {
      return {
        fillColor: '#fff092',
        weight: 10,
        opacity: 0.4,
        color: '#fff092',
        fillOpacity: 0.1,
      };
    } else if (geometryType === 'LineString') {
      return {
        color: '#fff092',
        weight: 2,
        opacity: 1,
      };
    }
  };

  const pointToLayer = (feature, latlng) => {
    return L.circleMarker(latlng, geoJSONStyle(feature));
  };

  return (
    <MapContainer
      center={position}
      zoom={6}
      minZoom={3}
      maxBounds={[
        [-85, -180],
        [85, 180],
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
      {geoJSONData && (
        <GeoJSON
          data={geoJSONData}
          style={geoJSONStyle}
          pointToLayer={pointToLayer}
        />
      )}
      {tiffLayer && <TiffLayer layer={tiffLayer} />}
      {rasterBounds && <RasterBoundary bounds={rasterBounds} />}
    </MapContainer>
  );
};

const TiffLayer = ({ layer }) => {
  const map = useMap();

  useEffect(() => {
    if (layer) {
      layer.addTo(map);
    }
    return () => {
      if (layer) {
        map.removeLayer(layer);
      }
    };
  }, [layer, map]);

  return null;
};

const RasterBoundary = ({ bounds }) => {
  const map = useMap();

  useEffect(() => {
    const rectangle = L.rectangle(bounds, {
      color: '#fff092',
      weight: 2,
      fillOpacity: 0,
    }).addTo(map);

    map.fitBounds(bounds);

    return () => {
      map.removeLayer(rectangle);
    };
  }, [bounds, map]);

  return null;
};

TiffLayer.propTypes = {
  layer: PropTypes.object,
};

RasterBoundary.propTypes = {
  bounds: PropTypes.object,
};

Map.propTypes = {
  url: PropTypes.string,
  file: PropTypes.string,
};

export default Map;