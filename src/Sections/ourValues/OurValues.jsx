import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
// import "animate.css/animate.min.css";

import { Typography, Grid } from '@mui/material';
import { homeImages, values } from '../../assets';

import useStyles from './styles';


const OurValues = () => {
    const classes = useStyles();

  return (
    <div className={classes.container}>
        <div className={classes.background}>
        </div>

        <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
            <Typography className={classes.title} variant='h2'>Nuestros valores</Typography>
        </AnimationOnScroll>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
            {values.map((value, key)=>(
                <Grid className={classes.item} key={key} item xs={6} sm={4} md={4} lg={4}>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={50} duration={2}>
                            <Grid container justifyContent='center' alignItems='center'>
                                <Grid item sm={2} md={2} lg={2} >
                                    <img className={classes.itemImage} src={homeImages.star} alt="" />
                                </Grid>
                                <Grid item sm={10} md={10} lg={10}>
                                    <Typography variant='body1'>{value}</Typography>
                                </Grid>
                            </Grid>
                        </AnimationOnScroll>
                </Grid>
            ))
            }
        </Grid>
    </div>
  )
}

export default OurValues