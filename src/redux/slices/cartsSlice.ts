import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { iCartItem, iCartSlice } from '../../types';

const initialState: iCartSlice = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<iCartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem?.count) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price! * obj.count! + sum;
      }, 0);
    },
    incrementItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count!++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price! * obj.count! + sum;
      }, 0);
    },
    decrementItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count!--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price! * obj.count! + sum;
      }, 0);
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { addItem, removeItem, clearItems, incrementItem, decrementItem } = cartSlice.actions;

export default cartSlice.reducer;
