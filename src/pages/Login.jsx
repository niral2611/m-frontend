import React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

const Login = () => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Left Section: Background Image with Overlay Text */}
      <Box sx={{ width: '70%', height: '100%', position: 'relative' }}>
        <Box
          component="img"
          src="/assets/login_bg.jpg"
          alt="Login Image"
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            MATSYA
          </Typography>
          <Typography variant="h5">Welcome back to the MATSy-A Panel</Typography>
        </Box>
      </Box>

      {/* Right Section: Sidebar with Login Form */}
      <Box
        sx={{
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
        <Typography variant="h4" sx={{ color: 'black', fontWeight: 'bold', mb: 2 }}>
          MATSy-A
        </Typography>
        <Typography variant="body1" sx={{ color: 'blue', mb: 1 }}>
          Welcome back
        </Typography>
        <Typography variant="body1" sx={{ color: 'blue', mb: 3 }}>
          Login to MATSy-A
        </Typography>
        <TextField label="Email" variant="outlined" sx={{ mb: 2, width: '80%' }} />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={{ mb: 3, width: '80%' }}
        />
        <Button variant="contained" color="primary" sx={{ mb: 2, width: '80%' }}>
          Login
        </Button>
        <Link href="#" sx={{ color: 'blue' }}>
          Forgot Password? Click Here
        </Link>
      </Box>
    </Box>
  );
};

export default Login;