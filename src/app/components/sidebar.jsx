import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RoomIcon from '@mui/icons-material/Room';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        backgroundColor: '#2B2B2B',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        fontFamily: 'Montserrat, sans-serif',
      }}
    >
      <Box
        sx={{
            position: 'relative',
            height: '24px',
            mb: 2,
        }}
        >
        <IconButton
            size="medium"
            onClick={toggleSidebar}
            sx={{
                position: 'absolute',
                right: -30,
                top: 0,
                backgroundColor: '#2B2B2B',
                border: '2px solid #fff',
                borderRadius: '50%',
                color: '#fff',
                '&:hover': {
                    backgroundColor: '#3a3a3a',
                },
            }}
        >
            <ChevronLeftIcon fontSize="small" />
        </IconButton>
      </Box>


      <Typography
        variant="h5"
        fontWeight="600"
        sx={{
          fontFamily: 'Playfair Display, serif',
          mb: 4,
          letterSpacing: '1px',
          ml: 1,
        }}
      >
        MATSYA
      </Typography>

      <Typography
        variant="caption"
        sx={{ color: '#aaa', mb: 1, ml: 1 }}
      >
        MENU
      </Typography>
      <Divider sx={{ backgroundColor: '#555', mb: 2 }} />

      <List>
        <ListItemButton
          sx={{
            borderRadius: '12px',
            mb: 1,
            px: 2,
            '&:hover': { backgroundColor: '#3a3a3a' },
          }}
        >
          <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Dark Ships"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.9rem',
                fontWeight: 400,
              },
            }}
          />
        </ListItemButton>

        <ListItemButton
          sx={{
            borderRadius: '12px',
            mb: 1,
            px: 2,
            '&:hover': { backgroundColor: '#3a3a3a' },
          }}
        >
          <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>
            <BarChartIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Oil Spill"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.9rem',
                fontWeight: 400,
              },
            }}
          />
        </ListItemButton>

        <ListItemButton
          sx={{
            borderRadius: '8px',
            mb: 1,
            px: 2,
            '&:hover': { backgroundColor: '#3a3a3a' },
          }}
        >
          <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>
            <SatelliteAltIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Wake Detection"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.9rem',
                fontWeight: 400,
              },
            }}
          />
        </ListItemButton>

        <ListItemButton
          sx={{
            borderRadius: '12px',
            mb: 1,
            px: 2,
            '&:hover': { backgroundColor: '#3a3a3a' },
          }}
        >
          <ListItemIcon sx={{ color: '#fff', minWidth: 36 }}>
            <RoomIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="AIS Data"
            sx={{
              '& .MuiTypography-root': {
                fontSize: '0.9rem',
                fontWeight: 400,
              },
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
