import React from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';


import useStyles from './styles';

const MobileMenu = ({ open, handleClose, image }) => {
    const classes = useStyles();

  return (
        <Dialog open={ open }
            fullWidth
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.container}
        >
            <DialogContent className={classes.content}>
                <DialogContentText className={classes.contentText} id="alert-dialog-description">
                    <div>HOME</div>
                    <div>CONTACTO</div>
                    <div>BLOG</div>
                </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button onClick={handleClose}>close</Button>
            </DialogActions>
        </Dialog>
  )
}

export default MobileMenu