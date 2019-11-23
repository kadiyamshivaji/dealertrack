import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'
import { FaLock } from 'react-icons/fa';
import DatePicker from "./lib/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

export default ({ touched, errors }) => (
  <Container>
    <Row>
     <label>Welcome <firstName></firstName></label>
    </Row>
    <Row>
     <label>Do you know your credit score?</label>
    </Row>
    <Row>
     <label>Do you know your credit scorkjfskdjfsjdfksjf
         sfdksdflsf
         sjdfksjfs
         skfdhskfksf
         jskdfj?</label>
    </Row>
    <Row>
      <Field name="LastNameL" id="LastNameL" placeholder='LastName' />
      {touched.LastNameL &&
          typeof errors.LastNameL === "string" &&(
            <div className="input-feedback">{errors.LastNameL}</div>
          )}
    </Row>
    <Row>
      <Field name="PhoneL" id="PhoneL" placeholder='Phone' />
      {touched.PhoneL &&
          typeof errors.PhoneL === "string" &&(
            <div className="input-feedback">{errors.PhoneL}</div>
          )}
    </Row>
    <Row>
      <Field name="EmailL" id="EmailL" placeholder='Email' />
      {touched.EmailL &&
          typeof errors.EmailL === "string" &&(
            <div className="input-feedback">{errors.EmailL}</div>
          )}
    </Row>
    <Row>
     <button>Get my Credit Rating </button>
    </Row>
    <Row>
     <button>Start Credit Application</button>
    </Row>
</Container>

  
);
