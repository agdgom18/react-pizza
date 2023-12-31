import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from '../store';
import { Pizza } from '../../types';
interface State {
  pizzasItems: Pizza[];
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
      const typesOfPizza = ['thin', 'traditional'];
      const pizzas: Pizza[] = action.payload.map((pizza: any) => {
        return { ...pizza, types: pizza.types.map((el: number) => typesOfPizza[el]) };
      });

      state.loading = false;
      state.pizzasItems = pizzas;
      state.error = '';
    });
    builder.addCase(pizzasData.rejected, (state, action) => {
      state.loading = false;
      state.pizzasItems = [];
      state.error = action.error.message;
    });
  },
});

export const selectPizzas = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;
