/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import DatePickerField from "./lib/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomSelect } from "./lib/Select";
import PhoneField from "./lib/Phone";
import SSNField from "./lib/ssn";

const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>
      {label}
    </label>
  </div>
);

const relationToApplicant = [
  {
    label: "Spouse",
    value: "Spouse"
  },
  {
    label: "Parent",
    value: "Parent"
  },
  {
    label: "Other",
    value: "Other"
  }
];
export default ({ touched, errors, values, details }) => (
  <Container>
    <Row>
      <h2>Contact Info </h2>
    </Row>
    <br />
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
              css={values.Form_Type === "true" ? "active" : ""}
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
              css={values.Form_Type === "false" ? "active" : ""}
              id="present_at_home_visit-1"
              // checked={values.present_at_home_visit === "false"}
              label="Joint"
            />
          )}
        />
      </Col>
    </Row>
    <Row>
      <Field name="FirstName" id="FirstName" placeholder="First Name" />
      {touched.FirstName && typeof errors.FirstName === "string" && (
        <div className="input-feedback">{errors.FirstName}</div>
      )}
    </Row>

    <Row>
      <Field name="LastName" id="LastName" placeholder="Last Name" />
      {touched.LastName && typeof errors.LastName === "string" && (
        <div className="input-feedback">{errors.LastName}</div>
      )}
    </Row>
    <Row>
      <PhoneField placeholder="Phone" name="Phone" />
      {touched.Phone && typeof errors.Phone === "string" && (
        <div className="input-feedback">{errors.Phone}</div>
      )}
    </Row>
    <Row>
      <Field name="Email" id="Email" placeholder="Email" />
      {touched.Email && typeof errors.Email === "string" && (
        <div className="input-feedback">{errors.Email}</div>
      )}
    </Row>
    <Row>
      <Field name="ConfirmEmail" id="ConfirmEmail" placeholder="Verify Email" />
      {touched.ConfirmEmail && typeof errors.ConfirmEmail === "string" && (
        <div className="input-feedback">{errors.ConfirmEmail}</div>
      )}
    </Row>
    <Row>
      <p>
        We respect your privacy and will only use this information to process
        your appplication and communicate with you about loan.
      </p>
    </Row>
    <Row>
      <h5>Required for Identity Verification</h5>
    </Row>
    <Row>
      <p>
        If you are not ready to apply for credit and just want to know your
        rates <a href="">check them here</a>
      </p>
    </Row>
    <Row>
      <DatePickerField placeholder="Date of Birth" name="DateOfBirth" />
      {touched.DateOfBirth && typeof errors.DateOfBirth === "string" && (
        <div className="input-feedback">{errors.DateOfBirth}</div>
      )}
    </Row>
    <Row>
      {" "}
      <p>You must be atleast 18 years to apply.</p>{" "}
    </Row>
    <Row>
      <Col>
        <SSNField name="Ssn" />
        {touched.Ssn && typeof errors.Ssn === "string" && (
          <div className="input-feedback">{errors.Ssn}</div>
        )}
      </Col>
      <Col>
        <label>
          <FaLock></FaLock> SSL Secure Connection
        </label>
      </Col>
    </Row>
    <Row>
      <p>
        Your Social Security Number is required to ensure we're reviewing the
        correct credit report while we consider your application.{" "}
      </p>
    </Row>
    <Row>
      <hr></hr>
    </Row>

    {values.Form_Type === "false" && (
      <div>
        <Row>
          <h6>Co-Application Name</h6>
        </Row>
        <Row>
          <Field
            className="select"
            name="Employee_Relationship"
            options={relationToApplicant}
            component={CustomSelect}
            placeholder="Relationship to Primary Applicant"
            isMulti={false}
          />
        </Row>
        <Row>
          <p>
            For a Joint Application, both applicants must agree to the Terms,
            Condtions and Privacy Policy.
          </p>
        </Row>
        <Row>
          <Field name="FirstNameJ" id="FirstNameJ" placeholder="First Name" />
          {touched.FirstNameJ && typeof errors.FirstNameJ === "string" && (
            <div className="input-feedback">{errors.FirstNameJ}</div>
          )}
        </Row>
        <Row>
          <Field name="LastNameJ" id="LastNameJ" placeholder="Last Name" />
          {touched.LastNameJ && typeof errors.LastNameJ === "string" && (
            <div className="input-feedback">{errors.LastNameJ}</div>
          )}
        </Row>
        <Row>
          <PhoneField name="PhoneJ" />
          {touched.PhoneJ && typeof errors.PhoneJ === "string" && (
            <div className="input-feedback">{errors.PhoneJ}</div>
          )}
        </Row>

        <Row>
          <Field name="EmailJ" id="EmailJ" placeholder="Email" />
          {touched.EmailJ && typeof errors.EmailJ === "string" && (
            <div className="input-feedback">{errors.EmailJ}</div>
          )}
        </Row>
        <Row>
          <Field
            name="ConfirmEmailJ"
            id="ConfirmEmailJ"
            placeholder="Verify Email"
          />
          {touched.ConfirmEmailJ &&
            typeof errors.ConfirmEmailJ === "string" && (
              <div className="input-feedback">{errors.ConfirmEmailJ}</div>
            )}
        </Row>
        <Row>
          <p>
            We respect your privacy and will only use this information to
            process your appplication and communicate with you about loan.
          </p>
        </Row>
        <Row>
          <h5>Required for Identity Verification</h5>
        </Row>
        <Row>
          <p>
            If you are not ready to apply for credit and just want to know your
            rates <a href="">check them here</a>
          </p>
        </Row>
        <Row>
          <DatePickerField name="DateOfBirthJ" />
          {touched.DateOfBirthJ && typeof errors.DateOfBirthJ === "string" && (
            <div className="input-feedback">{errors.DateOfBirthJ}</div>
          )}
        </Row>
        <Row>
          {" "}
          <p>You must be atleast 18 years to apply.</p>{" "}
        </Row>
        <Row>
          <Col>
            <SSNField name="SsnJ" />
            {touched.SsnJ && typeof errors.SsnJ === "string" && (
              <div className="input-feedback">{errors.SsnJ}</div>
            )}
          </Col>
          <Col>
            <label>
              <FaLock></FaLock> SSL Secure Connection
            </label>
          </Col>
        </Row>
        <Row>
          <p>
            Your Social Security Number is required to ensure we're reviewing
            the correct credit report while we consider your application.{" "}
          </p>
        </Row>
        <Row>
          <hr></hr>
        </Row>
      </div>
    )}
  </Container>
);
