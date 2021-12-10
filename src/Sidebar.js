import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import ListItem from '@mui/material/ListItem';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { FixedSizeList } from "react-window";

import axios from "axios";

const Sidebar = () => {

    const dispatch = useDispatch();

    const texts = useSelector((state) => state.texts);
    
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
  
    /*return (
      <div style={{ width: '100%' }}>
          <FixedSizeList
            height={400}
            width={360}
            itemSize={46}
            itemCount={200}
            overscanCount={5}
          >
              {texts.map((text) => (
                  <ListItem component="div" disablepadding>
                      <ListItemButton>
                          <ListItemText primary={text.text}></ListItemText>
                      </ListItemButton>
                  </ListItem>
              ))}
          </FixedSizeList>
      </div>
    );*/

    return (
        <div style={{ width: '100%' }}>
          <ul
          >
              {texts.map((text) => (
                  <li component="div" disablepadding>
                      {text.text}
                  </li>
              ))}
          </ul>
      </div>
    )
  };
  
  export default Sidebar;