import React, { useEffect } from "react";
import EbayEstimatorPhoto from "./ebay-estimator/EbayEstimatorInfo";
import PhoneProperties from "./ebay-estimator/PhoneProperties";
import SumbitButton from "./ebay-estimator/SubmitEstimatorScreenButton";
import "./ebay-estimator/EbayEstimator.scss";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../redux/slices";
import { AppDispatch, RootState } from "../redux/storets";
import condition from "./constants/condition";
import returnPolicy from "./constants/returnPolicy";
import shippingCost from "./constants/shippingCost";
import { useHistory } from "react-router-dom";
import useForm from "./useForm";
import validateFirstPageValues from "./validation/step1validation";
import validate from "./validation/step2validation";
import { TextField, InputAdornment } from "@material-ui/core";

const EbayEstimatorStep2 = () => {
  const dispatch = useDispatch<AppDispatch>();
  const phoneState = useSelector((state: RootState) => state);
  const history = useHistory();
  const initialValues = {
    model: phoneState.phone.model,
    color: phoneState.phone.color,
    memory: phoneState.phone.memory,
    condition: phoneState.phone.condition,
    return_policy: phoneState.phone.return_policy,
    shipping_cost: phoneState.phone.shipping_cost,
    no_feedback_yet:
      phoneState.phone.no_feedback_yet !== null
        ? phoneState.phone.no_feedback_yet.toString()
        : null,
    selers_feedback: phoneState.phone.selers_feedback,
    number_of_reviews: phoneState.phone.number_of_reviews,
  };

  const { handleSelect, handleInput, handleSubmit, values, setValues, errors } =
    useForm(initialValues, validate, () => {
      dispatch(setOption({ field: "condition", value: values.condition }));
      dispatch(
        setOption({ field: "return_policy", value: values.return_policy })
      );
      dispatch(
        setOption({ field: "shipping_cost", value: values.shipping_cost })
      );
      dispatch(
        setOption({ field: "selers_feedback", value: values.selers_feedback })
      );
      dispatch(
        setOption({ field: "no_feedback_yet", value: values.no_feedback_yet })
      );
      dispatch(
        setOption({
          field: "number_of_reviews",
          value: values.number_of_reviews,
        })
      );
      dispatch(
        setOption({
          field: "no_feedback_yet",
          value: values.no_feedback_yet === "true",
        })
      );
      history.push("/iphone-verkaufen-estimate/result");
    });

  const firstPagelValues = {
    model: phoneState.phone.model,
    color: phoneState.phone.color,
    memory: phoneState.phone.memory,
  };

  useEffect(() => {
    const errors = validateFirstPageValues(firstPagelValues);
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      history.push("/iphone-verkaufen-estimate/step-1");
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="main-container">
      <div className="ebay-estimator">
        <div>
          <EbayEstimatorPhoto values={values} />
        </div>
        <div>
          <PhoneProperties
            title="4. Zustand auswählen"
            options={condition}
            field="condition"
            onClick={handleSelect}
            currentlySelected={values.condition}
            error={errors["condition"]}
          />
          <PhoneProperties
            title="5. Rücknahmenoption auswählen"
            options={returnPolicy}
            field="return_policy"
            onClick={handleSelect}
            currentlySelected={values.return_policy}
            error={errors["return_policy"]}
          />
          <PhoneProperties
            title="6. Versandoption auswählen"
            options={shippingCost}
            field="shipping_cost"
            onClick={handleSelect}
            currentlySelected={values.shipping_cost}
            error={errors["shipping_cost"]}
          />
          <PhoneProperties
            title="7. Hast du bereits Bewertungen als eBay-Verkäufer?"
            options={[
              { title: "Ja", value: "false" },
              { title: "Nein", value: "true" },
            ]}
            field="no_feedback_yet"
            onClick={handleSelect}
            currentlySelected={values.no_feedback_yet}
            error={errors["no_feedback_yet"]}
          />
          {values.no_feedback_yet === "false" ? (
            <div className="form_inputs">
              <div className="form_input">
                <TextField
                  fullWidth
                  label="Anzahl der Bewertungen"
                  name="number_of_reviews"
                  value={values.number_of_reviews}
                  type="number"
                  onChange={handleInput}
                  autoComplete="off"
                  inputProps={{ maxLength: 7 }}
                  required
                  error={errors["number_of_reviews"]}
                  helperText={
                    errors["number_of_reviews"] !== ""
                      ? errors["number_of_reviews"]
                      : "Bitte geben Sie Ihre Anzahl ein."
                  }
                />
              </div>
              <div className="form_input">
                <TextField
                  fullWidth
                  label="Prozentsatz der positiven Bewertungen"
                  name="selers_feedback"
                  value={values.selers_feedback}
                  type="number"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">%</InputAdornment>
                    ),
                  }}
                  onChange={handleInput}
                  autoComplete="off"
                  inputProps={{ maxLength: 3 }}
                  required
                  error={errors["selers_feedback"]}
                  helperText={
                    errors["selers_feedback"] !== ""
                      ? errors["selers_feedback"]
                      : "Bitte geben Sie die Zahl von 1 bis 100 ein."
                  }
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <SumbitButton
            caption="VERKAUFPROGNOSE ERHALTEN"
            onClick={handleSubmit}
          ></SumbitButton>
        </div>
      </div>
    </div>
  );
};

export default EbayEstimatorStep2;
