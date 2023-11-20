import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface State {
  pizzasItems: unknown[];
  loading: boolean;
  error: string | undefined;
}

export interface PizzasDataParams {
  categoryOrder: string;
  sortOrder: string;
  search: string;
  currentPage: string | number;
  sortBy: string;
}

// Define the initial state using that type
const initialState: State = {
  pizzasItems: [],
  error: '',
  loading: true,
};

export const pizzasData = createAsyncThunk(
  'pizzasItems/getPizzasBuId',

  async (params: PizzasDataParams) => {
    const { categoryOrder, sortOrder, search, currentPage, sortBy } = params;

    const { data } = await axios.get(
      `https://64f1da430e1e60602d245dfa.mockapi.io/items?page=${currentPage}&limit=4&${categoryOrder}&sortBy=${sortBy}&order=${sortOrder}&${search}`,
    );

    return data;
  },
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(pizzasData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(pizzasData.fulfilled, (state, action) => {
      state.loading = false;
      state.pizzasItems = action.payload;
      state.error = '';
    });
    builder.addCase(pizzasData.rejected, (state, action) => {
      state.loading = false;
      state.pizzasItems = [];
      state.error = action.error.message;
    });
  },
});

export default pizzasSlice.reducer;
