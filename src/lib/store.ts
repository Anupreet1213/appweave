import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import cartReducer from "./cartSlice";
import searchTextReducer from "./searchTextSlice";
import checkBoxReducer from "./checkBoxSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartReducer,
    searchText: searchTextReducer,
    checkBox: checkBoxReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
