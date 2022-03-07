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
import { db } from "../firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";

const EstimationResult = () => {
  const history = useHistory();
  const phoneState = useSelector((state: RootState) => state);
  const values = {
    model: phoneState.phone.model,
    color: phoneState.phone.color,
    memory: phoneState.phone.memory,
    condition: phoneState.phone.condition,
  };

  const [price, setPrice] = useState("");
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(true);
  const phonesCollectionRef = collection(db, "phones");

  const getResult = async () => {
    /*const response = await fetch(
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
    setLoading(false);*/
    console.log(values);
    let q = query(
      phonesCollectionRef,
      where("model", "==", values.model),
      where("color", "==", values.color),
      where("memory", "==", values.memory),
      where("condition", "==", values.condition)
    );
    let data = await getDocs(q);
    // there some cases when combination of memory and color doesn't exists, but customer can choose it:
    if (data.empty) {
      q = query(
        phonesCollectionRef,
        where("model", "==", values.model),
        where("memory", "==", values.memory),
        where("condition", "==", values.condition)
      );
      data = await getDocs(q);
    }
    setEmpty(data.empty);
    data.forEach((doc) => {
      setPrice(doc.data()["price"]);
    });
    setLoading(false);
  };

  useEffect(() => {
    const firstStepErrors = validateFirstStepValues(values);
    const secondStepErrors = validateSecondStepValues(values);
    if (Object.keys(firstStepErrors).length > 0) {
      console.log("result page error");
      console.log(secondStepErrors);
      history.push("/iphone-ankauf-wert-ebay");
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
            price={price}
            isLoading={loading}
            noData={empty}
          />
          <SumbitButton
            caption="NEU BERECHNEN"
            onClick={() => {
              history.push("/iphone-ankauf-wert-ebay");
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
