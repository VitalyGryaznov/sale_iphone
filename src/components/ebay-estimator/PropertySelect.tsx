import React from "react";
import { Link } from "react-router-dom";
import "./EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../../redux/slices";
import { AppDispatch, RootState } from "../../redux/storets";

const ProperySelect = (property) => {
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const select = () => {
    dispatch(setOption({ field: property.field, value: property.value }));
    if (property.field === "model") {
      dispatch(setOption({ field: "color", value: "" }));
      dispatch(setOption({ field: "memory", value: "" }));
    }
  };

  return (
    <div className="property-wrapper" onClick={select}>
      <div className="property-select">
        <div
          className={`property-select__value + ${
            phoneState.phone[property.field] === property.value
              ? "property-select__value_selected"
              : "property-select__value_not-selected"
          }`}
        >
          {property.title}
        </div>
      </div>
    </div>
  );
};

export default ProperySelect;
