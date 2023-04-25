import { EncryptPostData } from "@/src/utils/hof/apiHelperFunctions";
import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  userDetails: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetailsFn: (state, action) => {
      state.userDetails = EncryptPostData(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserDetailsFn } = userSlice.actions;

export default userSlice.reducer;
