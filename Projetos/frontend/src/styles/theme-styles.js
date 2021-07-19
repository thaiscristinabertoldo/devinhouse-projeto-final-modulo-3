import { createTheme } from '@material-ui/core';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0f2c3d',
    },
    secondary: {
      main: '#ffb300',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      /* main: '#ed143d',*/
      main: '#53afe2',
    },
    secondary: {
      main: '#ffb300',
    },
  },
});
