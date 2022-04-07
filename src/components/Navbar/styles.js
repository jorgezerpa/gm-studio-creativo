import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    appBar: {},
    logoContainer:{
      width: '100px',
    },
    logo: {
      width: '10px'
    },
    toolbar: {
    },
    toolbarGrid: {},
    toolbarItem: {
      '&:hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 2px 0 0 rgba(255,255,255,.6)',
      }
    },
}));
