import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Typography variant="h6" className={classes.title}>
                    TextViz
                </Typography>
                <Button color="inherit">home</Button>
            </AppBar>
        </div>
    );
}