'use client';

import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const Map = dynamic(() => import('./components/map'), { ssr: false });

const MatsyaHub = () => {
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
          left: isSidebarOpen ? 250 : 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          transition: 'left 1s ease-in-out',
          backgroundColor: 'black',
        }}
      >
        <Map />
      </Box>
    </Box>
  );
};

export default MatsyaHub;