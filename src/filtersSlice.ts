import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type FiltersState = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

const initialState: FiltersState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
    setUsernameFilter: (state, action) => {
      state.username = action.payload;
    },
    setEmailFilter: (state, action) => {
      state.email = action.payload;
    },
    setPhoneFilter: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const selectAllFilters = (state: RootState) => state.filters;

export const { setNameFilter, setUsernameFilter, setEmailFilter, setPhoneFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
