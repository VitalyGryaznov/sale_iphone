import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Phone {
  type: "phone";
  model: string;
  color: string;
  memory: string;
  return_policy: string;
  selers_feedback: string;
  number_of_reviews: string;
  no_feedback_yet: boolean;
  shipping_cost: string;
  condition: string;
}

const initialState: Phone = String(localStorage.getItem("phone")).includes(
  "type"
)
  ? JSON.parse(String(localStorage.getItem("phone")))
  : {
      type: "phone",
      model: "",
      color: "",
      memory: "",
      return_policy: "",
      selers_feedback: "",
      number_of_reviews: "",
      no_feedback_yet: null,
      shipping_cost: "",
      condition: "",
    };

export const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    setOption: (
      state,
      action: PayloadAction<{ field: string; value }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { setOption } = phoneSlice.actions;
