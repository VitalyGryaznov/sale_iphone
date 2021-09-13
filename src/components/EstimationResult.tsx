import React, { useEffect, useState } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorPhoto";
import EstimationResultDetails from "./ebay-estimator/EstimationResultDetails";
import SumbitButton from "./ebay-estimator/SubmitEstimatorScreenButton";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../redux/slices";
import { AppDispatch, RootState } from "../redux/storets";
import condition from "./constants/condition";

const EstimationResult = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const submitForm = () => {};

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto />
        </div>
        <div>
          <EstimationResultDetails options={condition} field="condition" />
        </div>
      </div>
    </div>
  );
};

export default EstimationResult;
