import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { iCartItem, iCartSlice } from '../../types';

const initialState: iCartSlice = {
  totalPrice: 0,
  items: [],
};
type SearchParams = {
  id: string;
  size: number;
  type: string;
};
const findElement = (arr: iCartItem[], searchParams: SearchParams): iCartItem | undefined => {
  const { id, size, type } = searchParams;
  return arr.find((obj: any) => obj.id === id && obj.size === size && obj.type === type);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<iCartItem>) {
      const findItem = findElement(state.items, action.payload);
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
      const findItem = findElement(state.items, action.payload);
      if (findItem?.count) {
        findItem.count++;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price! * obj.count! + sum;
      }, 0);
    },
    decrementItem(state, action) {
      const findItem = findElement(state.items, action.payload);
      if (findItem) {
        findItem.count!--;
      }
      if (findItem?.count === 0) {
        state.items = state.items.filter((obj) => obj.count !== 0);
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price! * obj.count! + sum;
      }, 0);
    },

    removeItem(state, action: PayloadAction<SearchParams>) {
      const { id, size, type } = action.payload;
      state.items = state.items.filter((obj) => obj.id !== id || obj.size !== size || obj.type !== type);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price! * obj.count! + sum;
      }, 0);
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
