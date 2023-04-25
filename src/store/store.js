import { configureStore } from "@reduxjs/toolkit";
// this is the global store which contains the state and the middleware
import { persistReducer, persistStore } from "redux-persist";
import userReducer from "./reducers/userSlice";
import temporaryUserReducer from "./reducers/temporaryUserSlice";
import storage from "redux-persist/lib/storage";
import { api, apiNew } from "./baseApi";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    userDetails: persistedReducer,
    temporaryUserDetails: temporaryUserReducer,
    [api.reducerPath]: api.reducer,
    [apiNew.reducerPath]: apiNew.reducer,
  },
  //   Adding the api middleware enables caching, invalidation, polling,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }).concat([api.middleware, apiNew.middleware]),
  devTools: true,
});
export const persistor = persistStore(store);
