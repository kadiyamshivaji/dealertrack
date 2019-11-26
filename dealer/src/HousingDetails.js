import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { CustomSelect } from "./lib/Select";

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
const RadioBox = ({ id, name, label, checked, css, ...props }) => (
  <div>
    <input type="radio" id={id} name={name} checked={checked} {...props} />
    <label className={css} htmlFor={id}>
      {label}
    </label>
  </div>
);

const CheckBox = ({ id, name, label, checked, css, ...props }) => (
  <Row>
    <Col>
    <input  type="checkbox" id={id} name={name} checked={checked} {...props} />
    </Col>
    <Col  xs={10}>
    <p>
      {label}
    </p>
    </Col>
    
  </Row>
);



export default ({ touched, errors, values }) => (
  <Container>
    <Row>
      <h2>Housing</h2>
    </Row>
    {values.Form_Type === "false" && 
    <Field
          name="roles"
          render={({ field }) => (
            <CheckBox
              {...field}
              value="admin"
              label="Both borrowers live at the same address."
            />
          )}
        />}
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
      {touched.StreetAddress && typeof errors.StreetAddress === "string" && (
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
    <Row>
      <Field
        name="SuitNo"
        id="SuitNo"
        placeholder="Suite/Apt Number (optional)"
      />
      {touched.SuitNo && typeof errors.SuitNo === "string" && (
        <div className="input-feedback">{errors.SuitNo}</div>
      )}
    </Row>
    <Row>
      <p>Have you lived here for 2 years or more?</p>
    </Row>
    <Row>
      <Col>
        <Field
          name="Having_Two_years"
          render={({ field }) => (
            <RadioBox
              {...field}
              css={values.Having_Two_years === "true" ? "active" : "label"}
              value="true"
              id="present_at_home_visit-0"
              label="Yes"
            />
          )}
        />
      </Col>
      <Col>
        <Field
          name="Having_Two_years"
          render={({ field }) => (
            <RadioBox
              {...field}
              value="false"
              css={values.Having_Two_years === "false" ? "active" : "label"}
              id="present_at_home_visit-1"
              label="No"
            />
          )}
        />
      </Col>
    </Row>
    <Row>
      <hr></hr>
    </Row>
    {values.Form_Type === "false" && (
      <div>
        <Row>
          <h6>Co-Application Housing</h6>
        </Row>
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
          {touched.RentJ && typeof errors.Rent === "string" && (
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
        <Row>
          <Field
            name="SuitNoJ"
            id="SuitNoJ"
            placeholder="Suite/Apt Number (optional)"
          />
          {touched.SuitNoJ && typeof errors.SuitNoJ === "string" && (
            <div className="input-feedback">{errors.SuitNoJ}</div>
          )}
        </Row>
        <Row>
          <p>Have you lived here for 2 years or more?</p>
        </Row>
        <Row>
          <Col>
            <Field
              name="Having_Two_years_Joint"
              render={({ field }) => (
                <RadioBox
                  {...field}
                  css={values.Having_Two_years_ === "true" ? "active" : "label"}
                  value="true"
                  id="Having_Two_years_Joint-0"
                  // checked={values.present_at_home_visit === "true"}
                  label="Yes"
                />
              )}
            />
          </Col>
          <Col>
            <Field
              name="Having_Two_years_Joint"
              render={({ field }) => (
                <RadioBox
                  {...field}
                  value="false"
                  Joint
                  css={
                    values.Having_Two_years_Joint === "false"
                      ? "active"
                      : "label"
                  }
                  id="Having_Two_years_Joint-1"
                  // checked={values.present_at_home_visit === "false"}
                  label="No"
                />
              )}
            />
          </Col>
        </Row>
        <Row>
          <hr></hr>
        </Row>
      </div>
    )}
  </Container>
);
