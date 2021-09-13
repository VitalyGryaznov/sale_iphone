import React from "react";
import "./EbayEstimator.scss";

const SumbitButton = (property) => {
  return (
    <div className="submit-button-wrapper" onClick={property.onClick}>
      <div className="submit-button">
        <div className="submit-button__caption">{property.caption}</div>
      </div>
    </div>
  );
};

export default SumbitButton;
