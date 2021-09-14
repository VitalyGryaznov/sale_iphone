import React from "react";
import { Link } from "react-router-dom";
import "./EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../../redux/slices";
import { AppDispatch, RootState } from "../../redux/storets";

const ProperySelect = (property) => {

  return (
    <div className="property-wrapper" onClick={property.onClick} data-name={property.field} data-value={property.value}>
      <div className="property-select">
        <div
          className={`property-select__value + ${
            property.currentlySelected === property.value
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
