import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, Divider, IconButton, Link } from '@mui/material';
import { useRouter } from 'next/navigation';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import RoomIcon from '@mui/icons-material/Room';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeftRounded';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  const features = [
    {
      label: 'Ship Detection',
      icon: <DashboardIcon />,
      onClick: () => { router.push('/events/ship-detection') }
    },
    {
      label: 'Oil Spill Detection',
      icon: <BarChartIcon />,
      onClick: () => { router.push('/events/oil-spill-detection') }
    },
    {
      label: 'Ship Route',
      icon: <SatelliteAltIcon />,
      onClick: () => { router.push('/events/ship-route') }
    },
    {
      label: 'Ship Wake',
      icon: <RoomIcon />,
      onClick: () => { router.push('/events/ship-wake') }
    }

  ]

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
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: -33,
            top: 0,
            transition: 'transform 1s ease-in-out',
            transform: isOpen ? 'translateY(0)' : 'translateY(15em)',
            width: 29,
            padding: 0,
            backgroundColor: '#209cfc',
            border: '2px solid #fff',
            borderRadius: '50%',
            color: '#fff',
            '&:hover': {
              border: '2px solid #209cfc',
              backgroundColor: '#fff',
              color: '#209cfc',
            },
          }}
        >
          <ChevronLeftIcon fontSize="medium" />
        </IconButton>
      </Box>
      
      <Link href="http://localhost:3000/" underline="none" color="#fff" >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{
            fontFamily:'Playfair Display, serif',
            mb:4,
            letterSpacing:'1px',
            ml:1,
            fontSize:'32px'
          }}
        >
          MATSYA
        </Typography>
      </Link>

      <Typography
        variant="caption"
        sx={{ 
          color:'#aaa', 
          mb:2, 
          ml:2,
          fontSize:'16px' 
        }}
      >
        MENU
      </Typography>
      <Divider sx={{ backgroundColor:'#555', mb:2 }} />
      
      {
        features.map((feature, index) => (
          <Button
            key={index}
            variant="contained"
            startIcon={feature.icon}
            onClick={feature.onClick}
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
            {feature.label}
          </Button>
        ))
      }
      
    </Box>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;