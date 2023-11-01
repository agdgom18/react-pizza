import { createSlice } from '@reduxjs/toolkit';

export interface IState {
  categoryId: number;
  currentPage: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'popularity A-Z',
    sortProperty: 'rating',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
      console.log(action);
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCategoryId, setCurrentPage, setSort } = filterSlice.actions;
export default filterSlice.reducer;
