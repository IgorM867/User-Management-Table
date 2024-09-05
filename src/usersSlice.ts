import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { selectAllFilters } from "./filtersSlice";

export const fetchUsers = createAsyncThunk.withTypes<{ state: RootState; dispatch: AppDispatch }>()(
  "users/fetchUsers",
  async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" });
      const data = await response.json();

      if (response.ok) {
        return data;
      }
      throw new Error(response.statusText);
    } catch (error) {
      return Promise.reject("Failed to fetch users");
    }
  }
);

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

type UsersState = {
  users: User[];
  status: "idle" | "pending" | "succeeded" | "rejected";
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "idle";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "rejected";
        state.error = "Failed to fetch users";
      });
  },
});

export const selecAlltUsers = (state: RootState) => state.users.users;
export const selectUsersStatus = (state: RootState) => state.users.status;
export const selectUsersError = (state: RootState) => state.users.error;
export const selectFilteredUsers = createSelector([selectAllFilters, selecAlltUsers], (filters, users) =>
  users.filter(
    (user) =>
      user.name.toLocaleLowerCase().includes(filters.name.toLocaleLowerCase()) &&
      user.username.toLocaleLowerCase().includes(filters.username.toLocaleLowerCase()) &&
      user.email.toLocaleLowerCase().includes(filters.email.toLocaleLowerCase()) &&
      user.phone.toLocaleLowerCase().includes(filters.phone.toLocaleLowerCase())
  )
);

export default usersSlice.reducer;
