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
      if (state.value) {
        document.body.classList.toggle("overflow-hidden", true);
      } else {
        document.body.classList.toggle("overflow-hidden", false);
      }
    },
    clearSearchbarContent: (state) => {
      state.value = "";
    },
  },
});

export const { handleChange, clearSearchbarContent } =
  searchBarContentSlice.actions;

export default searchBarContentSlice.reducer;
