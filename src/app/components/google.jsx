'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import React from 'react';

const GoogleLoginButton = () => {
    return (
        <Button 
            onClick={() => signIn('google')}
            variant='contained'
            sx={{
                backgroundColor: 'white',
                color: 'white',
                borderRadius: '30px',
                padding: '5px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                    backgroundColor: '#f7f7f7',
                },
            }}
        >
            <img src="/assets/google-icon.svg" alt="Google" width="20px" height="20px" />
            <span style={{ color: '#000', fontSize: '10px', margin: '5px'}}>Continue with Google</span>
        </Button>
    )
}

export default GoogleLoginButton;