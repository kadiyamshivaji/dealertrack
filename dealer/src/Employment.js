import React,  { useState }  from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { FaPlusCircle } from "react-icons/fa";
import { CustomSelect } from "./lib/Select";
import PhoneField from "./lib/Phone";

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
  const [openOptional, setOptional] = useState(false);
  const [openOptionalJoint, setOptionalJoint] = useState(false);

  return(
  <Container>
    <Row>
      <h2>Employment</h2>
    </Row>
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
       <PhoneField placeholder="WorkPhone" name="WorkPhone" />
         {touched.WorkPhone && typeof errors.WorkPhone === "string" && (
           <div className="input-feedback">{errors.WorkPhone}</div>
         )}
    </Row>
    <Row>
      <Field name="Occupation" id="Occupation" placeholder="Occupation" />
      {touched.Occupation && typeof errors.Occupation === "string" && (
        <div className="input-feedback">{errors.Occupation}</div>
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
    {values.Having_Two_years_Employment === "false" &&
     <div>
       <Row>
         <h6>
            Previous Details
         </h6>
       </Row>
       
        <Row>
        <Field
          className="select"
          name="Employment_Status_P"
          options={EmployerOptions}
          component={CustomSelect}
          placeholder="Are you currently Employed?"
          isMulti={false}
        />
      </Row>
      <Row>
        <Field name="Employer_P" id="Employer_P" placeholder="Employer" />
        {touched.Employer_P && typeof errors.Employer_P === "string" && (
          <div className="input-feedback">{errors.Employer_P}</div>
        )}
      </Row>
      <Row>
         <PhoneField placeholder="WorkPhone" name="WorkPhone_P" />
           {touched.WorkPhone_P && typeof errors.WorkPhone_P === "string" && (
             <div className="input-feedback">{errors.WorkPhone_P}</div>
           )}
      </Row>
      <Row>
        <Field name="Occupation_P" id="Occupation_P" placeholder="Occupation" />
        {touched.Occupation_P && typeof errors.Occupation_P === "string" && (
          <div className="input-feedback">{errors.Occupation_P}</div>
        )}
      </Row>
        
      </div>}
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
          placeholder="Select your pay"
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
    { openOptional && 
        <div>
            <Row>
              <Field name="Soure_Income" id="Soure_Income" placeholder="Source" /> 
            </Row>
            <Row>
              <Field name="Income" id="Income" placeholder="Income" />
            </Row>
        </div>
      }
       { !openOptional && 
        <Row>
          <p onClick={() => setOptional(true)}>
            <FaPlusCircle /> Add Additional Income
          </p>
        </Row>
      }
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
          <PhoneField placeholder="WorkPhone" name="WorkPhoneJ" />
            {touched.WorkPhone && typeof errors.WorkPhone === "string" && (
              <div className="input-feedback">{errors.WorkPhone}</div>
            )}
      </Row>
      <Row>
        <Field name="OccupationJ" id="OccupationJ" placeholder="Occupation" />
          {touched.OccupationJ && typeof errors.OccupationJ === "string" && (
            <div className="input-feedback">{errors.OccupationJ}</div>
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
      
        {    values.Having_Two_years_EmploymentJ === "false" && 
          <div>
              <Row>
                <h6>
                  Previous Details
                </h6>
              </Row>
           
            <Row>
              <Field
                className="select"
                name="Employment_StatusJ_P"
                options={EmployerOptions}
                component={CustomSelect}
                placeholder="Are you currently Employed?"
                isMulti={false}
              />
            </Row>
            <Row>
              <Field name="EmployerJ_P" id="EmployerJ_P" placeholder="Employer" />
              {touched.EmployerJ_P && typeof errors.EmployerJ_P === "string" && (
                <div className="input-feedback">{errors.EmployerJ_P}</div>
              )}
            </Row>
            <Row>
              <PhoneField placeholder="WorkPhone" name="WorkPhoneJ_P" />
                {touched.WorkPhoneJ_P && typeof errors.WorkPhoneJ_P === "string" && (
                  <div className="input-feedback">{errors.WorkPhoneJ_P}</div>
                )}
          </Row>
          <Row>
            <Field name="OccupationJ_P" id="OccupationJ_P" placeholder="Occupation" />
              {touched.OccupationJ_P && typeof errors.OccupationJ_P === "string" && (
                <div className="input-feedback">{errors.OccupationJ_P}</div>
              )}
          </Row>
          </div>}
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
              placeholder="Select your pay"
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
        { openOptionalJoint && 
        <div>
          <Row>
            <Field name="Source_Income_Joint" id="Source_Income_Joint" placeholder="Source" />
          </Row>
          <Row>
            <Field name="IncomeJoint" id="IncomeJoint" placeholder="Income" />
          </Row>
        </div>
        }
         { !openOptionalJoint && 
          <Row>
            <p onClick={() => setOptionalJoint(true)}>
              <FaPlusCircle /> Add Additional Income
            </p>
          </Row>
        }
        <Row>
          <hr></hr>
        </Row>
      </div>
    )}
  </Container>
)};
