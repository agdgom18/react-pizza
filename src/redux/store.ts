import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartsSlice';
import pizzasSlice from './slices/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    search: searchSlice,
    pizzas: pizzasSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
