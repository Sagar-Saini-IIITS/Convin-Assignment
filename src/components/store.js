import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cardSlice from "./cardSlice";

const store = configureStore({
  reducer: {
    card: cardSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;