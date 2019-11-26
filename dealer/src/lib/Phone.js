import React from "react";
import { useField, useFormikContext } from "formik";
import PhoneInput from "react-phone-number-input/basic-input";

export const PhoneField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <PhoneInput
    {...field}
      {...props}
    country="US"
      placeholder='Phone'
      value={field.value}
      maxLength="15"
      onChange={val => {
        //   if(val===''){
        //     setErrors("Phone required")
        //   }
        // setFieldTouched(field.name);
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default PhoneField;
