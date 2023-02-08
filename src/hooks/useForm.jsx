
import React, { useState } from 'react';

export const useForm = (initialState = {}) => {
  
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({target}) => {
    setFormValues({
        ...formValues,
        [target.name]:target.value
    });
  };

  const resetForm = () => {
    setFormValues(initialState)
  }

    return {
        formValues,
        setFormValues,
    // eslint-disable-next-line indent
        handleInputChange,
        resetForm
  };
};
