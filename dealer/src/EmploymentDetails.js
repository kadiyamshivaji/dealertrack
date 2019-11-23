import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'

export default ({ touched, errors }) => (
  <Container>
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
    <Col>   <button name="yes" >yes</button>  </Col>
      <Col>   <button name="no" >No</button>  </Col>
    </Row>
    <Row>
      <h3>How much do you make?</h3>
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
    <h3>Additional Income (optional)</h3>
    <p>Allmany child support, or separete maintenance income need not be discolsed unless  relied upon credit</p>

    </Row>
    <Row>
      <button>
      Suffe/Appartment Number (optional)
      </button>
    </Row>
  </Container>
);
