import React from "react";
import { Link } from "react-router-dom";
import "./EbayEstimator.scss";
import PropertySelect from "./PropertySelect";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/storets";

const PhoneProperties = (props) => {
  console.log(props.options);

  const phoneState = useSelector((state: RootState) => state);
  const ValidationMessage = () => {
    if (
      phoneState.validation[props.field + "ValidationShow"] === "true" &&
      (typeof phoneState.phone[props.field] === "undefined" ||
        phoneState.phone[props.field] === "")
    ) {
      return <div>Please select value</div>;
    } else {
      return <div></div>;
    }
  };

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
              ></PropertySelect>
            ))
          : ""}
      </div>
      <ValidationMessage />
    </div>
  );
};

export default PhoneProperties;
