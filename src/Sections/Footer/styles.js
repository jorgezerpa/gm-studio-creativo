import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    container: {
        width: '100%',
        position: 'relative',
        padding: '100px',
        paddingBottom: '0',
        [theme.breakpoints.down('md')]:{
            padding: '90px',
            paddingBottom: '0',
        },
        [theme.breakpoints.down('sm')]:{
            padding: '20px',
            paddingBottom: '0',
        },
    },
    title:{},
    item:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemImage:{
        width: '15px',
        [theme.breakpoints.down('sm')]:{
            width: '50%',
        },
        [theme.breakpoints.down('xs')]:{
            width: '40%',
        },
    }, 
}));
