'use client';

import React from 'react';
import Header from '../../components/header';
import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const Map = dynamic(() => import('./Map'), { ssr: false });

const Dashboard = () => {
    return (
        <Box>
            <Header />
            <Box sx={{ height: 'calc(100vh - 64px)', width: '100%' }}>
                <Map />
            </Box>
        </Box>
    );
};

export default Dashboard;
