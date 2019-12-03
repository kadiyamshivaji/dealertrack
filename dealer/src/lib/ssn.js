import React from "react";
import { useField, useFormikContext } from "formik";
import NumberFormat from "react-number-format";

export const  SSNField= ({ ...props }) => {
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
    placeholder="Social Security Number"
    format="###-##-####"
  />
  );
};

export default SSNField;
