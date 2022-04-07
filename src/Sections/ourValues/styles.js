import { makeStyles } from '@mui/styles';
import { extra1 } from '../../assets';

export default makeStyles(theme=>({
    container: {
        width: '100%',
        position: 'relative',
        padding: '50px',
        background: `url(${extra1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '1',
        [theme.breakpoints.down('md')]:{
            padding: '90px',
        },
        [theme.breakpoints.down('md')]:{
            padding: '30px',
        },
    },
    background:{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0, .5)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '10',
    },
    title:{
        padding: '40px',
        zIndex: '11',
    },
    item:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '11',
    },
    itemImage:{
        width: '100%',
        zIndex: '11',
    },


}));
