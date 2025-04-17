import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#0f0f0f',
      paper: '#1e1e1e',
    },
  },
});

export default theme;
