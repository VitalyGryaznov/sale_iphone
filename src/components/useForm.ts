import { useState, useEffect } from "react";

const useForm = (initialValues, validate, callbackOnSuccesfullSubit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelect = (e) => {
    const name = e.currentTarget.getAttribute("data-name");
    const value = e.currentTarget.getAttribute("data-value");
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const scrollToTheFirstError = () => {
    const firstError = document.querySelectorAll(".properties_error");
    let headerHeigth = 60;
    firstError[0]?.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if (firstError[0] && scrolledY) {
      window.scroll(0, scrolledY - headerHeigth);
    }
  };

  const handleSubmit = (e) => {
    const errors = validate(values);
    setIsSubmitting(true);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      callbackOnSuccesfullSubit();
    } else {
      scrollToTheFirstError();
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      setErrors(validate(values));
    }
  }, [values]);

  useEffect(() => {
    const firstError = document.querySelectorAll(".properties_error");
    let headerHeigth = 60;
    firstError[0]?.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if (scrolledY) {
      window.scroll(0, scrolledY - headerHeigth);
    }
  }, [isSubmitting]);

  return { handleSelect, handleInput, handleSubmit, values, setValues, errors };
};

export default useForm;
