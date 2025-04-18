'use Client';

import React from 'react';
import { useMap } from 'react-leaflet';
import { Box, IconButton } from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import CenterFocusStrongRoundedIcon from '@mui/icons-material/CenterFocusStrongRounded';
import { bounds } from 'leaflet';
import PropTypes from 'prop-types';

const ControlPanel = ({ bounds }) => {
    const map = useMap();
    
    const zoomIn = () => map.zoomIn();
    const zoomOut = () => map.zoomOut();
    const recenterBound = () => {
        if(bounds){
            map.flyToBounds(bounds, {
                duration: 4,
                easeLinearity: 0.5,
            });
        }
    }
    
    return (
        <Box 
            onClick={recenterBound}
            sx={{
                position: 'absolute',
                bottom: 30,
                right: 10,
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '4px',
                overflow: 'hidden',
            }}
        >

            <IconButton sx={{
                backgroundColor: '#2c2c2c',
                border: '1px solid #ccc',
                borderRadius: '7px',
                margin: '5px',
                padding: '4px',
                '&:hover': {
                    backgroundColor: '#000',
                },
            }}>
                <CenterFocusStrongRoundedIcon fontSize='small' sx={{color: '#ccc'}}/>
            </IconButton>
            <IconButton
                onClick={zoomIn}
                sx={{
                    backgroundColor: '#2c2c2c',
                    border: '1px solid #ccc',
                    borderRadius: '7px',
                    margin: '5px',
                    padding: '4px',
                    '&:hover': {
                        backgroundColor: '#000',
                    },
                }}
            >
                <AddRoundedIcon fontSize="small" sx={{ color: '#ccc' }} />
            </IconButton>

            <IconButton
                onClick={zoomOut}
                sx={{
                    backgroundColor: '#2c2c2c',
                    border: '1px solid #ccc',
                    borderRadius: '7px',
                    margin: '5px',
                    padding: '4px',
                    '&:hover': {
                        backgroundColor: '#000',
                    },
                }}
            >
                <RemoveRoundedIcon fontSize="small" sx={{ color: '#ccc' }} />
            </IconButton>
        </Box>
    );
}

ControlPanel.propTypes = {
    bounds: PropTypes.object,
}

export default ControlPanel;