import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'
import { FaLock } from 'react-icons/fa';
import DatePicker from "./lib/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>{label}</label>
  </div>
);
export default ({ touched, errors,values }) => (
  <Container>
      <Row>
<h2>Contact Info </h2>
      </Row>
        <br/>
      <Row>
          <h5>Application Type</h5>
      </Row>
    <Row>
      <Col>
        <Field
          name="Form_Type"
          render={({ field }) => (
            <RadioBox
              {...field}
              css= {values.Form_Type === "true" ? 'active' : ''}
              value="true"
              id="present_at_home_visit-0"
              // checked={values.present_at_home_visit === "true"}
              label="Individual"
            />
          )}
        />
      </Col>
      <Col>
        <Field
          name="Form_Type"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="false"
              css= {values.Form_Type ==="false" ? 'active' : ''}
              id="present_at_home_visit-1"
              // checked={values.present_at_home_visit === "false"}
              label="Joint"
            />
          )}
        />
      </Col>
        </Row>
    <Row>
      <Field name="firstName" id="firstName" placeholder='firstName' />
        {touched.firstName &&
          typeof errors.firstName === "string" &&(
            <div className="input-feedback">{errors.firstName}</div>
          )}
    </Row>
    <Row>
      <Field name="lastName" id="lastName" placeholder='lastName' />
      {touched.lastName &&
          typeof errors.lastName === "string" &&(
            <div className="input-feedback">{errors.lastName}</div>
          )}
    </Row>
    <Row>
       <Field name="phone" id="phone" placeholder='phone'  />
       {touched.phone &&
          typeof errors.phone === "string" &&(
            <div className="input-feedback">{errors.phone}</div>
          )}
    </Row>
    <Row>
       <Field name="email" id="email" placeholder='email'  />
       {touched.email &&
          typeof errors.email === "string" &&(
            <div className="input-feedback">{errors.email}</div>
          )}
    </Row>
    <Row>
       <Field name="confirmEmail" id="confirmEmail" placeholder='confirmEmail'  />
       {touched.confirmEmail &&
          typeof errors.confirmEmail === "string" &&(
            <div className="input-feedback">{errors.confirmEmail}</div>
          )}
    </Row>
    <Row>
       <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
       <h5>Requireed for Identity Verification</h5>
       <p>if you are not ready to apply for credit and justwant to know your rates <a href='' >check them here</a></p>
    </Row>
    <Row>
         <DatePicker name="datepicker" />
       {/* <Field name="datepicker" id="datepicker" placeholder='datepicker'  /> */}
       {touched.datepicker &&
          typeof errors.datepicker === "string" &&(
            <div className="input-feedback">{errors.datepicker}</div>
          )}
    </Row>
    <Row>
      <Col> 
          <Field name="ssn" id="ssn" placeholder='ssn'  />
          {touched.ssn &&
              typeof errors.ssn === "string" &&(
                <div className="input-feedback">{errors.ssn}</div>
              )}
      </Col>
      <Col>
         <label><FaLock></FaLock> SSL Secure Connection</label>
      </Col>     
    </Row>
    <Row>
       <p>Your Social Security Number is required to ensure we're reviewing the correct credit report while we consider your application </p>
    </Row>
    <Row>
      <hr></hr>
    </Row>
    
    { values.Form_Type ==="false" &&
    <div> 
     <Row>
      <h6>Co-Application Name</h6>
    </Row>
    <Row>
      <Field name="FirstNameJ" id="FirstNameJ" placeholder='FirstNameJ' />
        {touched.FirstNameJ &&
          typeof errors.FirstNameJ === "string" &&(
            <div className="input-feedback">{errors.FirstNameJ}</div>
          )}
    </Row>
    <Row>
      <Field name="LastNameJ" id="LastNameJ" placeholder='LastNameJ' />
      {touched.LastNameJ &&
          typeof errors.LastNameJ === "string" &&(
            <div className="input-feedback">{errors.LastNameJ}</div>
          )}
    </Row>
    <Row>
       <Field name="PhoneJ" id="PhoneJ" placeholder='PhoneJ'  />
       {touched.PhoneJ &&
          typeof errors.PhoneJ === "string" &&(
            <div className="input-feedback">{errors.PhoneJ}</div>
          )}
    </Row>
    <Row>
       <Field name="EmailJ" id="EmailJ" placeholder='EmailJ'  />
       {touched.EmailJ &&
          typeof errors.EmailJ === "string" &&(
            <div className="input-feedback">{errors.EmailJ}</div>
          )}
    </Row>
    <Row>
       <Field name="ConfirmEmailJ" id="ConfirmEmailJ" placeholder='ConfirmEmailJ'  />
       {touched.ConfirmEmailJ &&
          typeof errors.ConfirmEmailJ === "string" &&(
            <div className="input-feedback">{errors.ConfirmEmailJ}</div>
          )}
    </Row>
    <Row>
       <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
       <h5>Requireed for Identity Verification</h5>
       <p>if you are not ready to apply for credit and justwant to know your rates <a href='' >check them here</a></p>
    </Row>
    <Row>
         <DatePicker name="DatepickerJ" />
       {touched.DatepickerJ &&
          typeof errors.DatepickerJ === "string" &&(
            <div className="input-feedback">{errors.DatepickerJ}</div>
          )}
    </Row>
    <Row>
      <Col> 
          <Field name="SsnJ" id="SsnJ" placeholder='SsnJ'  />
          {touched.SsnJ &&
              typeof errors.SsnJ === "string" &&(
                <div className="input-feedback">{errors.SsnJ}</div>
              )}
      </Col>
      <Col>
         <label><FaLock></FaLock> SSL Secure Connection</label>
      </Col>     
    </Row>
    <Row>
       <p>Your Social Security Number is required to ensure we're reviewing the correct credit report while we consider your application </p>
    </Row> 
    <Row>
      <hr></hr>
    </Row>
    </div>
    }
</Container>

  
);
