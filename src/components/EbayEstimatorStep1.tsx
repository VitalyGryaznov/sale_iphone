import React, { useEffect } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorInfo";
import PhoneProperties from "./ebay-estimator/PhoneProperties";
import SumbitButton from "./ebay-estimator/SubmitEstimatorScreenButton";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../redux/slices";
import { AppDispatch, RootState } from "../redux/storets";
import phonesList from "./constants/phonesList";
import { useHistory } from "react-router-dom";
import useForm from "./useForm";
import validate from "./validation/step1validation";

const EbayEstimatorStep1 = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const initialValues = {
    model: phoneState.phone.model,
    color: phoneState.phone.color,
    memory: phoneState.phone.memory,
  };

  const { handleSelect, handleSubmit, handleInput, values, setValues, errors } =
    useForm(initialValues, validate, () => {
      dispatch(setOption({ field: "model", value: values.model }));
      dispatch(setOption({ field: "color", value: values.color }));
      dispatch(setOption({ field: "memory", value: values.memory }));
      history.push("/iphone-verkaufen-estimate/step-2");
    });

  const modelsList = phonesList.map((phone) => ({
    title: phone.title,
    value: phone.value,
  }));
  const memoryList = values.model
    ? phonesList.filter((phone) => {
        return phone.value === values.model;
      })[0].memory
    : null;
  const colorList = values.model
    ? phonesList.filter((phone) => {
        return phone.value === values.model;
      })[0].color
    : null;

  const handleModelSelect = (e) => {
    setValues({
      model: e.currentTarget.getAttribute("data-value"),
      color: "",
      memory: "",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto values={values} />
        </div>
        <div>
          <h1 className="estimator-header">
            Finde heraus, wie schnell und f??r wie viel du dein iPhone bei{" "}
            <img
              className="estimator-header__logo"
              src="/assets/ebay.png"
              alt="ebay logo"
            ></img>{" "}
            verkaufen k??nntest
          </h1>
          <PhoneProperties
            title="1. Modell deines iPhones"
            options={modelsList}
            field="model"
            onClick={handleModelSelect}
            currentlySelected={values.model}
            error={errors["model"]}
          />
          <PhoneProperties
            title="2. Speicherkapazit??t ausw??hlen"
            options={memoryList}
            field="memory"
            onClick={handleSelect}
            currentlySelected={values.memory}
            error={errors["memory"]}
          />
          <PhoneProperties
            title="3. Farbe ausw??hlen"
            options={colorList}
            field="color"
            onClick={handleSelect}
            currentlySelected={values.color}
            error={errors["color"]}
          />
          <SumbitButton caption="WEITER" onClick={handleSubmit}></SumbitButton>
        </div>
      </div>
    </div>
  );
};

export default EbayEstimatorStep1;
