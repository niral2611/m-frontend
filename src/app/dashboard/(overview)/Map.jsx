import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [36.778259, -119.417931]

const Map = () => {
  return (
    <MapContainer center={position} zoom={6} minZoom={3} maxBounds={[
        [-85, -180],
        [85, 180]     
      ]}
      maxBoundsViscosity={1.0} style={{ height: '100vh', backgroundColor: 'black' }}>
        <TileLayer
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            noWrap='false'
            maxZoom={20}
        />
    </MapContainer>
  );
};

export default Map;


