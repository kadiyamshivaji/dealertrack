import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'
const RadioBox = ({ id, name, label, checked, ...props }) => (
  
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label htmlFor={id}>{label}</label>
  </div>
);
export default ({ touched, errors }) => (
  <Container>
     <Row>
        <h2>Employment</h2>
      </Row>
    <Row>
    <select 
               placeholder="Employment Status "
               style={{ width: '100% '}}>
              <option value="Employed">Employed</option>
              <option value="Unemployed">Unemployed</option>
              <option value="Self-Employed">Self-Employed</option>
              <option value="Student">Student</option>
              <option value="Retired">Retired</option>
              <option value="Active Military">Active Military</option>
              <option value="Retired Military">Retired Military</option>
              <option value="Others">Others</option>
            </select>
    </Row>
    <Row>
      <Field name="Employer" id="Employer" placeholder='Employer' />
        {touched.Employer &&
          typeof errors.Employer === "string" &&(
            <div className="input-feedback">{errors.Employer}</div>
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
      <h5>How much do you make?</h5>
      </Row>

<Row>   
     <p>Please include salary wages and bonuses but not other sources like child support or housing allowance</p>
    </Row>
    <Row>
      <Col>
      <Field name="Money" id="Money" placeholder='Money' />
        {touched.Money &&
          typeof errors.Money === "string" &&(
            <div className="input-feedback">{errors.Money}</div>
          )}
      </Col>
      <Col>
      <select 
          placeholder="select your pay"
           style={{ width: '100% '}} >
          <option value="m">Monthly</option>
          <option value="a">Yearly</option>
      </select>,
      </Col>
    </Row>
    <Row>
    <h5>Additional Income (optional)</h5>
    </Row>
    <Row>
    <p>Allmany child support, or separete maintenance income need not be discolsed unless  relied upon credit</p>

    </Row>
    <Row>
      <button>
      Suffe/Appartment Number (optional)
      </button>
    </Row>
  </Container>
);
