'use client';

import React, { useEffect, useState } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import { useSearchParams } from 'next/navigation';


const SearchParam = () => {
    const [open, setOpen] = useState(false);
    const searchParams = useSearchParams();

    useEffect(() => {
        const error = searchParams.get('error');
        if (error) {
            setOpen(true);
            const url = new URL(window.location.href);
            url.searchParams.delete('error');
            window.history.replaceState({}, '', url.toString());
        }
    }, [searchParams]);

    const handleClose = () => setOpen(false);

    return (
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
    );
}

export default SearchParam;