import { EncryptPostData } from "@/src/utils/hof/apiHelperFunctions";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  currentPage: {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCurrentPageFn: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCurrentPageFn } = globalSlice.actions;

export default globalSlice.reducer;
