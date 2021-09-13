import React, { useEffect, useState } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorPhoto";
import PhoneProperties from "./ebay-estimator/PhoneProperties";
import SumbitButton from "./ebay-estimator/SubmitEstimatorScreenButton";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../redux/slices";
import { setValidationOption } from "../redux/validationSlices";
import { AppDispatch, RootState } from "../redux/storets";
import phonesList from "./constants/phonesList";
import { useHistory } from "react-router-dom";

const EbayEstimatorStep1 = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const modelsList = phonesList.map((phone) => ({
    title: phone.title,
    value: phone.value,
  }));
  const memoryList = phoneState.phone.model
    ? phonesList.filter((phone) => {
        return phone.value == phoneState.phone.model;
      })[0].memory
    : null;
  const colorList = phoneState.phone.model
    ? phonesList.filter((phone) => {
        return phone.value == phoneState.phone.model;
      })[0].color
    : null;

  const handleEmptyStates = () => {
    [
      "modelValidationShow",
      "colorValidationShow",
      "memoryValidationShow",
    ].forEach((field) =>
      dispatch(setValidationOption({ field: field, active: "true" }))
    );
    return (
      phoneState.phone.model &&
      phoneState.phone.color &&
      phoneState.phone.memory
    );
  };

  const submitForm = () => {
    if (handleEmptyStates()) {
      history.push("/iphone-verkaufen-estimate/step-2");
    }
  };

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto />
        </div>
        <div>
          <h1 className="estimator-header">
            Finde heraus, wie schnell und für wie viel du dein iPhone bei{" "}
            <img
              className="estimator-header__logo"
              src="/assets/ebay.png"
            ></img>{" "}
            verkaufen könntest
          </h1>
          <PhoneProperties
            title="1. Select your model"
            options={modelsList}
            field="model"
          />
          <PhoneProperties
            title="2. Select memory"
            options={memoryList}
            field="memory"
          />
          <PhoneProperties
            title="3. Select color"
            options={colorList}
            field="color"
          />
          <SumbitButton caption="submit" onClick={submitForm}></SumbitButton>
        </div>
      </div>
    </div>
  );
};

export default EbayEstimatorStep1;
