import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    itemId: 1,
};

const item = createSlice({
    name: 'item',
    initialState,
    reducers: {
      initBook: () => (initialState),
      receivePostItem: (state, action) => ({
        itemId: action.payload.itemId,
      }),
    },
});