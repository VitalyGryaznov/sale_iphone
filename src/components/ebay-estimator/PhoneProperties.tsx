import React from "react";
import "./PhoneProperties.scss";
import PropertySelect from "./PropertySelect";

const PhoneProperties = (props) => {

  return (
    <div className="properties_container">
      <h2>{props.title}</h2>
      { (props.error) ? <div className="properties_error">{props.error}</div> : null}
      <div className="properties_list">
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
    </div>
  );
};

export default PhoneProperties;
