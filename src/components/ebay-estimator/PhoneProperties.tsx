import React from "react";
import { Link } from "react-router-dom";
import "./EbayEstimator.scss";
import PropertySelect from "./PropertySelect";

const PhoneProperties = (props) => {

  return (
    <div className="properties">
      <h2>{props.title}</h2>
      <div className="properties-list">
        {props.options
          ? props.options.map((obj) => (
              <PropertySelect
                key={props.field + obj.value + obj.title}
                title={obj.title}
                field={props.field}
                value={obj.value}
                onClick={props.onClick}
                currentlySelected={props.currentlySelected}
              ></PropertySelect>
            ))
          : ""}
      </div>
      <div>{props.error}</div>
    </div>
  );
};

export default PhoneProperties;
