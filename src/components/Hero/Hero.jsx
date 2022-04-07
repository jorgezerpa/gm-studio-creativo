import React, { useState, useEffect } from 'react';
import { homeImages } from '../../assets';

import useStyles from './styles';
import '../../assets/css/waves.css';

const Hero = () => {
  const classes = useStyles();

  const [showLogo, setShowLogo] = useState(0);

  useEffect(()=>{
      setTimeout(()=> setShowLogo(1), 1000)
  }, []);

  return (
    <div className={classes.container}>
        <div className={classes.background}>
          <img className={classes.backgroundImage} style={{ opacity: showLogo}} src={homeImages.logo} alt="" />
        </div>
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
    
        <div className='wave-side wave4'></div>
        <div className='wave-side wave5'></div>
        <div className='wave-side wave6'></div>
    
    </div>
  )
}

export default Hero