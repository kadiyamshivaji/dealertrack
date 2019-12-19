import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import Moment from "react-moment";
import { Field } from "formik";
import Modal from "react-responsive-modal";
import DatePickerField from "./lib/DatePicker";
import { CustomSelect } from "./lib/Select";
import * as CurrencyFormat from "react-currency-format";
import PhoneField from "./lib/Phone";
import SSNField from "./lib/ssn";

const EmployerOptions = [
  {
    label: "Employment Status",
    value: "select"
  },
  {
    label: "Employed",
    value: "Employed"
  },
  {
    label: "Unemployed",
    value: "Unemployed"
  },
  {
    label: "Self-Employed",
    value: "Self-Employed"
  },
  {
    label: "Student",
    value: "Student"
  },
  {
    label: "Retired",
    value: "Retired"
  },
  {
    label: "Active Military",
    value: "Active Military"
  },
  {
    label: "Retired Military",
    value: "Retired Military"
  },
  {
    label: "Others",
    value: "Others"
  }
];
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
const OwnOptions = [
  {
    label: "Mortgage",
    value: "Mortgage"
  },
  {
    label: "Rent",
    value: "Rent"
  },
  {
    label: "Family",
    value: "Family"
  },
  {
    label: "Other",
    value: "Other"
  },
  {
    label: "OwnOutright",
    value: "OwnOutright"
  },
  {
    label: "Military",
    value: "Military"
  }
];
const Policy1 = ({ id, name, label, checked, css, ...props }) => (
  <Row>
    <Col>
      <input type="checkbox" id={id} name={name} checked={checked} {...props} />
    </Col>
    <Col xs={11}>
      <p className="checkBox-label">
        I have reviewed and agree to the <a href="# ">Terms & Conditions</a> and{" "}
        <a href="# ">Privacy and Policy</a>. I understand this dealer will check
        my credit and share the results with their lender
      </p>
    </Col>
  </Row>
);
const Policy2 = ({ id, name, label, checked, css, ...props }) => (
  <Row>
    <Col>
      <input type="checkbox" id={id} name={name} checked={checked} {...props} />
    </Col>
    <Col xs={11}>
      <p className="checkBox-label">
        Both borrower intend to apply for joint credit
      </p>
    </Col>
  </Row>
);
export default ({ touched, errors, values }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  return (
    <Container>
      <div>
        <Row>
          <Col>
            <img alt="" src={require("./assests/images/car.PNG")} />
          </Col>
          <Col xs={10}>
            <Row className="heading-style">Review and Submit</Row>
            <Row className="sub-tittle">
              <p>
                Please take one last and make changes if needed before
                submitting your application.
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="r-tittle">
          <h6>Primary Applicant</h6>
        </Row>
        <div className="r-content">
          <div>
            <Row>
              <label onClick={() => setOpen1(true)}>
                Personal Information <FaPencilAlt className="pencil" />
                <span className="tittle">Edit</span>
              </label>
            </Row>
            <Row>
              <Col>
                {" "}
                <p>Name:</p>
              </Col>
              <Col>
                {" "}
                <p>
                  {values.FirstName} {values.LastName}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Phone</p>
              </Col>
              <Col>
                <p>(***) ***-**{values.Phone.toString().slice(-2)}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Email</p>
              </Col>
              <Col>
                <p>
                  {values.Email.replace(
                    /^(.)(.*)(.@.*)$/,
                    (_, a, b, c) => a + b.replace(/./g, "*") + c
                  )}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Date Of Birth</p>
              </Col>
              <Col>
                <p>
                  <Moment format="MM/DD/YYYY">{values.DateOfBirth}</Moment>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Social Security Number</p>
              </Col>
              <Col>
                <p>***-**-{values.Ssn.toString().slice(-4)}</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <label onClick={() => setOpen3(true)}>
                Housing <FaPencilAlt className="pencil" />
                <span className="tittle">Edit</span>
              </label>
            </Row>
            <Row>
              <Col>
                <p>Do You Own or Rent?</p>
              </Col>
              <Col>
                <p>{values.Own}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Monthly Mortgage/Rent</p>
              </Col>
              <Col>
                {" "}
                <p>
                  <CurrencyFormat
                    value={values.Rent}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  /month
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Current Address</p>
              </Col>
              <Col>
                {" "}
                <p>{values.StreetAddress}</p>{" "}
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col>
                <p>
                  {values.City}, {values.State} {values.Zipcode}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Have You Lived Here Over 2 Years?</p>
              </Col>
              <Col>
                {" "}
                <p>{values.Having_Two_years ? "Yes" : "No"}</p>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <label onClick={() => setOpen5(true)}>
                Employment <FaPencilAlt className="pencil" />{" "}
                <span className="tittle">Edit</span>
              </label>
            </Row>
            <Row>
              <Col>
                <p>Employment Status</p>
              </Col>
              <Col>
                {" "}
                <p>{values.Employment_Status}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Employer's Name:</p>
              </Col>
              <Col>
                {" "}
                <p>{values.Employer}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Monthly Income:</p>
              </Col>
              <Col>
                {" "}
                <p>
                  <CurrencyFormat
                    value={values.Money}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  /{values.Tenure}
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Over 2 Years:</p>
              </Col>
              <Col>
                {" "}
                <p>{values.Having_Two_years_Employment ? "Yes" : "No"}</p>
              </Col>
            </Row>
          </div>
        </div>

        {values.IsCoApplicantFormEnable && (
          <div className="co-applicant">
            <Row className="r-tittle">
              <h3>Co Applicant</h3>
            </Row>
            <div className="r-content">
              <div>
                <Row>
                  <label onClick={() => setOpen2(true)}>
                    Personal Information <FaPencilAlt className="pencil" />
                    <span className="tittle">Edit</span>
                  </label>
                </Row>
                <Row>
                  <Col>
                    {" "}
                    <p>Name:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      {values.FirstNameJ} {values.LastNameJ}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Phone</p>
                  </Col>
                  <Col>
                    <p>(***) ***-**{values.PhoneJ.toString().slice(-2)}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Email</p>
                  </Col>
                  <Col>
                    <p>
                      {values.EmailJ.replace(
                        /^(.)(.*)(.@.*)$/,
                        (_, a, b, c) => a + b.replace(/./g, "*") + c
                      )}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Date Of Birth</p>
                  </Col>
                  <Col>
                    <p>
                      <Moment format="MM/DD/YYYY">{values.Datepickerj}</Moment>
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Social Security Number</p>
                  </Col>
                  <Col>
                    <p>***-**-{values.SsnJ.toString().slice(-4)}</p>
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <label onClick={() => setOpen4(true)}>
                    Housing <FaPencilAlt className="pencil" />
                    <span className="tittle">Edit</span>
                  </label>
                </Row>
                <Row>
                  <Col>
                    <p>Do You Own or Rent?</p>
                  </Col>
                  <Col>
                    <p>{values.OwnJ}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Monthly Mortgage/Rent</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      <CurrencyFormat
                        value={values.RentJ}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                      /month
                    </p>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <p>Current Address</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.StreetAddressJ}</p>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <p>
                      {values.CityJ}, {values.StateJ} {values.ZipcodeJ}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Have You Lived Here Over 2 Years?</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.Having_Two_years_Joint ? "Yes" : "No"}</p>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <label onClick={() => setOpen6(true)}>
                    Employment <FaPencilAlt className="pencil" />{" "}
                    <span className="tittle">Edit</span>
                  </label>
                </Row>
                <Row>
                  <Col>
                    <p>Employment Status</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.Employment_StatusJ}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Employer's Name:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.EmployerJ}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Monthly Income:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      <CurrencyFormat
                        value={values.MoneyJ}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                      /{values.Tenure}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Over 2 Years:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.Having_Two_years_EmploymentJ ? "Yes" : "No"}</p>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        )}
        <div className="checkBox-bg">
          <Field
            name="Policy1"
            render={({ field }) => (
              <Policy1 {...field} checked={values.Policy1} value="true" />
            )}
          />

          {values.IsCoApplicantFormEnable && (
            <Field
              name="Policy2"
              render={({ field }) => (
                <Policy2 {...field} checked={values.Policy2} value="true" />
              )}
            />
          )}
        </div>
      </div>

      {/* Primary Modal */}
      <Modal open={open1} onClose={() => setOpen1(false)} center focusTrapped>
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
          <PhoneField name="Phone" />
          {/* <PhoneInput name="Phone" value={values.Phone} id="Phone"></PhoneInput> */}
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
          <DatePickerField value={values.DateOfBirth} name="DateOfBirth" />
          {touched.DateOfBirth &&
            typeof errors.DatepDateOfBirthicker === "string" && (
              <div className="input-feedback">{errors.DateOfBirth}</div>
            )}
        </Row>
        <Row>
          <SSNField name="Ssn" />
          {touched.Ssn && typeof errors.Ssn === "string" && (
            <div className="input-feedback">{errors.Ssn}</div>
          )}
        </Row>
      </Modal>

      {/* Secondary Modal  */}
      <Modal open={open2} onClose={() => setOpen2(false)} center focusTrapped>
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
          <DatePickerField value={values.DateOfBirthJ} name="DateOfBirthJ" />
          {touched.DateOfBirthJ && typeof errors.DateOfBirthJ === "string" && (
            <div className="input-feedback">{errors.DateOfBirthJ}</div>
          )}
        </Row>
        <Row>
          <SSNField name="SsnJ" />
          {touched.SsnJ && typeof errors.SsnJ === "string" && (
            <div className="input-feedback">{errors.SsnJ}</div>
          )}
        </Row>
        <Row>
          <Field
            className="select"
            name="Employee_Relationship"
            value={values.Employee_Relationship}
            options={relationToApplicant}
            component={CustomSelect}
            placeholder="Relationship to Primary Applicant"
            isMulti={false}
          />
        </Row>
      </Modal>

      {/* primary Housimg */}
      <Modal open={open3} onClose={() => setOpen3(false)} center focusTrapped>
        <Row>
          <Field
            className="select"
            name="Own"
            options={OwnOptions}
            component={CustomSelect}
            placeholder="Do you Own or rent ?"
            isMulti={false}
          />
        </Row>
        <Row>
          <Field name="Rent" id="Rent" placeholder="Monthly Mortgage/Rent" />
          {touched.Rent && typeof errors.Rent === "string" && (
            <div className="input-feedback">{errors.Rent}</div>
          )}
        </Row>
        <Row>
          <Field
            name="StreetAddress"
            id="StreetAddress"
            placeholder="Address"
          />
          {touched.StreetAddress &&
            typeof errors.StreetAddress === "string" && (
              <div className="input-feedback">{errors.StreetAddress}</div>
            )}
        </Row>
        <Row>
          <Col>
            <Field name="City" id="City" placeholder="City" />
            {touched.City && typeof errors.City === "string" && (
              <div className="input-feedback">{errors.City}</div>
            )}
          </Col>
          <Col>
            <Field name="State" id="State" placeholder="State" />
            {touched.State && typeof errors.State === "string" && (
              <div className="input-feedback">{errors.State}</div>
            )}
          </Col>
          <Col>
            <Field name="Zipcode" id="Zipcode" placeholder="Zipcode" />
            {touched.Zipcode && typeof errors.Zipcode === "string" && (
              <div className="input-feedback">{errors.Zipcode}</div>
            )}
          </Col>
        </Row>
      </Modal>

      {/* Secondary Housimg */}
      <Modal open={open4} onClose={() => setOpen4(false)} center focusTrapped>
        <Row>
          <Field
            className="select"
            name="OwnJ"
            options={OwnOptions}
            component={CustomSelect}
            placeholder="Do you Own or rent ?"
            isMulti={false}
          />
        </Row>
        <Row>
          <Field name="RentJ" id="RentJ" placeholder="Monthly Mortgage/Rent" />
          {touched.RentJ && typeof errors.RentJ === "string" && (
            <div className="input-feedback">{errors.RentJ}</div>
          )}
        </Row>
        <Row>
          <Field
            name="StreetAddressJ"
            id="StreetAddressJ"
            placeholder="Address"
          />
          {touched.StreetAddressJ &&
            typeof errors.StreetAddressJ === "string" && (
              <div className="input-feedback">{errors.StreetAddressJ}</div>
            )}
        </Row>
        <Row>
          <Col>
            <Field name="CityJ" id="CityJ" placeholder="City" />
            {touched.CityJ && typeof errors.CityJ === "string" && (
              <div className="input-feedback">{errors.CityJ}</div>
            )}
          </Col>
          <Col>
            <Field name="StateJ" id="StateJ" placeholder="State" />
            {touched.StateJ && typeof errors.StateJ === "string" && (
              <div className="input-feedback">{errors.StateJ}</div>
            )}
          </Col>
          <Col>
            <Field name="ZipcodeJ" id="ZipcodeJ" placeholder="Zipcode" />
            {touched.ZipcodeJ && typeof errors.ZipcodeJ === "string" && (
              <div className="input-feedback">{errors.ZipcodeJ}</div>
            )}
          </Col>
        </Row>
      </Modal>

      {/* Primary Employement */}
      <Modal open={open5} onClose={() => setOpen5(false)} center focusTrapped>
        <Row>
          <Field
            className="select"
            name="Employment_Status"
            options={EmployerOptions}
            component={CustomSelect}
            placeholder="Are you currently Employed?"
            isMulti={false}
          />
        </Row>
        <Row>
          <Field name="Employer" id="Employer" placeholder="Employer" />
          {touched.Employer && typeof errors.Employer === "string" && (
            <div className="input-feedback">{errors.Employer}</div>
          )}
        </Row>
        <Row>
          <Field name="Money" id="Money" placeholder="" />
          {touched.Money && typeof errors.Money === "string" && (
            <div className="input-feedback">{errors.Money}</div>
          )}
        </Row>
      </Modal>

      {/* Secondary Employement */}
      <Modal open={open6} onClose={() => setOpen6(false)} center focusTrapped>
        <Row>
          <Field
            className="select"
            name="Employment_StatusJ"
            options={EmployerOptions}
            component={CustomSelect}
            placeholder="Are you currently Employed?"
            isMulti={false}
          />
        </Row>
        <Row>
          <Field name="EmployerJ" id="EmployerJ" placeholder="Employer" />
          {touched.EmployerJ && typeof errors.EmployerJ === "string" && (
            <div className="input-feedback">{errors.EmployerJ}</div>
          )}
        </Row>
        <Row>
          <Field name="MoneyJ" id="MoneyJ" placeholder="" />
          {touched.MoneyJ && typeof errors.MoneyJ === "string" && (
            <div className="input-feedback">{errors.MoneyJ}</div>
          )}
        </Row>
      </Modal>
    </Container>
  );
};
