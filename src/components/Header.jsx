import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppleIcon from '@material-ui/icons/Apple';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    headerStyle: {
        //fontSize: '20px'
        color: 'white',
        textTransform: 'none',
        textDecoration: 'none',
    },
});

function Header() {
    const classes = useStyles();
    //return <Typography className={classes.headerStyle} variant="h1">Gebraucht Iphone verkaufen</Typography>
    return <AppBar position="fixed">
        <Toolbar>
            <Grid container>
            
                <Grid item xs={false} sm={2}></Grid>
                    <Grid item container direction="row" alignItems="center" xs={12} sm={10}>
                    <Grid item>
                    <Link className={useStyles().headerStyle} to='/' >
                    
                        <img src="/assets/logo_w.png"></img>
                    </Link>
                    </Grid>
                    <Grid item>
                    <Link className={useStyles().headerStyle} to='/' >
                        <Typography className={classes.headerStyle}>
                        &nbsp; Mein iPhone verkaufen 
                        </Typography>
                    </Link>
                    </Grid>
                </Grid>
            
            </Grid>
        </Toolbar>
    </AppBar>
}

export default Header;