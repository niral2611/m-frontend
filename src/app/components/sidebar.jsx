import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Link
} from '@mui/material';
import { useRouter } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RoomIcon from '@mui/icons-material/Room';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  const handleDarkShipsClick = () => {
    router.push('/events/dark-ships');
  };

  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        backgroundColor: '#2C2C2C',
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
            right: -33,
            top: isOpen ? 0 : '10px',
            transition: 'transform 1s ease-in-out',
            transform: isOpen ? 'translateY(0)' : 'translateY(1050%)',
            width: 40,
            length: 25,
            padding: 0,
            backgroundColor: '#2C2C2C',
            border: '2px solid #fff',
            borderRadius: '50%',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#3a3a3a',
            },
          }}
        >
          <ChevronLeftIcon fontSize="large" />
        </IconButton>
      </Box>
      
      <Link href="http://localhost:3000/" underline="none" color="#fff" >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{
            fontFamily: 'Playfair Display, serif',
            mb: 4,
            letterSpacing: '1px',
            ml: 1,
            fontSize: '2rem'
          }}
        >
          MATSYA
        </Typography>
      </Link>

      <Typography
        variant="caption"
        sx={{ color: '#aaa', mb: 1, ml: 1 }}
      >
        MENU
      </Typography>
      <Divider sx={{ backgroundColor: '#555', mb: 2 }} />

      <Button
        variant="contained"
        startIcon={<DashboardIcon />}
        onClick={handleDarkShipsClick} 
        sx={{
          backgroundColor: '#3a3a3a',
          color: '#fff',
          borderRadius: '12px',
          mb: 1,
          px: 2,
          '&:hover': { backgroundColor: '#4a4a4a' },
          textTransform: 'none',
          justifyContent: 'flex-start',
        }}
      >
        Dark Ships
      </Button>

      <Button
        variant="contained"
        startIcon={<BarChartIcon />}
        sx={{
          backgroundColor: '#3a3a3a',
          color: '#fff',
          borderRadius: '12px',
          mb: 1,
          px: 2,
          '&:hover': { backgroundColor: '#4a4a4a' },
          textTransform: 'none',
          justifyContent: 'flex-start',
        }}
      >
        Oil Spill
      </Button>

      <Button
        variant="contained"
        startIcon={<SatelliteAltIcon />}
        sx={{
          backgroundColor: '#3a3a3a',
          color: '#fff',
          borderRadius: '8px',
          mb: 1,
          px: 2,
          '&:hover': { backgroundColor: '#4a4a4a' },
          textTransform: 'none',
          justifyContent: 'flex-start',
        }}
      >
        Wake Detection
      </Button>

      <Button
        variant="contained"
        startIcon={<RoomIcon />}
        sx={{
          backgroundColor: '#3a3a3a',
          color: '#fff',
          borderRadius: '12px',
          mb: 1,
          px: 2,
          '&:hover': { backgroundColor: '#4a4a4a' },
          textTransform: 'none',
          justifyContent: 'flex-start',
        }}
      >
        AIS Data
      </Button>
    </Box>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;