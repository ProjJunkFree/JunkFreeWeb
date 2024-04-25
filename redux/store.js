import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiSlice } from "./services/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
  // devTools: true,
});

// in order to RTK to work need ang middleware

// RTK QUERY - reauthorization
// anytime nga maka get ta og 401 status code (unauthorized)
// if we het unauthorized route and wala ta na authenticated we get 401 and then reauthorization do is it will hit our refresh endpoints which we can get a new access token, because access token it expires every 5 mins
