import { createSlice } from '@reduxjs/toolkit'

const rootListing = createSlice({
  name: "root",
  initialState: {
    model: localStorage.getItem('model'),
    color: localStorage.getItem('color'),
    memory: localStorage.getItem('memory'),
    returnPolicy: localStorage.getItem('returnPolicy'),
    feedback: localStorage.getItem('feedback'),
    numberOfReviews: localStorage.getItem('numberOfReviews'),
    textDescription: localStorage.getItem('textDescription'),
    haveFeedback: localStorage.getItem('haveFeedback') == "true",
    shippingCost: localStorage.getItem('shippingCost'),
    condition: localStorage.getItem('condition'),
  },
  reducers: {
    chooseModel: (state, action) => { state.model = action.payload },
    chooseColor: (state, action) => { state.color = action.payload },
    chooseMemory: (state, action) => { state.memory = action.payload },
    chooseReturnPolicy: (state, action) => { state.returnPolicy = action.payload },
    chooseFeedback: (state, action) => { state.feedback = action.payload },
    chooseNuberOfReviews: (state, action) => { state.numberOfReviews = action.payload },
    chooseTextDescription: (state, action) => { state.textDescription = action.payload },
    chooseHaveFeedback: (state, action) => { state.haveFeedback = action.payload },
    chooseShippingCost: (state, action) => { state.shippingCost = action.payload },
    chooseCondition: (state, action) => { state.condition = action.payload },
  }
});

export const reducer = rootListing.reducer;

export const { chooseModel, chooseColor, chooseNuberOfReviews, chooseTextDescription, chooseMemory, chooseReturnPolicy, chooseFeedback, chooseHaveFeedback, chooseShippingCost, chooseCondition } = rootListing.actions;