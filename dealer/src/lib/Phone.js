import React from "react";
import { useField, useFormikContext } from "formik";
import NumberFormat from "react-number-format";

export const  PhoneField= ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <NumberFormat
    {...field}
    {...props}
    onValueChange={value => {
        setFieldValue(field.name, value);
    }}
    name={field.name}
    value={field.value}
    placeholder="(555) 555-5555"
    format="(###) ###-####"
  />
  );
};

export default PhoneField;
