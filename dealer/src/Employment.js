import React from "react";
import { Field, FieldArray } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { CustomSelect } from "./lib/Select";
import PhoneField from "./lib/Phone";
import { FaQuestionCircle } from "react-icons/fa";
const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div className="can-toggle">
    <input id={name} type="checkbox" name={name} checked={checked} {...props} />
    <label htmlFor={name}>
      <div
        className="can-toggle__switch"
        data-checked="Yes"
        data-unchecked="No"
      ></div>
    </label>
  </div>
);
const AdditionalIncome = [
  {
    label: "Stocks",
    value: "Stocks"
  },
  {
    label: "Farming",
    value: "Farming"
  }
];
const EmployerOptions = [
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

export default ({ touched, errors, values }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img alt="" src={require("./assests/images/car.PNG")} />
        </Col>
        <Col xs={10}>
          <Row className="heading-style">Employment</Row>
          <Row className="sub-title">
            <p>
              For your protection, we will be looking at your recent history to
              verify your identity.
            </p>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="place-holder">Employment Status</p>
          <Field
            className="select"
            name="Employment_Status"
            options={EmployerOptions}
            component={CustomSelect}
            placeholder="Select"
            isMulti={false}
          />
        </Col>
        <Col xs={1}></Col>
        <Col>
          <p className="place-holder">Employer's Name</p>
          <Field
            name="Employer"
            id="Employer"
            placeholder="e.g. Someplace Inc"
          />
          {touched.Employer && typeof errors.Employer === "string" && (
            <div className="input-feedback">{errors.Employer}</div>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="place-holder">Phone</p>
          <PhoneField name="WorkPhone" />
          {touched.WorkPhone && typeof errors.WorkPhone === "string" && (
            <div className="input-feedback">{errors.WorkPhone}</div>
          )}
        </Col>
        <Col xs={1}></Col>
        <Col>
          <p className="place-holder">Occupation</p>
          <Field name="Occupation" id="Occupation" placeholder="Occupation" />
          {touched.Occupation && typeof errors.Occupation === "string" && (
            <div className="input-feedback">{errors.Occupation}</div>
          )}
        </Col>
      </Row>

      <Row>
        <Col>
          <p className="place-holder">
            Monthly Income <FaQuestionCircle className="hint" />{" "}
          </p>
          <Field name="Money" id="Money" placeholder="e.g. $5002" />
          {touched.Money && typeof errors.Money === "string" && (
            <div className="input-feedback">{errors.Money}</div>
          )}
        </Col>
        <Col xs={1}></Col>
        <Col>
          <p className="place-holder">
            Have you Worked Here for 2 Years or More?
          </p>
          <Field
            name="Having_Two_years_Employment"
            render={({ field }) => (
              <RadioBox
                {...field}
                value="true"
                css={
                  values.Having_Two_years_Employment === "true"
                    ? "active"
                    : "label"
                }
                id="present_at_home_visit-0"
                label="Yes"
              />
            )}
          />
        </Col>
      </Row>
      <br />

      {values.Having_Two_years_Employment && (
        <div>
          <Row>
            <hr />
          </Row>
          <Row>
            <Col>
              <p className="place-holder">Employment Status</p>
              <Field
                className="select"
                name="Employment_Status_P"
                options={EmployerOptions}
                component={CustomSelect}
                placeholder="Select"
                isMulti={false}
              />
            </Col>
            <Col xs={1}></Col>
            <Col>
              <p className="place-holder">Employer's Name</p>
              <Field
                name="Employer_P"
                id="Employer_P"
                placeholder="e.g. Someplace Inc"
              />
              {touched.Employer_P && typeof errors.Employer_P === "string" && (
                <div className="input-feedback">{errors.Employer_P}</div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="place-holder">Phone</p>
              <PhoneField name="WorkPhone_P" />
              {touched.WorkPhone_P &&
                typeof errors.WorkPhone_P === "string" && (
                  <div className="input-feedback">{errors.WorkPhone_P}</div>
                )}
            </Col>
            <Col xs={1}></Col>
            <Col>
              <p className="place-holder">Occupation</p>
              <Field
                name="Occupation_P"
                id="Occupation_P"
                placeholder="Occupation"
              />
              {touched.Occupation_P &&
                typeof errors.Occupation_P === "string" && (
                  <div className="input-feedback">{errors.Occupation_P}</div>
                )}
            </Col>
          </Row>
        </div>
      )}
      <br />
      <FieldArray
        name="Income"
        render={arrayHelpers => (
          <div>
            {values.Income && values.Income.length > 0
              ? values.Income.map((Income, index) => (
                  <div key={index}>
                    <Row>
                      <Col>
                        <p className="place-holder">
                          Additional Source of Income{" "}
                          <span className="optional">
                            (Optional)
                            <FaQuestionCircle className="hint" />
                          </span>
                        </p>
                        <Field
                          className="select"
                          name={`Source${index}`}
                          options={AdditionalIncome}
                          component={CustomSelect}
                          placeholder="Select"
                          isMulti={false}
                        />
                      </Col>
                      <Col xs={1}></Col>
                      <Col>
                        <p className="place-holder">Additional Income</p>
                        <Field name={`Income${index}`} placeholder="e.g.$600" />
                      </Col>
                    </Row>
                  </div>
                ))
              : ""}

            {values.Income.length <= 5 && (
              <p className="add-income" onClick={() => arrayHelpers.push("")}>
                <FaPlusCircle /> Add Additional Income
              </p>
            )}
          </div>
        )}
      />
      <Row>
        <hr></hr>
      </Row>
      {values.IsCoApplicantFormEnable && (
        <div>
          <Row>
            <h6>Co-Application Employment</h6>
          </Row>
          <Row>
            <Col>
              <p className="place-holder">Employer Status</p>
              <Field
                className="select"
                name="Employment_StatusJ"
                options={EmployerOptions}
                component={CustomSelect}
                placeholder="Are you currently Employed?"
                isMulti={false}
              />
            </Col>
            <Col xs={1}></Col>
            <Col>
              <p className="place-holder">Employer's Name</p>
              <Field
                name="EmployerJ"
                id="EmployerJ"
                placeholder="e.g. Someplace Inc"
              />
              {touched.EmployerJ && typeof errors.EmployerJ === "string" && (
                <div className="input-feedback">{errors.EmployerJ}</div>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="place-holder">Phone</p>
              <PhoneField placeholder="WorkPhone" name="WorkPhoneJ" />
              {touched.WorkPhone && typeof errors.WorkPhone === "string" && (
                <div className="input-feedback">{errors.WorkPhone}</div>
              )}
            </Col>
            <Col xs={1}></Col>
            <Col>
              <p className="place-holder">Occupation</p>
              <Field
                name="OccupationJ"
                id="OccupationJ"
                placeholder="Occupation"
              />
              {touched.OccupationJ &&
                typeof errors.OccupationJ === "string" && (
                  <div className="input-feedback">{errors.OccupationJ}</div>
                )}
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="place-holder">
                Monthly Income <FaQuestionCircle className="hint" />{" "}
              </p>
              <Field name="MoneyJ" id="MoneyJ" placeholder="e.g. $5002" />
              {touched.MoneyJ && typeof errors.MoneyJ === "string" && (
                <div className="input-feedback">{errors.MoneyJ}</div>
              )}
            </Col>
            <Col xs={1}></Col>
            <Col>
              <p className="place-holder">
                Have you worked here for 2 years or more?
              </p>
              <Field
                name="Having_Two_years_EmploymentJ"
                render={({ field }) => (
                  <RadioBox
                    {...field}
                    value="false"
                    css={
                      values.Having_Two_years_EmploymentJ === "false"
                        ? "active"
                        : "label"
                    }
                    id="Having_Two_years_EmploymentJ-1"
                    label="No"
                  />
                )}
              />
            </Col>
          </Row>

          {values.Having_Two_years_EmploymentJ && (
            <div>
              <Row>
                <hr />
              </Row>
              <Row>
                <Col>
                  <p className="place-holder">Employment Status</p>
                  <Field
                    className="select"
                    name="Employment_StatusJ_P"
                    options={EmployerOptions}
                    component={CustomSelect}
                    placeholder="Select"
                    isMulti={false}
                  />
                </Col>
                <Col xs={1}></Col>
                <Col>
                  <p className="place-holder">Employer's Name</p>
                  <Field
                    name="EmployerJ_P"
                    id="EmployerJ_P"
                    placeholder="e.g. Someplace Inc"
                  />
                  {touched.EmployerJ_P &&
                    typeof errors.EmployerJ_P === "string" && (
                      <div className="input-feedback">{errors.EmployerJ_P}</div>
                    )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="place-holder">Phone</p>
                  <PhoneField name="WorkPhoneJ_P" />
                  {touched.WorkPhoneJ_P &&
                    typeof errors.WorkPhoneJ_P === "string" && (
                      <div className="input-feedback">
                        {errors.WorkPhoneJ_P}
                      </div>
                    )}
                </Col>
                <Col xs={1}></Col>
                <Col>
                  <p className="place-holder">Occupation</p>
                  <Field
                    name="OccupationJ_P"
                    id="OccupationJ_P"
                    placeholder="Occupation"
                  />
                  {touched.OccupationJ_P &&
                    typeof errors.OccupationJ_P === "string" && (
                      <div className="input-feedback">
                        {errors.OccupationJ_P}
                      </div>
                    )}
                </Col>
              </Row>
            </div>
          )}
          <br />

          <FieldArray
            name="IncomeCo"
            render={arrayHelpersCo => (
              <div>
                {values.IncomeCo && values.IncomeCo.length > 0
                  ? values.IncomeCo.map((Income, index) => (
                      <div key={index}>
                        <Row>
                          <Col>
                            <p className="place-holder">
                              Additional Source of Income{" "}
                              <span className="optional">
                                (Optional)
                                <FaQuestionCircle className="hint" />
                              </span>
                            </p>
                            <Field
                              className="select"
                              name={`SourceCo${index}`}
                              options={AdditionalIncome}
                              component={CustomSelect}
                              placeholder="Select"
                              isMulti={false}
                            />
                          </Col>
                          <Col xs={1}></Col>
                          <Col>
                            <p className="place-holder">Additional Income</p>
                            <Field
                              name={`IncomeCo${index}`}
                              placeholder="e.g.$600"
                            />
                          </Col>
                        </Row>
                      </div>
                    ))
                  : ""}
                {values.IncomeCo && values.IncomeCo.length <= 5 && (
                  <p
                    className="add-income"
                    onClick={() => arrayHelpersCo.push("")}
                  >
                    <FaPlusCircle /> Add Additional Income
                  </p>
                )}
              </div>
            )}
          />
        </div>
      )}
    </Container>
  );
};
