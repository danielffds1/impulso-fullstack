import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button, makeStyles } from '@material-ui/core/';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
    h1: {
      fontSize: "3rem",
      color: "blue",
      fontFamily: 'Pacifico',
      marginBottom: "1.5rem",
    },
    menu:{
        textDecoration: 'none',
    },
    link:{
        color: "#3f51b5",
        fontSize: "1.5rem"
    }
  }));

const Header = () => {
    const classes = useStyles();
    return(
        <Grid container direction="row" justify="space-between" alignItems="center" xs={12} >
            <Typography variant='h3' className={classes.h1}>
                Dio Shopping
            </Typography>
            <Link to="/" className={classes.menu}>
                <Button color="primary" className={classes.link}>Home</Button>
            </Link>
            <Link to="/contato" className={classes.menu}>
                <Button color="primary" className={classes.link}>Contato</Button>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
