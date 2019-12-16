import React from "react";
import { Field } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { CustomSelect } from "./lib/Select";
import { FaCarAlt } from "react-icons/fa";


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
    <input id={name} type="checkbox" name={name} checked={checked}  {...props} />
    <label htmlFor={name} >
      <div className="can-toggle__switch" data-checked="Yes" data-unchecked="No"></div>
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
        <FaCarAlt className='car' />
      </Col>
      <Col xs={11}>
        <Row><h1>Housing</h1></Row>
        <Row className='sub-tittle'><p>For your protection, we will be looking at your recent history to verify your identity.</p></Row>
      </Col>
    </Row>
    <Row>
      <h3>Primary Applicant</h3>
    </Row>
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
        <Field name="StreetAddress" id="StreetAddress" placeholder="e.g.1800 Any Place Street" />
        {touched.StreetAddress && typeof errors.StreetAddress === "string" && (
          <div className="input-feedback">{errors.StreetAddress}</div>
        )}

      </Col>
      <Col xs={1}></Col>
      <Col>
        <p className="place-holder">Suite/Apt Number <span className="optional">(Optional)</span></p>
        <Field
          name="SuitNo"
          id="SuitNo"
          placeholder="e.g. Unit 105"
        />
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
        <Field name="State" id="State" placeholder="State" />
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
          render={({ field }) => (
            <RadioBox
              {...field}
              value="true"
            />
          )}
        />
      </Col>
    </Row>
    {values.Having_Two_years !== true && (
      <div>
        <Row>
          <h6>Previous Housing</h6>
        </Row>

        <Row>
          <Col>
            <p className="place-holder">Street Address</p>
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
            <p className="place-holder">City</p>
            <Field name="City_P" id="City_P" placeholder="e.g. Beverly Hills" />
            {touched.City_P && typeof errors.City_P === "string" && (
              <div className="input-feedback">{errors.City_P}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">State</p>
            <Col>
              <Field name="State_P" id="State_P" placeholder="State" />
              {touched.State_P && typeof errors.State_P === "string" && (
                <div className="input-feedback">{errors.State_P}</div>
              )}
            </Col>
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">ZipCode</p>
            <Field name="Zipcode_P" id="Zipcode_P" placeholder="e.g. 90210" />
            {touched.Zipcode_P && typeof errors.Zipcode_P === "string" && (
              <div className="input-feedback">{errors.Zipcode_P}</div>
            )}
          </Col>
        </Row>
      </div>
    )}
    <Row>
      <hr></hr>
    </Row>
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
          <Col>
            <p className="place-holder">Do you Own or rent?</p>
            <Field
              className="select"
              name="OwnJ"
              options={OwnOptions}
              component={CustomSelect}
              placeholder="Do you Own or rent ?"
              isMulti={false}
            />
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Monthly Mortgage/Rent</p>
            <Field name="RentJ" id="RentJ" placeholder="e.g.$1500" />
            {touched.RentJ && typeof errors.Rent === "string" && (
              <div className="input-feedback">{errors.RentJ}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">Street Address</p>
            <Field
              name="StreetAddressJ"
              id="StreetAddressJ"
              placeholder="e.g.1800 Any Place Street"
            />
            {touched.StreetAddressJ &&
              typeof errors.StreetAddressJ === "string" && (
                <div className="input-feedback">{errors.StreetAddressJ}</div>
              )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Suite/Apt Number <span className="optional"> (Optional)</span></p>
            <Field
              name="SuitNoJ"
              id="SuitNoJ"
              placeholder="e.g. Unit 105"
            />
            {touched.SuitNoJ && typeof errors.SuitNoJ === "string" && (
              <div className="input-feedback">{errors.SuitNoJ}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">City</p>
            <Field name="CityJ" id="CityJ" placeholder="e.g. Beverly Hills" />
            {touched.CityJ && typeof errors.CityJ === "string" && (
              <div className="input-feedback">{errors.CityJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">State</p>
            <Field name="StateJ" id="StateJ" placeholder="State" />
            {touched.StateJ && typeof errors.StateJ === "string" && (
              <div className="input-feedback">{errors.StateJ}</div>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="place-holder">Zipcode</p>
            <Field name="ZipcodeJ" id="ZipcodeJ" placeholder="e.g. 90210" />
            {touched.ZipcodeJ && typeof errors.ZipcodeJ === "string" && (
              <div className="input-feedback">{errors.ZipcodeJ}</div>
            )}
          </Col>
          <Col xs={1}></Col>
          <Col>
            <p className="place-holder">Have you lived here for 2 years or more?</p>
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


        {values.Having_Two_years_Joint !== true && (
          <div>
            <Row>
              <h6>Previous Housing</h6>
            </Row>

            <Row>
              <Col>
                <p className="place-holder">Street Address</p>
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
                <p className="place-holder">City</p>
                <Field name="CityJ_P" id="CityJ_P" placeholder="e.g. Beverly Hills" />
                {touched.CityJ_P && typeof errors.CityJ_P === "string" && (
                  <div className="input-feedback">{errors.CityJ_P}</div>
                )}
              </Col>
            </Row>

            <Row>
              <Col>
                <p className="place-holder">State</p>
                <Field name="StateJ_P" id="StateJ_P" placeholder="State" />
                {touched.StateJ_P && typeof errors.StateJ_P === "string" && (
                  <div className="input-feedback">{errors.StateJ_P}</div>
                )}
              </Col>
              <Col xs={1}></Col>
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
            </Row>
          </div>
        )}

      </div>
    )}
  </Container>
);
