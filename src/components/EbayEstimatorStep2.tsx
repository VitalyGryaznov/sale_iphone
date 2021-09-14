import React, { useEffect, useState } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorPhoto";
import PhoneProperties from "./ebay-estimator/PhoneProperties";
import SumbitButton from "./ebay-estimator/SubmitEstimatorScreenButton";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../redux/slices";
import { AppDispatch, RootState } from "../redux/storets";
import condition from "./constants/condition";
import returnPolicy from "./constants/returnPolicy";
import shippingCost from "./constants/shippingCost";
import { useHistory } from "react-router-dom";
import useForm from './useForm';
import validate from "./validation/step2validation";

const EbayEstimatorStep2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const history = useHistory();
  const initialValues = {
    model: phoneState.phone.model,
    color: phoneState.phone.color,
    memory: phoneState.phone.memory,
    condition: phoneState.phone.condition,
    return_policy: phoneState.phone.return_policy,
    shipping_cost: phoneState.phone.shipping_cost,
    no_feedback_yet: phoneState.phone.no_feedback_yet.toString(),
    selers_feedback: phoneState.phone.selers_feedback,
    number_of_reviews: phoneState.phone.number_of_reviews,
  };

  const { handleSelect, handleInput, handleSubmit, values, setValues, errors } = useForm(
    initialValues,
    validate,
    () => {
      //dispatch(setOption({ field: "model", value: values.model }));
   
      history.push("/iphone-verkaufen-estimate/result");
    }
  );

 

  
  /*const submitForm = () => {
    if (handleEmptyStates()) {
      dispatch(setOption({ field: "selers_feedback", value: feedback }));
      dispatch(
        setOption({ field: "number_of_reviews", value: numberOfReviews })
      );
      history.push("/iphone-verkaufen-estimate/result");
    }
  };

  const handleFeedbackState = (event) => {
    setFeedback(event.target.value);
    const reg = RegExp(/^\d*$/).test(event.target.value);
    if (!reg) {
      setFeedbackError("Ihre Prozentsatz darf nur die Zahlen 0-9 enthalten.");
    } else {
      setFeedbackError("");
      //dispatch(setOption({ field: "selers_feedback", value: feedback}));
    }
  };

  const handleNumberOfReviewsState = (event) => {
    setNumberOfReviews(event.target.value);
    const reg = RegExp(/^\d*$/).test(event.target.value);
    if (!reg) {
      setNumberOfReviewsError("Ihre Anzahl darf nur die Zahlen 0-9 enthalten.");
    } else {
      setNumberOfReviewsError("");
      //dispatch(setOption({ field: "number_of_reviews", value: numberOfReviews}));
    }
  };*/

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto values={values} />
        </div>
        <div>
          <PhoneProperties
            title="4. Zustand"
            options={condition}
            field="condition"
            onClick={handleSelect}
            currentlySelected={values.condition}
            error={errors["condition"]}
          />
          <PhoneProperties
            title="5. Rücknahmenoption"
            options={returnPolicy}
            field="return_policy"
            onClick={handleSelect}
            currentlySelected={values.return_policy}
            error={errors["return_policy"]}
          />
          <PhoneProperties
            title="6. Versandoption"
            options={shippingCost}
            field="shipping_cost"
            onClick={handleSelect}
            currentlySelected={values.shipping_cost}
            error={errors["shipping_cost"]}
          />
          <PhoneProperties
            title="7. Hast du bereits Bewertungen als eBay-Verkäufer?"
            options={[
              { title: "Ja", value: "false" },
              { title: "Nein", value: "true" },
            ]}
            field="no_feedback_yet"
            onClick={handleSelect}
            currentlySelected={values.no_feedback_yet}
            error={errors["no_feedback_yet"]}
          />
          {values.no_feedback_yet === "false" ? (
            <div>
             <div className='form-inputs'>
             <label className='form-label'>Number of reviews</label>
             <input
               name = "number_of_reviews"
               value={values.number_of_reviews}
               type="number"
               onChange={handleInput}
               placeholder=""
               className="property-input"
             />
             {errors["number_of_reviews"]}
           </div>
           <div className='form-inputs'>
             <label className='form-label'>Selers feedback</label>
             <input
               name = "selers_feedback"
               value={values.selers_feedback}
               type="number"
               onChange={handleInput}
               placeholder="fgdgd"
               className="property-input"
             />
             {errors["selers_feedback"]}
           </div>
           </div>
           
          ) : (
            <div></div>
          )}
          <SumbitButton caption="submit" onClick={handleSubmit}></SumbitButton>
        </div>
      </div>
    </div>
  );
};

export default EbayEstimatorStep2;
