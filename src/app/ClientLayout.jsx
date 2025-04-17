'use client';

import { SessionProvider } from 'next-auth/react';
import CssBaseline from '@mui/material/CssBaseline';

export default function ClientLayout({ children }) {
  return (
    <SessionProvider>
      <CssBaseline />
      {children}
    </SessionProvider>
  );
}
