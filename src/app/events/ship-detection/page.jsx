'use client';

import React, { useState } from 'react';
import Header from '@/app/components/header';
import Sidebar from '@/app/components/sidebar';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const Map = dynamic(() => import('@/app/components/map'), { ssr: false });

const Matsya = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box sx={{ 
      position: 'relative',
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden'
    }}>
      <Box sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50,
      }}>
        <Header 
          isOpen={isSidebarOpen}
        />
      </Box>

      <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          zIndex: 60,
          width: 250,
          transition: 'transform 1s ease-in-out',
          transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 60,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          transition: 'left 1s ease-in-out',
          backgroundColor: 'black',
        }}
      >
        <Map raster='https://s3.ap-south-1.amazonaws.com/matsya-v0.1/rasters/syn_cog3.tif' geojson="https://s3.ap-south-1.amazonaws.com/matsya-v0.1/vectors/oil_spill.geojson" />
      </Box>
    </Box>
  );
};

export default Matsya;