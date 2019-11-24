import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap';
import { FaPlusCircle} from 'react-icons/fa';

const RadioBox = ({ id, name, label, checked,css, ...props }) => (
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>{label}</label>
  </div> 
);
export default ({ touched, errors,values }) => (
  <Container>
     <Row>
        <h2>Employment</h2>
      </Row>
    <Row>
      <select 
        style={{ width: '100% '}}>
        <option value="dd">Employment Status </option>
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
          name="Having_Two_years_Employement"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="true"
              css= {values.Having_Two_years_Employement === "true" ? 'active' : 'label'}
              id="present_at_home_visit-0"
              label="Yes"
            />
          )}
        />
        </Col>
        <Col>
        <Field
          name="Having_Two_years_Employement"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="false"
              css= {values.Having_Two_years_Employement === "false" ? 'active' : 'label'}
              id="present_at_home_visit-1"
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
      <p>
      <FaPlusCircle/> Add Additional Income
      </p>
    </Row>
    <Row>
      <hr></hr>
    </Row>
    { values.Form_Type ==="false" &&
    <div>
      <Row>
          <h6>Co-Application Employment</h6>
      </Row>
    <Row>
      <select 
        style={{ width: '100% '}}>
        <option value="dd">Employment Status </option>
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
      <Field name="EmployerJ" id="Employer" placeholder='Employer' />
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
          name="Having_Two_years_EmployementJ"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="true"
              css= {values.Having_Two_years_EmployementJ === "true" ? 'active' : 'label'}
              id="present_at_home_visit-0"
              label="Yes"
            />
          )}
        />
        </Col>
        <Col>
        <Field
          name="Having_Two_years_EmployementJ"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="false"
              css= {values.Having_Two_years_EmployementJ === "false" ? 'active' : 'label'}
              id="present_at_home_visit-1"
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
      <Field name="MoneyJ" id="Money" placeholder='Money' />
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
      <p>
      <FaPlusCircle/> Add Additional Income
      </p>
    </Row>
    <Row>
      <hr></hr>
    </Row>
      </div>
    }
  </Container>
);
