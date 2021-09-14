import { useState, useEffect } from 'react';

const useForm = (initialValues, validate, callbackOnSuccesfullSubit) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSelect = e => {
      const name = e.currentTarget.getAttribute('data-name');
      const value = e.currentTarget.getAttribute('data-value');
      setValues({
        ...values,
        [name]: value
      });
    };

    const handleInput = e => {
      const { name, value } = e.target;
      setValues({
      ...values,
      [name]: value
    });
    };
  
    const handleSubmit = e => {
      setIsSubmitting(true);
      setErrors(validate(values));
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callbackOnSuccesfullSubit();
      }
    };
    
  
    useEffect(
      () => {
        if (isSubmitting) {
          setErrors(validate(values));
        }
      },
      [values]
    );
  
    return { handleSelect, handleInput, handleSubmit, values, setValues, errors };
  };
  
  export default useForm;