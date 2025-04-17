'use client'

import React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
import PanToolRoundedIcon from '@mui/icons-material/PanToolRounded';

const CanvasToolToggle = () => {
    return (
        <Box sx={{
            backgroundColor:'#2D2D2D',
            borderRadius:'28px',
            padding: '6px',
            display: 'inline-flex'
        }}>
            <ToggleButtonGroup>
                <ToggleButton value="touch" aria-label="Touch Tool">
                    <TouchAppRoundedIcon fontSize="small" sx={{ color: '#209cfc' }} />
                </ToggleButton>
                <ToggleButton value="pan" aria-label="Pan Tool">
                    <PanToolRoundedIcon fontSize="small" sx={{ color: '#209cfc' }} />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}


export default CanvasToolToggle;