'use client';

import React, { useState } from 'react';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const Map = dynamic(() => import('./Map'), { ssr: false });

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <Box sx={{
            position: 'relative',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'                
        }}>
            <Box
                sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                }}
            >
                <Map />
            </Box>

            <Box
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                }}
            >
                <Header />
            </Box>

            <Box sx={{
                position: 'absolute',
                top: 60, 
                left: 0,
                bottom: 0,
                zIndex: 40,
                width: 250,
                transition: 'transform 0.3s ease-in-out',
                transform: isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            }}>
                <Sidebar
                    isOpen={isSidebarOpen}
                    toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
                />
            </Box>
        </Box>
    )
};

export default Dashboard;
