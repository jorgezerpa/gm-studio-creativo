import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    container: {
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    backgroundImage: {
        position: 'absolute',
        width: '350px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        transition: '2s all',
        zIndex: '100',
        [theme.breakpoints.down('sm')]: {
            width: '230px',
          },
    },
}));
