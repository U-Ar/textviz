import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Box } from "@mui/material";
import { Graphviz } from "graphviz-react";

import { useSelector, useDispatch } from 'react-redux';

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const GetTextContent = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const text = useSelector((state) => state.text);

  const handleOnClickDelete = async () => {
    const textUrl = `https://indextify.herokuapp.com/text/${text.id}`;
    const response = await axios.delete(textUrl);
    if (response.status === 200) alert(`正常に文字列${text.id}を削除しました。`);
    else alert(`文字列${text.id}の削除に失敗しました。`)
    dispatch({
        type: "GET_TEXT",
        payload: null
    });

    const textsUrl = `https://indextify.herokuapp.com/texts/`;
    const textsResponse = await axios.get(textsUrl);
    console.log(textsResponse.data);
    dispatch({
        type: "GET_TEXTS",
        payload: textsResponse.data
    });
  }


  return (
    <div style={{ width: '100%', textAlign: "center" }}>
        <div className="getBox" style={{ width: '100%' }}>
          <div>
            {text ? (
                <div>
                    <Box component="div" sx={{ border: "1px solid black", marginBottom:"10px"}}>
                        <Graphviz dot={text.dot}
                        options={{ width: "100%", height: "500px", zoom: true, fit: true, zoomScaleExtent:[0.1,10]}}/>
                    </Box>
                    <Button
                        className={classes.button}
                        variant="outlined"
                        color="secondary"
                        onClick={handleOnClickDelete}
                    >選択している文字列を削除</Button>
                </div>
            ) : null}
          </div>
        </div>
    </div>
  );
};

export default GetTextContent;