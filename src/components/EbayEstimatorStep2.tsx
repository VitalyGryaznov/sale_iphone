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
import { setValidationOption } from "../redux/validationSlices";

const EbayEstimatorStep2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const history = useHistory();
  const [numberOfReviews, setNumberOfReviews] = useState(
    phoneState.phone.number_of_reviews
  );
  const [feedback, setFeedback] = useState(phoneState.phone.selers_feedback);
  const [numberOfReviewsError, setNumberOfReviewsError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");

  const handleEmptyStates = () => {
    [
      "conditionValidationShow",
      "return_policyValidationShow",
      "no_feedback_yetValidationShow",
      "shipping_costValidationShow",
    ].forEach((field) =>
      dispatch(setValidationOption({ field: field, active: "true" }))
    );
    console.log((typeof phoneState.phone.no_feedback_yet === "boolean"))
    return (
      phoneState.phone.condition &&
      phoneState.phone.return_policy &&
      phoneState.phone.shipping_cost &&
      (typeof phoneState.phone.no_feedback_yet === "boolean") &&
      (numberOfReviewsError === "") &&
      (feedbackError === "")
    );
  };

  const submitForm = () => {
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
  };

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto />
        </div>
        <div>
          <PhoneProperties
            title="4. Zustand"
            options={condition}
            field="condition"
          />
          <PhoneProperties
            title="5. Rücknahmenoption"
            options={returnPolicy}
            field="return_policy"
          />
          <PhoneProperties
            title="6. Versandoption"
            options={shippingCost}
            field="shipping_cost"
          />
          <PhoneProperties
            title="7. Hast du bereits Bewertungen als eBay-Verkäufer?"
            options={[
              { title: "Ja", value: false },
              { title: "Nein", value: true },
            ]}
            field="no_feedback_yet"
          />
          {phoneState.phone.no_feedback_yet === false ? (
            <div className="properties">
              <div className="properties-list">
                <input
                  value={numberOfReviews}
                  type="text"
                  onChange={handleNumberOfReviewsState}
                  placeholder=""
                  className="property-input"
                ></input>
                {phoneState.validation.no_feedback_yetValidationShow === "true" ? (
                  <div>{numberOfReviewsError}</div>
                ) : (
                  <div></div>
                )}
                <input
                  value={feedback}
                  type="text"
                  onChange={handleFeedbackState}
                  placeholder=""
                  className="property-input"
                ></input>
                {phoneState.validation.no_feedback_yetValidationShow === "true" ? (
                  <div> {feedbackError}</div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <SumbitButton caption="submit" onClick={submitForm}></SumbitButton>
        </div>
      </div>
    </div>
  );
};

export default EbayEstimatorStep2;
