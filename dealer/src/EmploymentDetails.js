import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { CustomSelect } from "./lib/Select";
const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>
      {label}
    </label>
  </div>
);
const TenureOptions = [
  {
    label: "Monthly",
    value: "Monthly"
  },
  {
    label: "Yearly",
    value: "Yearly"
  }
];
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

export default ({ touched, errors, values }) => (
  <Container>
    <Row>
      <h2>Employment</h2>
    </Row>

    <Row>
      <Field
        className="select"
        name="Empolyement_Status"
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
      <p>Have you worked here for 2 years or more?</p>
    </Row>
    <Row>
      <Col>
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
      <Col>
        <Field
          name="Having_Two_years_Employment"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="false"
              css={
                values.Having_Two_years_Employment === "false"
                  ? "active"
                  : "label"
              }
              id="present_at_home_visit-1"
              label="No"
            />
          )}
        />
      </Col>
    </Row>
    <Row>
      <p>
        Employment history is required for your application. If less than two
        years, please provide previous employment.
      </p>
    </Row>

    <Row>
      <h5>How much do you make?</h5>
    </Row>
    <Row>
      <p>
        Please include salary wages and bonuses but not other sources like child
        support or housing allowance
      </p>
    </Row>
    <Row>
      <Col>
        <Field name="Money" id="Money" placeholder="" />
        {touched.Money && typeof errors.Money === "string" && (
          <div className="input-feedback">{errors.Money}</div>
        )}
      </Col>
      <Col>
        <Field
          className="select"
          name="Tenure"
          options={TenureOptions}
          component={CustomSelect}
          placeholder="select your pay"
          isMulti={false}
        />
      </Col>
    </Row>
    <Row>
      <h5>Additional Income (optional)</h5>
    </Row>
    <Row>
      <p>
        Alimany, child support, or separete maintenance income need not be
        disclosed unless relied upon credit.
      </p>
    </Row>
    <Row>
      <p>
        <FaPlusCircle /> Add Additional Income
      </p>
    </Row>
    <Row>
      <hr></hr>
    </Row>
    {values.Form_Type === "false" && (
      <div>
        <Row>
          <h6>Co-Application Employment</h6>
        </Row>
        <Row>
          <Field
            className="select"
            name="Empolyement_StatusJ"
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
          <p>Have you worked here for 2 years or more?</p>
        </Row>
        <Row>
          <Col>
            <Field
              name="Having_Two_years_EmploymentJ"
              render={({ field }) => (
                <RadioBox
                  {...field}
                  value="true"
                  css={
                    values.Having_Two_years_EmploymentJ === "true"
                      ? "active"
                      : "label"
                  }
                  id="Having_Two_years_EmploymentJ-0"
                  label="Yes"
                />
              )}
            />
          </Col>
          <Col>
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
        <Row>
          <h5>How much do you make?</h5>
        </Row>
        <Row>
          <p>
            Please include salary wages and bonuses but not other sources like
            child support or housing allowance
          </p>
        </Row>
        <Row>
          <Col>
            <Field name="MoneyJ" id="MoneyJ" placeholder="" />
            {touched.MoneyJ && typeof errors.MoneyJ === "string" && (
              <div className="input-feedback">{errors.MoneyJ}</div>
            )}
          </Col>
          <Col>
            <Field
              className="select"
              name="TenureJ"
              options={TenureOptions}
              component={CustomSelect}
              placeholder="select your pay"
              isMulti={false}
            />
          </Col>
        </Row>
        <Row>
          <h5>Additional Income (optional)</h5>
        </Row>
        <Row>
          <p>
            Allmany child support, or separete maintenance income need not be
            discolsed unless relied upon credit
          </p>
        </Row>
        <Row>
          <p>
            <FaPlusCircle /> Add Additional Income
          </p>
        </Row>
        <Row>
          <hr></hr>
        </Row>
      </div>
    )}
  </Container>
);
