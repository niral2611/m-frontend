import React from "react";
import { Box, Avatar, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '10px',
                padding: '10px',
            }}>
                <img
                    alt="PierSight Logo"
                    src="/assets/piersight_logo.jpg"
                    style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '100%' 
                    }}
                />
                <Typography
                    sx={{
                        marginLeft: '10px'
                    }}
                >
                    PierSight Space
                </Typography>
            </Box>
            
        </Box>
    )
}

export default Header;