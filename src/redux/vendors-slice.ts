import { FinalResultDataType } from "@/services/mobile/index.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  vendors: FinalResultDataType[];
}

const initialState: CounterState = {
  vendors: [],
};

export const vendorsSlice = createSlice({
  name: "vendors",
  initialState,
  reducers: {
    addVendors: (state, action: PayloadAction<FinalResultDataType[]>) => {
      state.vendors = [...state.vendors, ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addVendors } = vendorsSlice.actions;

export default vendorsSlice.reducer;
