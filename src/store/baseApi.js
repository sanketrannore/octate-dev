import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import React from "react";
// https://cruxstack.com/search/searchAll?offset=102&limit=100

// this component is the base endpoint through which all other end points are called

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // THIS IS THE BASE ENDPOINT COMING FROM THE CONFIG FILE
    baseUrl: "https://thebox-dev.portqii.com/",
    // This function takes in headers
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().authDetails?.details?.data?.token;
      headers.set("authorization", `Bearer ${"jsksssllllkk"}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
export const apiNew = createApi({
  reducerPath: "apiNew",
  baseQuery: fetchBaseQuery({
    // THIS IS THE BASE ENDPOINT COMING FROM THE CONFIG FILE
    baseUrl: "https://octate.ai/",
    // This function takes in headers
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().authDetails?.details?.data?.token;
      headers.set("authorization", `Bearer ${"jsksssllllkk"}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["addProducts", "addBlurbs", "addProposal", "comments", "notification", "BoardItems"],
});
