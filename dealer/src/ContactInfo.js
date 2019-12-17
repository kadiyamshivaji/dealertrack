/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import DatePickerField from "./lib/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCarAlt, FaQuestionCircle } from "react-icons/fa";
import PhoneField from "./lib/Phone";
import SSNField from "./lib/ssn";

const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div>
    <input type="checkbox" id={id}  name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>
    <p className='remove'>X Remove</p>
    </label>
  </div>
);

export default ({ touched, errors, values, details }) => (
  <Container>
    <Row>
      <Col>
        <FaCarAlt className='car' />
      </Col>
      <Col xs={11}>
        <Row><h1>Personal Information</h1></Row>
        <Row className='sub-tittle'><p>We need a few details about you to start your application.</p></Row>
      </Col>
    </Row>
    <Row>
      <h3>Primary Applicant</h3>
    </Row>
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
        <Field name="ConfirmEmail" id="ConfirmEmail" placeholder="Verify Email" />
        {touched.ConfirmEmail && typeof errors.ConfirmEmail === "string" && (
          <div className="input-feedback">{errors.ConfirmEmail}</div>
        )}</Col>

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
        <p className="place-holder">Date Of Birth <FaQuestionCircle className='hint' /> </p>
        <DatePickerField placeholder="Date of Birth" name="DateOfBirth" />
        {touched.DateOfBirth && typeof errors.DateOfBirth === "DateOfBirth" && (
          <div className="input-feedback">{errors.DateOfBirth}</div>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="place-holder">Social Security Number <FaQuestionCircle className='hint' /></p>
        <SSNField name="Ssn" />
        {touched.Ssn && typeof errors.Ssn === "string" && (
          <div className="input-feedback">{errors.Ssn}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <Row>
          <Col><FaCarAlt /></Col>
          <Col className="score" xs={11}>
            <p className="place-holder">Credit Score</p>
            <p>If you  are not ready to apply for credit and just want to know your rates,<a>click here</a></p>
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
          <Col><h6>Co-Application Name</h6></Col>
          <Col><Field
              name="IsCoApplicantFormEnable"
              render={({ field }) => (
                <RadioBox
              {...field}
              value={true}
              checked={true}
              id="present_at_home_visit-0"
            />
              )}
            /></Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">First Name</p>
            <Field name="FirstNameJ" id="FirstNameJ" placeholder="First Name" />
            {touched.FirstNameJ && typeof errors.FirstNameJ === "string" && (
              <div className="input-feedback">{errors.FirstNameJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Last Name</p>
            <Field name="LastNameJ" id="LastNameJ" placeholder="Last Name" />
            {touched.LastNameJ && typeof errors.LastNameJ === "string" && (
              <div className="input-feedback">{errors.LastNameJ}</div>
            )}
          </Col>
        </Row>


        <Row>
          <Col>
            <p className="place-holder">Email</p>
            <Field name="EmailJ" id="EmailJ" placeholder="Email" />
            {touched.EmailJ && typeof errors.EmailJ === "string" && (
              <div className="input-feedback">{errors.EmailJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Verify Email</p>
            <Field
              name="ConfirmEmailJ"
              id="ConfirmEmailJ"
              placeholder="Verify Email"
            />
            {touched.ConfirmEmailJ &&
              typeof errors.ConfirmEmailJ === "string" && (
                <div className="input-feedback">{errors.ConfirmEmailJ}</div>
              )}</Col>
        </Row>

        <Row>
          <Col>
            <p className="place-holder">Phone</p>
            <PhoneField name="PhoneJ" />
            {touched.PhoneJ && typeof errors.PhoneJ === "string" && (
              <div className="input-feedback">{errors.PhoneJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
          <p className="place-holder">Date Of Birth <FaQuestionCircle className='hint' /> </p>
            <DatePickerField name="DateOfBirthJ" />
            {touched.DateOfBirthJ && typeof errors.DateOfBirthJ === "string" && (
              <div className="input-feedback">{errors.DateOfBirthJ}</div>
            )}
          </Col>
        </Row>


        <Row>
          <Col>
            <p className="place-holder">Social Security Number</p>

            <SSNField name="SsnJ" />
            {touched.SsnJ && typeof errors.SsnJ === "string" && (
              <div className="input-feedback">{errors.SsnJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col></Col>
        </Row>
      </div>
    )}
    <br />
    <Row><p className='qoute'>By Completing this applicantion you authorize us to obtain and verify information about you including access to your credit reports.</p></Row>
  </Container>
);
