import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap';
const RadioBox = ({ id, name, label, checked, ...props }) => (
  
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default ({ touched, errors }) => (
  <Container>
    <Row>
        <h2>Housing</h2>
      </Row>
     <Row>
     <select name="own" id="own"
       placeholder="Do you Own or rent ?"
       style={{ width: '100% '}} >
        <option value="Mortgage">Mortgage</option>                      
        <option value="Rent">Rent</option>
        <option value="Family">Family</option>
        <option value="Other">Other</option>
        <option value="OwnOutright">OwnOutright</option>
        <option value="Military">Military</option>
      </select>
    </Row>
    <Row>
      <Field name="Rent" id="Rent" placeholder='Monthly Mortgage/Rent' />
        {touched.Rent &&
          typeof errors.Rent === "string" &&(
            <div className="input-feedback">{errors.Rent}</div>
          )}
    </Row>
    <Row>
      <Field name="StreetAddress" id="StreetAddress" placeholder='Street Address' />
        {touched.StreetAddress &&
          typeof errors.StreetAddress === "string" &&(
            <div className="input-feedback">{errors.StreetAddress}</div>
          )}
    </Row>
    <Row>
      <Col>
      <Field name="City" id="City" placeholder='City' />
        {touched.City &&
          typeof errors.City === "string" &&(
            <div className="input-feedback">{errors.City}</div>
          )}
      </Col>
      <Col>
      <Field name="State" id="State" placeholder='State' />
        {touched.State &&
          typeof errors.State === "string" &&(
            <div className="input-feedback">{errors.State}</div>
          )}
      </Col>      
      <Col>
      <Field name="Zipcode" id="Zipcode" placeholder='Zipcode' />
        {touched.Zipcode &&
          typeof errors.Zipcode === "string" &&(
            <div className="input-feedback">{errors.Zipcode}</div>
          )}
      </Col>      
    </Row>
    <Row>
      <Field name="SuitNo" id="SuitNo" placeholder='Suite/Apt Number (optional)' />
        {touched.SuitNo &&
          typeof errors.SuitNo === "string" &&(
            <div className="input-feedback">{errors.SuitNo}</div>
          )}
    </Row>
    <Row>
      <p>Have you lived here for 2 years or more?</p>
    </Row>
    <Row>
      <Col>
      
    <Field
          name="present_at_home_visit"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="true"
              id="present_at_home_visit-0"
              // checked={values.present_at_home_visit === "true"}
              label="Yes"
            />
          )}
        />
        </Col>
        <Col>
        <Field
          name="present_at_home_visit"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="false"
              id="present_at_home_visit-1"
              // checked={values.present_at_home_visit === "false"}
              label="No"
            />
          )}
        /></Col>
    </Row>
    <Row>
      <hr></hr>
    </Row>
  </Container>
    
);
