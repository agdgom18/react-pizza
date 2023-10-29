import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface IState {
  categoryId: number;
  sort: {
    name: string;
    sortProperty: string;
  };
}

const initialState: IState = {
  categoryId: 0,
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
      console.log(action);

      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
