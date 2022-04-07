import React from 'react';

import { Typography, Grid } from '@mui/material';
import { rrss, logo2 } from '../../assets';

import useStyles from './styles';

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid container justifyContent='center' alignItems='center'>
                {rrss.map((item, key)=>(
                    <Grid key={key} className={classes.item} item xs={6} sm={4} md={2} lg={2}>
                        <Grid container spacing={1} justifyContent='center' alignItems='center'>
                            <Grid item sm={1} md={2} lg={2} >
                                <img className={classes.itemImage} src={item.icon} alt="" />
                            </Grid>
                            <Grid item sm={11} md={10} lg={10}>
                                <Typography>{item.name}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ))
                }
            </Grid>

            <div style={{width: '100%', display:'flex', justifyContent:'center', alignItems: 'center', paddingTop: '100px'}}>
                <img src={logo2} alt="" style={{width: '150px'}} />
            </div>
        </div>
      )
}

export default Footer