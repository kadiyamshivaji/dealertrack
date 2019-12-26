import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import Moment from "react-moment";
import { Field } from "formik";
import Modal from "react-responsive-modal";
import DatePickerField from "./lib/DatePicker";
import { CustomSelect } from "./lib/Select";
import { formatter } from "./lib/CurrencyFormatter";
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
            <Row className="sub-title">
              <p>
                Please take one last and make changes if needed before
                submitting your application.
              </p>
            </Row>
          </Col>
        </Row>
        <Row className="r-title">
          <h6>Primary Applicant</h6>
        </Row>
        <div className="r-content">
          <div>
            <Row>
              <label onClick={() => setOpen1(true)}>
                Personal Information <FaPencilAlt className="pencil" />
                <span className="edit-title">Edit</span>
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
                <span className="edit-title">Edit</span>
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
                  {formatter.format(values.Rent)}
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
                <span className="edit-title">Edit</span>
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
                  {formatter.format(values.Money)}
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
            <Row className="r-title">
              <h3>Co Applicant</h3>
            </Row>
            <div className="r-content">
              <div>
                <Row>
                  <label onClick={() => setOpen2(true)}>
                    Personal Information <FaPencilAlt className="pencil" />
                    <span className="edit-title">Edit</span>
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
                      {values.FirstName_Co} {values.LastName_Co}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Phone</p>
                  </Col>
                  <Col>
                    <p>(***) ***-**{values.Phone_Co.toString().slice(-2)}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Email</p>
                  </Col>
                  <Col>
                    <p>
                      {values.Email_Co.replace(
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
                    <p>***-**-{values.Ssn_Co.toString().slice(-4)}</p>
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <label onClick={() => setOpen4(true)}>
                    Housing <FaPencilAlt className="pencil" />
                    <span className="edit-title">Edit</span>
                  </label>
                </Row>
                <Row>
                  <Col>
                    <p>Do You Own or Rent?</p>
                  </Col>
                  <Col>
                    <p>{values.Own_Co}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Monthly Mortgage/Rent</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      {formatter.format(values.Rent_Co)}
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
                    <p>{values.StreetAddress_Co}</p>{" "}
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <p>
                      {values.City_Co}, {values.State_Co} {values.Zipcode_Co}
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
                    <span className="edit-title">Edit</span>
                  </label>
                </Row>
                <Row>
                  <Col>
                    <p>Employment Status</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.Employment_Status_Co}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Employer's Name:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.Employer_Co}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Monthly Income:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>
                      {formatter.format(values.Money_Co)}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Over 2 Years:</p>
                  </Col>
                  <Col>
                    {" "}
                    <p>{values.Having_Two_years_Employment_Co ? "Yes" : "No"}</p>
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
          <Field name="FirstName_Co" id="FirstName_Co" placeholder="First Name" />
          {touched.FirstName_Co && typeof errors.FirstName_Co === "string" && (
            <div className="input-feedback">{errors.FirstName_Co}</div>
          )}
        </Row>
        <Row>
          <Field name="LastName_Co" id="LastName_Co" placeholder="Last Name" />
          {touched.LastName_Co && typeof errors.LastName_Co === "string" && (
            <div className="input-feedback">{errors.LastName_Co}</div>
          )}
        </Row>
        <Row>
          <PhoneField name="Phone_Co" />
          {touched.Phone_Co && typeof errors.Phone_Co === "string" && (
            <div className="input-feedback">{errors.Phone_Co}</div>
          )}
        </Row>
        <Row>
          <Field name="Email_Co" id="Email_Co" placeholder="Email" />
          {touched.Email_Co && typeof errors.Email_Co === "string" && (
            <div className="input-feedback">{errors.Email_Co}</div>
          )}
        </Row>
        <Row>
          <DatePickerField value={values.DateOfBirth_Co} name="DateOfBirth_Co" />
          {touched.DateOfBirth_Co && typeof errors.DateOfBirth_Co === "string" && (
            <div className="input-feedback">{errors.DateOfBirth_Co}</div>
          )}
        </Row>
        <Row>
          <SSNField name="Ssn_Co" />
          {touched.Ssn_Co && typeof errors.Ssn_Co === "string" && (
            <div className="input-feedback">{errors.Ssn_Co}</div>
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
            name="Own_Co"
            options={OwnOptions}
            component={CustomSelect}
            placeholder="Do you Own or rent ?"
            isMulti={false}
          />
        </Row>
        <Row>
          <Field name="Rent_Co" id="Rent_Co" placeholder="Monthly Mortgage/Rent" />
          {touched.Rent_Co && typeof errors.Rent_Co === "string" && (
            <div className="input-feedback">{errors.Rent_Co}</div>
          )}
        </Row>
        <Row>
          <Field
            name="StreetAddress_Co"
            id="StreetAddress_Co"
            placeholder="Address"
          />
          {touched.StreetAddress_Co &&
            typeof errors.StreetAddress_Co === "string" && (
              <div className="input-feedback">{errors.StreetAddress_Co}</div>
            )}
        </Row>
        <Row>
          <Col>
            <Field name="City_Co" id="City_Co" placeholder="City" />
            {touched.City_Co && typeof errors.City_Co === "string" && (
              <div className="input-feedback">{errors.City_Co}</div>
            )}
          </Col>
          <Col>
            <Field name="State_Co" id="State_Co" placeholder="State" />
            {touched.State_Co && typeof errors.State_Co === "string" && (
              <div className="input-feedback">{errors.State_Co}</div>
            )}
          </Col>
          <Col>
            <Field name="Zipcode_Co" id="Zipcode_Co" placeholder="Zipcode" />
            {touched.Zipcode_Co && typeof errors.Zipcode_Co === "string" && (
              <div className="input-feedback">{errors.Zipcode_Co}</div>
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
            name="Employment_Status_Co"
            options={EmployerOptions}
            component={CustomSelect}
            placeholder="Are you currently Employed?"
            isMulti={false}
          />
        </Row>
        <Row>
          <Field name="Employer_Co" id="Employer_Co" placeholder="Employer" />
          {touched.Employer_Co && typeof errors.Employer_Co === "string" && (
            <div className="input-feedback">{errors.Employer_Co}</div>
          )}
        </Row>
        <Row>
          <Field name="Money_Co" id="Money_Co" placeholder="" />
          {touched.Money_Co && typeof errors.Money_Co === "string" && (
            <div className="input-feedback">{errors.Money_Co}</div>
          )}
        </Row>
      </Modal>
    </Container>
  );
};
