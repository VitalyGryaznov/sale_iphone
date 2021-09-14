export default function validateInfo(values) {
  interface Values {
    condition?: string;
    return_policy?: string;
    shipping_cost?: string;
    no_feedback_yet?: string;
    selers_feedback?: string;
    number_of_reviews?: string;
  }

  let errors: Values = {};

  if (!values.condition) {
    errors.condition = "Bitte Zustand auswählen";
  }

  if (!values.return_policy) {
    errors.return_policy = "Bitte Versandoption auswählen";
  }

  if (!values.no_feedback_yet) {
    errors.no_feedback_yet = "Bitte auswählen";
  }

  if (values.no_feedback_yet === "false") {
    if (values.selers_feedback === "") {
      errors.selers_feedback = "Bitte geben Sie Ihre Prozentsatz ein";
    } else if (values.selers_feedback < 0 || values.selers_feedback > 100) {
      errors.selers_feedback = "Bitte geben Sie Ihre Prozentsatz ein";
    }

    if (values.number_of_reviews === "") {
      errors.number_of_reviews = "Bitte geben Sie Ihre Anzahl ein";
    } else if (values.number_of_reviews < 0) {
      errors.number_of_reviews = "Bitte geben Sie Ihre Prozentsatz ein.";
    }
  }

  return errors;
}
