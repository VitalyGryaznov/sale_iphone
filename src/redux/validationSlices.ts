import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Validation {
    modelValidationShow: string;
    colorValidationShow: string;
    memoryValidationShow: string;
    conditionValidationShow: string;
    return_policyValidationShow: string;
    selers_feedbackValidationShow: string;
    number_of_reviewsValidationShow: string;
    no_feedback_yetValidationShow: string;
    shipping_costValidationShow: string;
}

const initialState: Validation = {
    modelValidationShow: "false",
    colorValidationShow: "false",
    memoryValidationShow: "false",
    conditionValidationShow: "false",
    return_policyValidationShow: "false",
    selers_feedbackValidationShow: "false",
    number_of_reviewsValidationShow: "false",
    no_feedback_yetValidationShow: "false",
    shipping_costValidationShow: "false",
}

export const validatonSlice = createSlice({
    name: "validaton",
    initialState,
    reducers: {
        setValidationOption: (state, action: PayloadAction<{ field: string; active: string }>) => {
            state[action.payload.field] = action.payload.active;
        },
    },
});

export const { setValidationOption } = validatonSlice.actions;