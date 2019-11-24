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
      <Field name="FirstName" id="FirstName" placeholder='firstName' />
        {touched.FirstName &&
          typeof errors.FirstName === "string" &&(
            <div className="input-feedback">{errors.FirstName}</div>
          )}
    </Row>
    <Row>
      <Field name="LastName" id="LastName" placeholder='lastName' />
      {touched.LastName &&
          typeof errors.LastName === "string" &&(
            <div className="input-feedback">{errors.LastName}</div>
          )}
    </Row>
    <Row>
       <Field name="Phone" id="Phone" placeholder='phone'  />
       {touched.Phone &&
          typeof errors.Phone === "string" &&(
            <div className="input-feedback">{errors.Phone}</div>
          )}
    </Row>
    <Row>
       <Field name="Email" id="Email" placeholder='email'  />
       {touched.Email &&
          typeof errors.Email === "string" &&(
            <div className="input-feedback">{errors.Email}</div>
          )}
    </Row>
    <Row>
       <Field name="ConfirmEmail" id="ConfirmEmail" placeholder='confirmEmail'  />
       {touched.ConfirmEmail &&
          typeof errors.ConfirmEmail === "string" &&(
            <div className="input-feedback">{errors.ConfirmEmail}</div>
          )}
    </Row>
    <Row>
       <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
       <h5>Requireed for Identity Verification</h5>
       <p>if you are not ready to apply for credit and justwant to know your rates <a href='' >check them here</a></p>
    </Row>
    <Row>
         <DatePicker name="Datepicker" />
       {touched.Datepicker &&
          typeof errors.Datepicker === "string" &&(
            <div className="input-feedback">{errors.Datepicker}</div>
          )}
    </Row>
    <Row>
      <Col> 
          <Field name="Ssn" id="Ssn" placeholder='ssn'  />
          {touched.Ssn &&
              typeof errors.Ssn === "string" &&(
                <div className="input-feedback">{errors.Ssn}</div>
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
      <Field name="FirstNameJ" id="FirstNameJ" placeholder='FirstName' />
        {touched.FirstNameJ &&
          typeof errors.FirstNameJ === "string" &&(
            <div className="input-feedback">{errors.FirstNameJ}</div>
          )}
    </Row>
    <Row>
      <Field name="LastNameJ" id="LastNameJ" placeholder='LastName' />
      {touched.LastNameJ &&
          typeof errors.LastNameJ === "string" &&(
            <div className="input-feedback">{errors.LastNameJ}</div>
          )}
    </Row>
    <Row>
       <Field name="PhoneJ" id="PhoneJ" placeholder='Phone'  />
       {touched.PhoneJ &&
          typeof errors.PhoneJ === "string" &&(
            <div className="input-feedback">{errors.PhoneJ}</div>
          )}
    </Row>
    <Row>
       <Field name="EmailJ" id="EmailJ" placeholder='Email'  />
       {touched.EmailJ &&
          typeof errors.EmailJ === "string" &&(
            <div className="input-feedback">{errors.EmailJ}</div>
          )}
    </Row>
    <Row>
       <Field name="ConfirmEmailJ" id="ConfirmEmailJ" placeholder='ConfirmEmail'  />
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
          <Field name="SsnJ" id="SsnJ" placeholder='Ssn'  />
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
