import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'
import { FaLock } from 'react-icons/fa';
import DatePicker from "./lib/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

export default ({ touched, errors }) => (
  <Container>
    <p>ryrtyrt{process.env.ENV}</p>
    <Row>
      <Col><button className='active' name="Individual">Individual</button></Col>
      <Col><button name="Individual" >Joint</button></Col>
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
    <h3 className="h6">Co-Application Name</h3>
</Container>

  
);
