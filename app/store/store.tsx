import { configureStore } from "@reduxjs/toolkit";
import searchbarContentReducer from "./features/searchbarContentSlice";

export const store = () => {
  return configureStore({
    reducer: {
      searchText: searchbarContentReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
