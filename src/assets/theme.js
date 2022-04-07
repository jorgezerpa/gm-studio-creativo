// on App.js:
// import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
// import theme from './assets/theme';
// responsiveFontSizes(theme);

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#FE009D',
    },
    secondary: {
      main: '#1ED7ED'
    },
    auxiliar1:{
      main:'#FFCC00'
    }
  },

  // typography: {
  //   fontFamily: [
  //     '',
  //     '',
  //     ],
  //   },


  //   breakpoints: {
  //       values:{
  //         xs: 400,
  //         sm: 600,
  //         md: 900,
  //         lg: 1200,
  //         xl: 1536,
  //       }
  //   }
})


        //fonts responsivness
theme.typography.h1={
  fontSize: '2rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '12vw',
  },
};
theme.typography.h2={
  fontSize: '1.8rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.8vw',
  },
};
theme.typography.h3={
  fontSize: '1.6rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.6vw',
  },
};
theme.typography.h4={
  fontSize: '1.4rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.5vw',
  },
};
theme.typography.h5={
  fontSize: '1.3rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.4vw',
  },
};
theme.typography.h6={
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
  fontSize: '7.3vw',
  },
};
theme.typography.subtitle1={
  fontSize: '1.2rem',
};
theme.typography.subtitle2={
  fontSize: '1.2rem',
};
theme.typography.body1={
  fontSize: '1rem',
};
theme.typography.body2={
  fontSize: '1rem',
};
theme.typography.button={
  fontSize: '1rem',
};
theme.typography.caption={
  fontSize: '.95rem',
};
theme.typography.overline={
  fontSize: '7rem',
};


export default theme;