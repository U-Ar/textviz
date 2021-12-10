import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Stateの初期状態
const initialState = {
  totalItems: null,
  itemList: [],
};
const textlist = createSlice({
  name: 'textlist',
  initialState,
  reducers: {
    initTexts: () => (initialState),
    receiveGetTexts: (state, action) => ({
      totalItems: action.payload.totalItems,
      itemList: action.payload.itemList,
    }),
  },
});

// 個別でも使えるようにActionCreatorsをエクスポートしておく
export const { initTexts, receiveGetTexts } = textlist.actions;

/**
 * 書籍検索
 * @param searchWord
 * @returns {function(...[*]=)}
 */
export const getTexts = () => {
  const textsUrl = "https://indextify.herokuapp.com/texts/";
  return async (dispatch) => {
    const response = await axios({ method: "get", url: textsUrl });
    dispatch(receiveGetTexts({
        totalItems: response.data.length,
        itemList: response.data
    }))
  }
};

export default textlist;