import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Box } from "@mui/material";
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));


const PostTextContent = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [postText, setPostText] = useState('');

  const handleOnClickPost = async () => {
    const textsUrl = "https://indextify.herokuapp.com/texts/";
    const response = await axios.post(textsUrl,postText, {
      headers: {
        "Content-Type" : "text/plain",
      }
    });

    console.log("postresponse: ",response);

    const textUrl = `https://indextify.herokuapp.com/text/${response.data.id}`;
    const textResponse = await axios.get(textUrl);
    console.log(textResponse.data);
    if (textResponse.status === 200) {
      dispatch({
          type: "GET_TEXT",
          payload: textResponse.data,
      });
    } else {
      dispatch({
          type: "GET_TEXT",
          payload: null,
      });
    }

    const textsResponse = await axios.get(textsUrl);
    console.log(textsResponse.data);
    dispatch({
        type: "GET_TEXTS",
        payload: textsResponse.data
    });
  };

  return (
    <Box sx={{backgroundColor: "primary.light"}}>
      <div style={{ textAlign: 'center', padding: "10px"}}>
        <div className="postBox" style={{ width: '100%' }}>
            <TextField
              id="post-text"
              placeholder="接尾辞木を知りたい文字列を入力 (例) helloworld"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              required
              type="search"
              inputProps={{ title: '文字列', maxLength: 100, minLength: 0 }}
            />
            <Button
              className={classes.button}
              variant="outlined"
              color="primary"
              onClick={handleOnClickPost}
              disabled={postText === ''}
            >
              送信
            </Button>
        </div>
      </div>
    </Box>
  );
};

export default PostTextContent;