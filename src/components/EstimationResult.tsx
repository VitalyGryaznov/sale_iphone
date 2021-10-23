import React, { useEffect, useState } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorInfo";
import EstimationResultDetails from "./ebay-estimator/EstimationResultDetails";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector } from "react-redux";
import { RootState } from "../redux/storets";
import validateFirstStepValues from "./validation/step1validation";
import validateSecondStepValues from "./validation/step2validation";
import { useHistory } from "react-router-dom";
import SumbitButton from "./ebay-estimator/SubmitEstimatorScreenButton";

const EstimationResult = () => {
  const history = useHistory();
  const phoneState = useSelector((state: RootState) => state);
  const values = {
    model: phoneState.phone.model,
    color: phoneState.phone.color,
    memory: phoneState.phone.memory,
    condition: phoneState.phone.condition,
    return_policy: phoneState.phone.return_policy,
    shipping_cost: phoneState.phone.shipping_cost,
    no_feedback_yet:
      phoneState.phone.no_feedback_yet !== null
        ? phoneState.phone.no_feedback_yet.toString()
        : null,
    selers_feedback: phoneState.phone.selers_feedback,
    number_of_reviews: phoneState.phone.number_of_reviews,
  };

  const [price, setPrice] = useState("");
  const [days, setDays] = useState("");
  const [loading, setLoading] = useState(true);

  const getResult = async () => {
    const response = await fetch(
      "https://www.mein-iphone-verkaufen.de/api/get_sales_estimation",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(phoneState.phone),
      }
    );
    const resultBody = await response.json();
    setPrice(resultBody.price);
    setDays(resultBody.days);
    setLoading(false);
  };

  useEffect(() => {
    const firstStepErrors = validateFirstStepValues(values);
    const secondStepErrors = validateSecondStepValues(values);
    if (
      Object.keys(firstStepErrors).length +
        Object.keys(secondStepErrors).length >
      0
    ) {
      console.log("result page error");
      console.log(secondStepErrors);
      history.push("/iphone-verkaufen-estimate/step-1");
    } else {
      window.scrollTo(0, 0);
    }
    getResult();
  }, []);

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto values={values} />
        </div>
        <div className="estimation_result">
          <EstimationResultDetails
            days={days}
            price={price}
            isLoading={loading}
          />
          <SumbitButton
            caption="STARTSEITE"
            onClick={() => {
              history.push("/iphone-verkaufen-estimate/step-1");
            }}
          ></SumbitButton>
          <div>
            *Verkauf und tatsächlich erzielter Verkaufspreis können nicht
            garantiert werden.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimationResult;
