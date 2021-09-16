import React from "react";
import "./EbayEstimator.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/storets";
import phonesList from "../constants/phonesList";

const EbayEstimatorPhoto = (properties) => {
  const phoneState = useSelector((state: RootState) => state);
  const imageUrl = properties.values.model
    ? phonesList.filter((phone) => {
        return phone.value === properties.values.model;
      })[0].imageUrl
    : "/assets/iPhone_11_Pro.jpg";
  const getOptionIfDefined = (fieldName) => {
    return phoneState.phone[fieldName]
      ? phonesList
          .find((it) => it.value === phoneState.phone.model)!
          [fieldName].find((it) => it.value === phoneState.phone[fieldName])
          .title
      : "";
  };

  const description = `${
    phoneState.phone.model
      ? phonesList.find((it) => it.value === phoneState.phone.model)?.title
      : ""
  } ${getOptionIfDefined("memory")} ${getOptionIfDefined("color")}`;

  return (
    <div className="photo-container">
      <img src={imageUrl} alt="iphone"></img>
      <h4>{description}</h4>
    </div>
  );
};

export default EbayEstimatorPhoto;
