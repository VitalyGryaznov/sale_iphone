import React from "react";
import "./EbayEstimatorInfo.scss";
import phonesList from "../constants/phonesList";
import returnPolicy from "../constants/returnPolicy";
import shippingCost from "../constants/shippingCost";
import condition from "../constants/condition";

const EbayEstimatorInfo = (properties) => {
  const imageUrl = properties.values.model
    ? phonesList.filter((phone) => {
        return phone.value === properties.values.model;
      })[0].imageUrl
    : "/assets/iPhone_11_Pro.jpg";

  const getModelOptionIfDefined = (fieldName) => {
    return properties.values[fieldName]
      ? phonesList
          .find((it) => it.value === properties.values.model)!
          [fieldName].find((it) => it.value === properties.values[fieldName])
          .title
      : "";
  };

  const getOptionIfDefined = (fieldName, dictionary) => {
    return properties.values[fieldName]
      ? dictionary.find((it) => it.value === properties.values[fieldName])
          ?.title
      : "";
  };

  const getModelIfDefined = properties.values.model
    ? phonesList.find((it) => it.value === properties.values.model)?.title
    : "";

  return (
    <div className="info_container">
      <img className="info_image" src={imageUrl} alt="iphone"></img>
      <div>
        <div className="info_poperty">
          <div>
            <b className="info_title">Modell:</b>
            {getModelIfDefined}
          </div>
        </div>
        <div className="info_poperty">
          <div>
            <b className="info_title">Speicherkapazität:</b>
            {getModelOptionIfDefined("memory")}
          </div>
        </div>
        <div className="info_poperty">
          <div>
            <b className="info_title">Farbe:</b>
            {getModelOptionIfDefined("color")}
          </div>
        </div>
        <div className="info_poperty">
          <div>
            <b className="info_title">Zustand:</b>
            {getOptionIfDefined("condition", condition)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbayEstimatorInfo;
