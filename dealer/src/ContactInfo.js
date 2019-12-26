/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import DatePickerField from "./lib/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaQuestionCircle } from "react-icons/fa";
import PhoneField from "./lib/Phone";
import SSNField from "./lib/ssn";

const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div>
    <input type="checkbox" id={id} name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>
      <p className="remove">X Remove</p>
    </label>
  </div>
);

export default ({ touched, errors, values, details }) => (
  <Container>
    <Row>
      <Col>
        <img alt="" src={require("./assests/images/car.PNG")} />
      </Col>
      <Col xs={10}>
        <Row className="heading-style">Personal Information</Row>
        <Row className="sub-title">
          <p>We need a few details about you to start your application.</p>
        </Row>
      </Col>
    </Row>
    {values.IsCoApplicantFormEnable && (
      <Row>
        <h6>Primary Applicant</h6>
      </Row>
    )}
    <Row>
      <Col>
        <p className="place-holder">First Name</p>
        <Field name="FirstName" id="FirstName" placeholder="First Name" />
        {touched.FirstName && typeof errors.FirstName === "string" && (
          <div className="input-feedback">{errors.FirstName}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">Last Name</p>
        <Field name="LastName" id="LastName" placeholder="Last Name" />
        {touched.LastName && typeof errors.LastName === "string" && (
          <div className="input-feedback">{errors.LastName}</div>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="place-holder">Email</p>
        <Field name="Email" id="Email" placeholder="Email" />
        {touched.Email && typeof errors.Email === "string" && (
          <div className="input-feedback">{errors.Email}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">Verify Email</p>
        <Field
          name="ConfirmEmail"
          id="ConfirmEmail"
          placeholder="Verify Email"
        />
        {touched.ConfirmEmail && typeof errors.ConfirmEmail === "string" && (
          <div className="input-feedback">{errors.ConfirmEmail}</div>
        )}
      </Col>
    </Row>

    <Row>
      <Col>
        <p className="place-holder">Phone</p>
        <PhoneField placeholder="Phone" name="Phone" />
        {touched.Phone && typeof errors.Phone === "string" && (
          <div className="input-feedback">{errors.Phone}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">
          Date Of Birth <FaQuestionCircle className="hint" />{" "}
        </p>
        <DatePickerField placeholder="Date of Birth" name="DateOfBirth" />
        {touched.DateOfBirth && typeof errors.DateOfBirth === "string" && (
          <div className="input-feedback">{errors.DateOfBirth}</div>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="place-holder">
          Social Security Number <FaQuestionCircle className="hint" />
        </p>
        <SSNField name="Ssn" />
        {touched.Ssn && typeof errors.Ssn === "string" && (
          <div className="input-feedback">{errors.Ssn}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <Row>
          <Col className="credit-score-icon">
            <img alt="" src={require("./assests/images/computer.PNG")} />
          </Col>
          <Col className="score" xs={10}>
            <p className="place-holder">Credit Score</p>
            <p>
              If you are not ready to apply for credit and just want to know
              your rates,<a>click here</a>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
    {values.IsCoApplicantFormEnable && (
      <div>
        <br />
        <Row>
          <hr />
        </Row>
        <Row>
          <Col>
            <h6>Co-Applicant</h6>
          </Col>
          <Col>
            <Field
              name="IsCoApplicantFormEnable"
              render={({ field }) => (
                <RadioBox
                  {...field}
                  value={true}
                  checked={true}
                  id="present_at_home_visit-0"
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">First Name</p>
            <Field name="FirstName_Co" id="FirstName_Co" placeholder="First Name" />
            {touched.FirstName_Co && typeof errors.FirstName_Co === "string" && (
              <div className="input-feedback">{errors.FirstName_Co}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Last Name</p>
            <Field name="LastName_Co" id="LastName_Co" placeholder="Last Name" />
            {touched.LastName_Co && typeof errors.LastName_Co === "string" && (
              <div className="input-feedback">{errors.LastName_Co}</div>
            )}
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="place-holder">Email</p>
            <Field name="Email_Co" id="Email_Co" placeholder="Email" />
            {touched.Email_Co && typeof errors.Email_Co === "string" && (
              <div className="input-feedback">{errors.Email_Co}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Verify Email</p>
            <Field
              name="ConfirmEmail_Co"
              id="ConfirmEmail_Co"
              placeholder="Verify Email"
            />
            {touched.ConfirmEmail_Co &&
              typeof errors.ConfirmEmail_Co === "string" && (
                <div className="input-feedback">{errors.ConfirmEmail_Co}</div>
              )}
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="place-holder">Phone</p>
            <PhoneField name="Phone_Co" />
            {touched.Phone_Co && typeof errors.Phone_Co === "string" && (
              <div className="input-feedback">{errors.Phone_Co}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">
              Date Of Birth <FaQuestionCircle className="hint" />{" "}
            </p>
            <DatePickerField name="DateOfBirth_Co" />
            {touched.DateOfBirth_Co &&
              typeof errors.DateOfBirth_Co === "string" && (
                <div className="input-feedback">{errors.DateOfBirth_Co}</div>
              )}
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="place-holder">Social Security Number</p>

            <SSNField name="Ssn_Co" />
            {touched.Ssn_Co && typeof errors.Ssn_Co === "string" && (
              <div className="input-feedback">{errors.Ssn_Co}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col></Col>
        </Row>
      </div>
    )}
    <br />
    <Row>
      <p className="qoute">
        By Completing this application you authorize us to obtain and verify
        information about you including access to your credit reports.
      </p>
    </Row>
  </Container>
);
