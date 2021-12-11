import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
/*
// Stateの初期状態
const initialState = {
  id: null,
  length: null,
  text: null,
  dot: null,
  sa: null,
  psi: null,
  bwt: null,
  lf: null,
  lcp: null,
  user: null,
  date: null,
};

const textitem = createSlice({
  name: 'textitem',
  initialState,
  reducers: {
    initText: () => (initialState),
    receiveGetText: (state, action) => ({
        id:     action.payload.id,
        length: action.payload.length,
        text:   action.payload.text,
        dot:    action.payload.dot,
        sa:     action.payload.sa,
        psi:    action.payload.psi,
        bwt:    action.payload.bwt,
        lf:     action.payload.lf,
        lcp:    action.payload.lcp,
        user:   action.payload.user,
        date:   action.payload.date,
    }),
  },
});

// 個別でも使えるようにActionCreatorsをエクスポートしておく
export const { initText, receiveGetText } = textitem.actions;


export const getText = (id) => {
  const textUrl = `https://indextify.herokuapp.com/text/${id}`;
  return async (dispatch) => {
    const response = await axios({ method: "get", url: textUrl });
    dispatch(receiveGetText({
        id:     response.data.id,
        length: response.data.length,
        text:   response.data.text,
        dot:    response.data.dot,
        sa:     response.data.sa,
        psi:    response.data.psi,
        bwt:    response.data.bwt,
        lf:     response.data.lf,
        lcp:    response.data.lcp,
        user:   response.data.user,
        date:   response.data._date,
    }))
  }
};

export const deleteText = (id) => {
    const textUrl = `https://indextify.herokuapp.com/text/${id}`;
    return async (dispatch) => {
        const response = await axios({ method: "delete", url: textUrl });
        
    }
}

export default textitem;*/