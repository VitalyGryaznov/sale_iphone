import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './rootListing'

const store = configureStore({
  reducer
})

store.subscribe(() => {
    const { model, color, returnPolicy, memory, feedback, numberOfReviews, textDescription, haveFeedback, shippingCost, condition } = store.getState();
    localStorage.setItem('color', color);
    localStorage.setItem('model', model);
    localStorage.setItem('memory', memory);
    localStorage.setItem('returnPolicy', returnPolicy);
    localStorage.setItem('feedback', feedback);
    localStorage.setItem('numberOfReviews', numberOfReviews);
    localStorage.setItem('textDescription', textDescription);
    localStorage.setItem('haveFeedback', haveFeedback);
    localStorage.setItem('shippingCost', shippingCost);
    localStorage.setItem('condition', condition);
});

export default store;