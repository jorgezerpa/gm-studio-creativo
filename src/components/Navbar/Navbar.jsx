import React, { useState, useEffect } from 'react';

import { logo } from '../../assets';
import  MobileMenu  from '../MobileMenu/MobileMenu';

import { AppBar, Toolbar, Typography, Grid, useScrollTrigger, Slide, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import useStyles from './styles';


const Navbar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger(); 
  const [toggleMenu, setToggleMenu] = useState(false)
  const [open, setOpen] = useState(false);


const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

  window.addEventListener('resize', ()=>{
    window.innerWidth < 600 ? setToggleMenu(true) : setToggleMenu(false);
  })
  
  useEffect(()=>{
      window.innerWidth < 600 ? setToggleMenu(true) : setToggleMenu(false);
  }, []);



  return (
    <Slide in={!trigger} timeout={500} >
    <AppBar className={classes.appBar} style={{background: '#000'}}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <Grid item xs={2} sm={2} md={1} lg={1}>
                    <img className={classes.logo} style={{width: '100%'}} src={logo} alt="" />
                </Grid>

                <Grid item xs={8} sm={8} md={10} lg={10}>
                  {!toggleMenu && 
                      <Toolbar className={classes.toolbar}>
                          <Grid className={classes.toolbarGrid} container justifyContent='space-between' alignItems='center'>
                                <Grid item className={classes.toolbarItem}><Typography variant='caption'>Home</Typography></Grid>
                                <Grid item className={classes.toolbarItem}><Typography variant='caption'>Contacto</Typography></Grid>
                                <Grid item className={classes.toolbarItem}><Typography variant='caption'>Blog</Typography></Grid>
                          </Grid>
                      </Toolbar>
                  }

                          
                </Grid>
                
                <Grid item xs={2} sm={2}>
                   {toggleMenu && <Icon> <MenuIcon onClick={handleClickOpen} /></Icon>}
                </Grid>
            </Grid>
            
            
            <MobileMenu open={open} handleClose={handleClose} image="#" />
    </AppBar>
    </Slide>
  )
}

export default Navbar