import React from 'react';
import { Box, Typography } from '@mui/material';
import GoogleLoginButton from '../components/google';

const Login = () => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden'}}>
      <Box sx={{ width: '70%', height:'100%', position: 'relative'}}>
        <Box 
          component="img"
          src='/assets/login_bg.jpg'
          alt='Login Image'
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width: '100%',
          marginLeft: 'auto'
        }} >
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: 'white', 
              fontSize: {
                xs: '40px',
                sm: '60px',
                md: '80px',
                lg: '100px'
              },
            }}
          >
            MATSYA
          </Typography>
          <Typography 
            sx={{ 
              color: 'white', 
              fontSize: {
                xs: '14px',
                sm: '16px',
                md: '20px',
              },
            }}
          >
            Welcome back to the MATSy-A Panel
          </Typography>
        </Box>
      </Box>
      <Box sx={{
          width: '30%',
          height: '100%',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Typography variant='h4' sx={{ color: 'black', fontWeight: 'bold', mb:2, fontSize: '40px', marginTop: '-300px', fontFamily: '"Times New Roman", Times, serif'}}>
          MATSYA
        </Typography>
        <Typography variant='h4' sx={{ color: '#003153', fontWeight: 'bold', mb:2, marginTop:'100px', fontSize: '25px'}}>
          Welcome Aboard
        </Typography>
        <Typography variant='h6' sx={{ color: '#003153', mb:2, marginTop:'-20px', fontSize: '10px', whiteSpace: 'pre-line', textAlign: 'center'}}>
          {'You are just few steps away from persistent\nmonitoring of the ocean'}
        </Typography>
        <GoogleLoginButton />
      </Box>
    </Box>
  )
}

export default Login;