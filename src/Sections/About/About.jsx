import React from 'react';

import { AnimationOnScroll } from 'react-animation-on-scroll';


import { homeImages } from '../../assets';
import { Grid, Typography } from '@mui/material';

import useStyles from './styles';

const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.container} >
        <Grid container className={classes.aboutGrid} justifyContent='center' alignItems='flex-start'>
                    <Grid item className={classes.aboutTextContainer} sm={12} md={5} lg={5}>
                        <AnimationOnScroll animateIn="animate__tada" delay={30} duration={1}>
                            <Typography className={classes.aboutText} variant='h2' gutterBottom><span className={classes.span1}>¿</span>Quienes Somos<span className={classes.span1}>?</span></Typography>
                            <Typography className={classes.aboutTextCaption } > con relación al marketing digital y todos los canales y/o procesos que intervienen para llevar a cabo el desarrollo con éxito de este.</Typography>
                            <Typography className={classes.aboutText} variant='body1'>Somos un equipo multidisciplinario de profesionales con una vasta experiencia en el área del marketing, gestión empresarial y ventas además de conocimientos digitales que permiten llevar nuestro servicio al más alto nivel de acción agregando elementos que permiten diferenciarnos de las ofertas similares en el mercado.</Typography>
                        </AnimationOnScroll>
                        </Grid>
            
                    <Grid item className={classes.aboutImageContainer} sm={12} md={5} lg={5}>
                        <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={30} duration={1}>
                            <img className={classes.aboutImage} src={homeImages.group} alt="" />
                        </AnimationOnScroll>
                    </Grid>
            </Grid>
                  



      <Grid container className={classes.aboutGrid} justifyContent='center' alignItems='flex-start'>
            <Grid item className={classes.aboutTextContainer} xs={12} sm={12} md={4} lg={4}>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" delay={30} duration={1}>
                    <div>
                        <Typography variant='h2' className={classes.span2} gutterBottom>Misión</Typography>
                        <Typography className={classes.aboutText} variant='body1'>En GM Estudio Creativo nos dedicamos a la gestión digital, siempre buscando satisfacer las más altas exigencias de nuestros clientes y ofreciendo el mejor servicio apoyados en la alta capacitación y experiencia de nuestro personal. </Typography>
                    </div>
                </AnimationOnScroll>
            </Grid>


          <Grid item className={classes.aboutTextContainer} sm={1} md={1} lg={1}>
              <div className={classes.separator}>
          
              </div>
          </Grid>


              <Grid item className={classes.aboutImageContainer} xs={12} sm={12} md={4} lg={4}>
                <AnimationOnScroll animateIn="animate__fadeInRightBig" delay={30} duration={1}>
                    <div>
                        <Typography  variant='h2' className={classes.span2} gutterBottom>Visión</Typography>
                        <Typography className={classes.aboutText} variant='body1'>Convertirnos en líderes en el mercado, ampliando los horizontes de desarrollo y expansión. Posicionándonos en el mismo como uno de los mejores proveedores de servicios en nuestra área, siendo reconocidos por   la innovación, expertiz e integralidad del servicio, así como por un trato personalizado, aplicando los más altos estándares. </Typography>
                    </div>
                </AnimationOnScroll>
              </Grid>

        </Grid>


    </div>
  )
}

export default About