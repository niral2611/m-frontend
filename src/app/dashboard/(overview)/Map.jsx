'use client';

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Box } from '@mui/material';

const Map = () => {
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <MapContainer
                center={[18.5204, 73.8567]} // You can change this to [20.5937, 78.9629] for central India
                zoom={5}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/">CARTO</a>'
                />
            </MapContainer>
        </Box>
    );
};

export default Map;
