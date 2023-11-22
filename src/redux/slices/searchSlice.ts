import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
export interface IsearchSlice {
  searchValue: string;
}

const initialState: IsearchSlice = {
  searchValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearch = (state: RootState) => state.search.searchValue;
export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
