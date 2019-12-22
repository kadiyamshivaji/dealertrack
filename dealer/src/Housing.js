import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { CustomSelect } from "./lib/Select";
import { States } from "./lib/States";
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

const CheckBox = ({ id, name, label, checked, css, ...props }) => (
  <Row>
    <Col>
      <input type="checkbox" id={id} name={name} checked={checked} {...props} />
    </Col>
    <Col xs={11}>
      <p className="checkBox-label">{label}</p>
    </Col>
  </Row>
);

export default ({ touched, errors, values }) => (
  <Container>
    <Row>
      <Col>
        <img alt="" src={require("./assests/images/car.PNG")} />
      </Col>
      <Col xs={10}>
        <Row className="heading-style">Housing</Row>
        <Row className="sub-title">
          <p>
            For your protection, we will be looking at your recent history to
            verify your identity.
          </p>
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
        <p className="place-holder">Do you Own or rent?</p>
        <Field
          className="select"
          name="Own"
          options={OwnOptions}
          component={CustomSelect}
          placeholder="Select"
          isMulti={false}
        />
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">Monthly Mortgage/Rent</p>
        <Field name="Rent" id="Rent" placeholder="e.g.$1500" />
        {touched.Rent && typeof errors.Rent === "string" && (
          <div className="input-feedback">{errors.Rent}</div>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="place-holder">Street Address</p>
        <Field
          name="StreetAddress"
          id="StreetAddress"
          placeholder="e.g.1800 Any Place Street"
        />
        {touched.StreetAddress && typeof errors.StreetAddress === "string" && (
          <div className="input-feedback">{errors.StreetAddress}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">
          Suite/Apartment Number <span className="optional">(Optional)</span>
        </p>
        <Field name="SuitNo" id="SuitNo" placeholder="e.g. Unit 105" />
        {touched.SuitNo && typeof errors.SuitNo === "string" && (
          <div className="input-feedback">{errors.SuitNo}</div>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="place-holder">City</p>
        <Field name="City" id="City" placeholder="e.g. Beverly Hills" />
        {touched.City && typeof errors.City === "string" && (
          <div className="input-feedback">{errors.City}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">State</p>
        <Field
          className="select"
          name="State"
          options={States}
          component={CustomSelect}
          placeholder="Select"
          isMulti={false}
        />
        {touched.State && typeof errors.State === "string" && (
          <div className="input-feedback">{errors.State}</div>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <p className="place-holder">Zipcode</p>
        <Field name="Zipcode" id="Zipcode" placeholder="e.g. 90210" />
        {touched.Zipcode && typeof errors.Zipcode === "string" && (
          <div className="input-feedback">{errors.Zipcode}</div>
        )}
      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">Have you lived here for 2 years or more?</p>
        <Field
          name="Having_Two_years"
          render={({ field }) => <RadioBox {...field} value="true" />}
        />
      </Col>
    </Row>
    {values.Having_Two_years && (
      <div>
        <br />

        <Row>
          <hr />
        </Row>

        <Row>
          <Col>
            <p className="place-holder">Previous Street Address</p>
            <Field
              name="StreetAddress_P"
              id="StreetAddress_P"
              placeholder="e.g.1800 Any Place Street"
            />
            {touched.StreetAddress_P &&
              typeof errors.StreetAddress_P === "string" && (
                <div className="input-feedback">{errors.StreetAddress_P}</div>
              )}
          </Col>
          <Col xs={1}></Col>

          <Col>
            <p className="place-holder">
              Suite/Apartment Number{" "}
              <span className="optional">(Optional)</span>
            </p>
            <Field name="SuitNo_P" id="SuitNo_P" placeholder="e.g. Unit 105" />
            {touched.SuitNo_P && typeof errors.SuitNo_P === "string" && (
              <div className="input-feedback">{errors.SuitNo_P}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">City</p>
            <Field name="City_P" id="City_P" placeholder="e.g. Beverly Hills" />
            {touched.City_P && typeof errors.City_P === "string" && (
              <div className="input-feedback">{errors.City_P}</div>
            )}
          </Col>

          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">State</p>

            <Field
              className="select"
              name="State_P"
              options={States}
              component={CustomSelect}
              placeholder="Select"
              isMulti={false}
            />
            {touched.State_P && typeof errors.State_P === "string" && (
              <div className="input-feedback">{errors.State_P}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">ZipCode</p>
            <Field name="Zipcode_P" id="Zipcode_P" placeholder="e.g. 90210" />
            {touched.Zipcode_P && typeof errors.Zipcode_P === "string" && (
              <div className="input-feedback">{errors.Zipcode_P}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col></Col>
        </Row>
      </div>
    )}

    {values.IsCoApplicantFormEnable && (
      <div>
        <Row>
          <hr />
        </Row>
        <Row>
          <h6>Co-Application Housing</h6>
        </Row>
        <Field
          name="roles"
          render={({ field }) => (
            <CheckBox
              {...field}
              value="admin"
              label="Both borrowers live at the same address."
            />
          )}
        />
        <Row>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">Do you Own or rent?</p>
            <Field
              className="select"
              name="OwnJ"
              value={values.roles[0] === "admin" ? values.Own : ""}
              options={OwnOptions}
              component={CustomSelect}
              placeholder="Do you own or rent ?"
              isMulti={false}
            />
          </Col>
          <Col xs={1}></Col>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">Monthly Mortgage/Rent</p>
            <Field
              name="RentJ"
              id="RentJ"
              value={values.roles[0] === "admin" ? values.Rent : ""}
              placeholder="e.g.$1500"
            />
            {touched.RentJ && typeof errors.Rent === "string" && (
              <div className="input-feedback">{errors.RentJ}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">Street Address</p>
            <Field
              name="StreetAddressJ"
              id="StreetAddressJ"
              value={values.roles[0] === "admin" ? values.StreetAddress : ""}
              placeholder="e.g.1800 Any Place Street"
            />
            {touched.StreetAddressJ &&
              typeof errors.StreetAddressJ === "string" && (
                <div className="input-feedback">{errors.StreetAddressJ}</div>
              )}
          </Col>
          <Col xs={1}></Col>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">
              Suite/Apartment Number{" "}
              <span className="optional"> (Optional)</span>
            </p>
            <Field
              name="SuitNoJ"
              id="SuitNoJ"
              value={values.roles[0] === "admin" ? values.SuitNo : ""}
              placeholder="e.g. Unit 105"
            />
            {touched.SuitNoJ && typeof errors.SuitNoJ === "string" && (
              <div className="input-feedback">{errors.SuitNoJ}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">City</p>
            <Field
              name="CityJ"
              id="CityJ"
              placeholder="e.g. Beverly Hills"
              value={values.roles[0] === "admin" ? values.City : ""}
            />
            {touched.CityJ && typeof errors.CityJ === "string" && (
              <div className="input-feedback">{errors.CityJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">State</p>
            <Field
              className="select"
              name="StateJ"
              options={States}
              value={values.roles[0] === "admin" ? values.State : ""}
              component={CustomSelect}
              placeholder="Select"
              isMulti={false}
            />
            {touched.StateJ && typeof errors.StateJ === "string" && (
              <div className="input-feedback">{errors.StateJ}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col className={values.roles[0] === "admin" ? "disable" : ""}>
            <p className="place-holder">Zipcode</p>
            <Field
              name="ZipcodeJ"
              id="ZipcodeJ"
              value={values.roles[0] === "admin" ? values.Zipcode : ""}
              placeholder="e.g. 90210"
            />
            {touched.ZipcodeJ && typeof errors.ZipcodeJ === "string" && (
              <div className="input-feedback">{errors.ZipcodeJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">
              Have you lived here for 2 years or more?
            </p>
            <Field
              name="Having_Two_years_Joint"
              render={({ field }) => (
                <RadioBox
                  {...field}
                  css={
                    values.Having_Two_years_Joint === "true"
                      ? "active"
                      : "label"
                  }
                  value="true"
                  id="Having_Two_years_Joint-0"
                  // checked={values.present_at_home_visit === "true"}
                  label="Yes"
                />
              )}
            />
          </Col>
        </Row>

        {values.Having_Two_years_Joint && (
          <div>
            <br />
            <Row>
              <hr />
            </Row>
            <Row>
              <Col>
                <p className="place-holder">Previous Street Address</p>
                <Field
                  name="StreetAddressJ_P"
                  id="StreetAddressJ_P"
                  placeholder="Address"
                />
                {touched.StreetAddressJ_P &&
                  typeof errors.StreetAddressJ_P === "string" && (
                    <div className="input-feedback">
                      {errors.StreetAddressJ_P}
                    </div>
                  )}
              </Col>
              <Col xs={1}></Col>
              <Col>
                <p className="place-holder">
                  Suite/Apartment Number{" "}
                  <span className="optional"> (Optional)</span>
                </p>
                <Field
                  name="SuitNoJ_P"
                  id="SuitNoJ_P"
                  placeholder="e.g. Unit 105"
                />
                {touched.SuitNoJ_P && typeof errors.SuitNoJ_P === "string" && (
                  <div className="input-feedback">{errors.SuitNoJ_P}</div>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="place-holder">City</p>
                <Field
                  name="CityJ_P"
                  id="CityJ_P"
                  placeholder="e.g. Beverly Hills"
                />
                {touched.CityJ_P && typeof errors.CityJ_P === "string" && (
                  <div className="input-feedback">{errors.CityJ_P}</div>
                )}
              </Col>

              <Col xs={1}></Col>
              <Col>
                <p className="place-holder">State</p>
                <Field
                  className="select"
                  name="StateJ_P"
                  options={States}
                  component={CustomSelect}
                  placeholder="Select"
                  isMulti={false}
                />
                {touched.StateJ_P && typeof errors.StateJ_P === "string" && (
                  <div className="input-feedback">{errors.StateJ_P}</div>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="place-holder">ZipCode</p>
                <Field
                  name="ZipcodeJ_P"
                  id="ZipcodeJ_P"
                  placeholder="e.g. 90210"
                />
                {touched.ZipcodeJ_P &&
                  typeof errors.ZipcodeJ_P === "string" && (
                    <div className="input-feedback">{errors.ZipcodeJ_P}</div>
                  )}
              </Col>
              <Col xs={1}></Col>
              <Col></Col>
            </Row>
          </div>
        )}
      </div>
    )}
  </Container>
);
