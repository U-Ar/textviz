import React from "react";
import { makeStyles } from "@mui/styles";

import {
  AppBar,
  Typography,
  Stack,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(1)
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Stack className={classes.root}>
      <AppBar position="static" className={classes.appbar} sx={{backgroundColor:"primary.dark"}}>
        <Typography variant="h4" className={classes.title}>
          TextViz
        </Typography>
      </AppBar>
      <AppBar position="static" className={classes.appbar} sx={{backgroundColor:"primary.main"}}>
        <Typography variant="subtitle1" className={classes.title}>
          文字列の接尾辞木を簡単に可視化できます。
        </Typography>
      </AppBar>
    </Stack>
  );
}