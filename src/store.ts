import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: { users: usersReducer, filters: filtersReducer },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
