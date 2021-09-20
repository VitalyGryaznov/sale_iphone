import { configureStore } from "@reduxjs/toolkit";
import { phoneSlice } from "./slices";

export const store = configureStore({
  reducer: {
    phone: phoneSlice.reducer,
  },
});

store.subscribe(() => {
  const storage = store.getState();
  localStorage.setItem("phone", JSON.stringify(storage.phone));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
