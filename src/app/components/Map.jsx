"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import L from "leaflet";
import GeoRasterLayer from "georaster-layer-for-leaflet";
import georaster from "georaster";
import ControlPanel from "./controlPanel";

const position = [0, 0];

const Map = ({ raster, geojson }) => {
  const [geoJSONData, setGeoJSONData] = useState(null);
  const [tiffLayer, setTiffLayer] = useState(null);
  const [rasterBounds, setRasterBounds] = useState(null);

  useEffect(() => {
    const loadGeoJSON = async (url) => {
      try {
        const response = await axios.get(url);
        setGeoJSONData(response.data);
      } catch (error) {
        console.error("Error loading GeoJSON from URL:", error);
      }
    };

    const loadTIFF = async (url) => {
      try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const raster = await georaster(arrayBuffer);

        const layer = new GeoRasterLayer({
          georaster: raster,
          resolution: 384,
          pixelValuesToColorFn: (value) => {
            if (value >= 50 && value < 100) return "#440154"; // deep purple
            if (value >= 100 && value < 125) return "#3b528b"; // dark blue
            if (value >= 125 && value < 150) return "#21918c"; // teal
            if (value >= 150 && value < 175) return "#5ec962"; // green
            if (value >= 175 && value < 200) return "#aadc32"; // lime green
            if (value >= 200 && value < 225) return "#fde725"; // yellow
            if (value >= 225) return "#ffffe5"; // very light yellow (optional extra band)
          },
        });

        setTiffLayer(layer);
        setRasterBounds(layer.getBounds());

        if (geojson) {
          loadGeoJSON(geojson);
        }
      } catch (error) {
        console.error("Error loading TIFF from URL:", error);
      }
    };

    if (raster) {
      loadTIFF(raster);
    }
  }, [raster, geojson]);

  const geoJSONStyle = (feature) => {
    const geometryType = feature.geometry.type;
    if (geometryType === "Point") {
      return {
        radius: 6,
        color: "#1a2d36",
        weight: 2,
        opacity: 1,
      };
    } else if (geometryType === "MultiPolygon" || geometryType === "Polygon") {
      return {
        weight: 2,
        opacity: 1,
        color: "#1a2d36",
      };
    } else if (geometryType === "LineString") {
      return {
        color: "#1a2d36",
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
      zoom={3}
      minZoom={3}
      maxBounds={[
        [-85, -180],
        [85, 180],
      ]}
      maxBoundsViscosity={1.0}
      zoomControl={false}
      style={{ height: "100%", width: "100%", backgroundColor: "black" }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://carto.com/">CARTO</a>'
        noWrap={true}
        maxZoom={20}
      />
      {tiffLayer && <TiffLayer layer={tiffLayer} />}
      {rasterBounds && <RasterBoundary bounds={rasterBounds} />}
      {geoJSONData && (
        <GeoJSON
          data={geoJSONData}
          style={geoJSONStyle}
          pointToLayer={pointToLayer}
        />
      )}
      <ControlPanel bounds={rasterBounds} />
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
    map.flyToBounds(bounds, {
      duration: 4,
      easeLinearity: 0.5,
    });
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
  url: PropTypes.string.isRequired,
};

export default Map;
