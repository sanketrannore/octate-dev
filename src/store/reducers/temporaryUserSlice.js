import { EncryptPostData } from "@/src/utils/hof/apiHelperFunctions";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  temporaryUser: {},
};

export const temporaryUserSlice = createSlice({
  name: "temporaryUser",
  initialState,
  reducers: {
    setTemporaryUserDetailsFn: (state, action) => {
      state.temporaryUser = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemporaryUserDetailsFn } = temporaryUserSlice.actions;

export default temporaryUserSlice.reducer;
