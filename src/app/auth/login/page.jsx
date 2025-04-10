'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Snackbar, Alert, Slide } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import GoogleLoginButton from '../../components/google';

const Login = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get('error');
    if (error) {
      setOpen(true);

      // Clear error from the URL (optional, prevents repeat toasts)
      const url = new URL(window.location.href);
      url.searchParams.delete('error');
      window.history.replaceState({}, '', url.toString());
    }
  }, [searchParams]);

  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', userSelect: 'none' }} >
      <Box sx={{ width: '70%', position: 'relative'}}>
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
          transform: 'translate(-10%, -50%)',
          textAlign: 'left',
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
        padding: 2,
      }}>
        <Typography 
          variant='h4' 
          sx={{ 
            color: 'black', 
            fontWeight: 'bold', 
            mb:2, 
            fontSize: {
              xs: '20px',
              sm: '30px',
              md: '40px',
              lg: '50px',
            }, 
            marginTop: '-300px', 
            fontFamily: '"Times New Roman", Times, serif'
          }}>
          MATSYA
        </Typography>
        <Typography 
          variant='h4' 
          sx={{ 
            color: '#003153', 
            fontWeight: 'bold', 
            mb:2, 
            marginTop:'100px', 
            fontSize: {
              xs: '14px',
              sm: '17px',
              md: '25px',
              lg: '35px',
            },
          }}>
          Welcome Aboard
        </Typography>
        <Typography 
          variant='h6' 
          sx={{ 
            color: '#003153', 
            mb:2, 
            marginTop:'-20px', 
            fontSize: {
              xs: '12px',
              sm: '13px',
              md: '14px',
              lg: '16px',
            }, 
            whiteSpace: 'pre-line', 
            textAlign: 'center'
          }}>
          {'You are just few steps away from persistent\nmonitoring of the ocean'}
        </Typography>

        <GoogleLoginButton />
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        TransitionComponent={(props) => <Slide {...props} direction="left" />}
      >
        <Alert severity="error" variant="filled" onClose={handleClose}>
          Login failed. Unauthorized access or restricted email.
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Login;
