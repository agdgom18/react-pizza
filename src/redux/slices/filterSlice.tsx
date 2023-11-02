import { createSlice } from '@reduxjs/toolkit';

export interface IState {
  categoryId: number;
  currentPage: number | string;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: IState = {
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
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCategoryId, setCurrentPage, setSort, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
