import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { clearSearchbarContent } from "../searchbar-filter/searchbarContentSlice";

export interface IsNavbarOpen {
  value: boolean;
}

const initialState: IsNavbarOpen = {
  value: false,
};

export const isNavbarOpenSlice = createSlice({
  name: "isNavbarOpen",
  initialState,
  reducers: {
    toggleNavbar: (state, action: PayloadAction<boolean | undefined>) => {
      if (action.payload !== undefined) {
        state.value = action.payload;
      } else {
        // Handle the case when no payload is provided (optional)
        state.value = !state.value;
      }
      if (state.value === true) {
        document.body.classList.toggle("overflow-hidden", true);
      } else {
        document.body.classList.toggle("overflow-hidden", false);
      }
      clearSearchbarContent();
    },
  },
});

export const { toggleNavbar } = isNavbarOpenSlice.actions;

export default isNavbarOpenSlice.reducer;
