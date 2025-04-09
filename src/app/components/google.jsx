'use client';

import React, { useState, useEffect } from 'react';
import { signIn } from 'next-auth/react';
import { Button, CircularProgress, Backdrop  } from '@mui/material';

const GoogleLoginButton = () => {
    const [loading, setLoading] = useState(false);

    const handleGoogleLogin = async () => {
        setLoading(true);
        setTimeout(() => {
            signIn('google', {
                callbackUrl: '/dashboard'
            })
        }, 200);
    }
    
    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
    },[]);

    return (
        <>
            <Button 
                onClick={handleGoogleLogin}
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
            <Backdrop
                open={loading}
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <CircularProgress color="success" />
            </Backdrop>
        </>        
    )
}

export default GoogleLoginButton;