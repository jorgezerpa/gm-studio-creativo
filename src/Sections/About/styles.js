import { makeStyles } from '@mui/styles';
import { width } from '@mui/system';

export default makeStyles(theme=>({
    container: {
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
    },
    aboutGrid:{
        position: 'relative',
        marginBottom: '100px',
        padding: '0 150px',
        marginTop: '250px',
        gap: '50px',
        [theme.breakpoints.down('md')]:{
            padding:'0 90px'
        },
        [theme.breakpoints.down('sm')]:{
            padding:'0 30px'
        }
    },
    aboutTextContainer:{
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // alignItems:'center',
        // gap: '30px'
    },
    aboutText:{
        width: '100%',
        textAlign: 'center',
        padding: '25px 0',
    },
    aboutTextCaption:{
        width: '100%',
        textAlign: 'center',
        background: 'rgba(255,255,255, .1)',
        padding: '10px',
        fontStyle: 'italic',
        borderRadius: '5px',
    },
    span1:{
        color: theme.palette.primary.main,
    },
    span2:{
        // color: theme.palette.secondary.main,
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid '+ theme.palette.secondary.main,
    },
    aboutImageContainer:{
        display: 'flex',
        alignItems: 'center',
        height: '100%'
    },
    aboutImage:{
        width: '400px',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    separator:{
        position: 'absolute',
        width: '3px',
        height: '100%',
        background: theme.palette.primary.main,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.down('md')]:{
            height: '3px',
            width: '100%',
        },
    },

}));
