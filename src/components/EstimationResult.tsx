import React, { useEffect, useState } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorPhoto";
import EstimationResultDetails from "./ebay-estimator/EstimationResultDetails";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/storets";


const EstimationResult = () => {
  const phoneState = useSelector((state: RootState) => state);
  const values = {
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

  const [price, setPrice] = useState("");
  const [days, setDays] = useState("");
  const [loading, setLoading] = useState(true);

  const getResult = async () => {
    //const response = await fetch("http://localhost:8000/get_sales_estimation", {
    const response = await fetch("https://www.mein-iphone-verkaufen.de/api/get_sales_estimation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(phoneState.phone),
    });
    const resultBody = await response.json();
    setPrice(resultBody.price);
    setDays(resultBody.days);
    setLoading(false);
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto values={values}/>
        </div>
        <div>
          <EstimationResultDetails days={days} price={price} isLoading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default EstimationResult;
