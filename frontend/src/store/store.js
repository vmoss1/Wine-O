import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import wineReducer from "./wine";

// Define the root reducer
const rootReducer = {
  session: sessionReducer,
  wines: wineReducer,
};

// Configure the store with Redux Toolkit
const mainStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development
});

export default mainStore;
