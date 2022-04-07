import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { services } from '../../assets';

import useStyles from './styles';



const OurServices = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant='h2'>Nuestros Servicios</Typography>
            <Grid container justifyContent='center' alignItems='center' spacing={5} >
                {services.map((service, key)=>(
                    <Grid key={key} item xs={12} sm={6} md={4} lg={4}>
                            <AnimationOnScroll animateIn="animate__fadeInUpBig" delay={30} duration={1}>
                                    <Card className={classes.card} style={{background:'none', color: '#fff'}}>
                                        <CardMedia className={classes.cardMedia}>
                                            <img className={classes.cardImage} src={service.image} alt="" />
                                        </CardMedia>
                                        <CardContent className={classes.CardContent}>
                                            <Typography gutterBottom variant='h4'>
                                                { service.title }
                                            </Typography>
                                            <Typography variant='body1'>
                                                { service.description }
                                            </Typography>
                                        </CardContent>    
                                    </Card>      
                            </AnimationOnScroll>
                    </Grid>
                ))
                }
            </Grid>
        </div>
      )
  

}

export default OurServices 