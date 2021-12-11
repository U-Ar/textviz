import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { ListItem, ListItemButton, ListItemText, List, Box } from "@mui/material";

import { FixedSizeList } from "react-window";

import axios from "axios";

const Sidebar = () => {

    const dispatch = useDispatch();

    const texts = useSelector((state) => state.texts);
    const showntext = useSelector((state) => state.text);
    
    useEffect(() => {
        const getTexts = async () => {
            const textsUrl = "https://indextify.herokuapp.com/texts/";
            const response = await axios.get(textsUrl);
            console.log(response.data);
            dispatch({
                type: "GET_TEXTS",
                payload: response.data
            })
        }
        getTexts();
    }, [dispatch]);

    const getFunctionGetById = (id) => {
        return async () => {
            const textUrl = `https://indextify.herokuapp.com/text/${id}`;
            const response = await axios.get(textUrl);
            console.log(response.data);
            if (response.status === 200) {
                dispatch({
                    type: "GET_TEXT",
                    payload: response.data,
                });
            } else {
                dispatch({
                    type: "GET_TEXT",
                    payload: null,
                });
            }
        }
    }

    return (
        <Box sx={{backgroundColor: "primary.dark"}}>
          <List style={{ maxHeight: "1000px", overflow: "auto"}}>
              {texts.map((text) => (
                <ListItem component="div" disablepadding>
                  <ListItemButton onClick={getFunctionGetById(text.id)}
                  selected={(showntext!==null && text.id===showntext.id) ? true : false}>
                    <ListItemText primary={text.text} secondary={`ID:${text.id} Date:${text.date}`}></ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </Box>
    )
  };
  
  export default Sidebar;