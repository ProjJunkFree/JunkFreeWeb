import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false, // is user LoggedIn
  isLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    // once ang verify is complete
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;

export default authSlice.reducer;
