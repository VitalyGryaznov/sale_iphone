import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { phoneSlice } from "./slices";

export const store = configureStore({
  reducer: {
    phone: phoneSlice.reducer,
  },
});

store.subscribe(() => {
  const storage = store.getState();
  console.log(JSON.stringify(storage.phone));
  localStorage.setItem("phone", JSON.stringify(storage.phone));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
