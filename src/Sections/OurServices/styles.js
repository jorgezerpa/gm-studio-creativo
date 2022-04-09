import { makeStyles } from '@mui/styles';

export default makeStyles(theme=>({
    container: {
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        padding: '150px',
        [theme.breakpoints.down('md')]:{
            padding: '90px',
        },
        [theme.breakpoints.down('md')]:{
            padding: '30px',
        },
    },
    title:{
        padding: '40px',
        width: '100%',
        textAlign: 'center'
    },
    card:{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        border: '3px solid '+ theme.palette.secondary.main,
        minHeight: '400px',
        // #1ED7ED pass to rgba and add opacity
    },
    cardMedia:{
        position: 'relative',
        overflow: 'hidden',
        marginTop: '30px',
    },
    cardImage:{
        width: '100px',
    },
    cardContent:{},
}));
