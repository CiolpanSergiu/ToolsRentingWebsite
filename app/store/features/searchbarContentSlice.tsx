import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchbarContentState {
  value: string;
}

const initialState: SearchbarContentState = {
  value: "",
};

export const searchBarContentSlice = createSlice({
  name: "searchbarContent",
  initialState,
  reducers: {
    handleChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { handleChange } = searchBarContentSlice.actions;

export default searchBarContentSlice.reducer;
