'use client';

import React from 'react';
import Header from '../../components/header';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const Map = dynamic(() => import('./Map'), { ssr: false });

const Dashboard = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            overflow: 'hidden'
        }}>
            <Box sx={{
                flexShrink: 0,
                zIndex: 10,
                position: 'relative',
                boxShadow: 1
            }} >
                <Header />
            </Box>
            <Box sx={{ 
                flexGrow: 1, 
                width: '100%',
                overflow: 'hidden'
            }}>
                <Map />
            </Box>
        </Box>
    );
};

export default Dashboard;
