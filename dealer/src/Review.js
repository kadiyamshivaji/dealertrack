import React,  { useState }  from "react";
import {Row,Col,Container} from 'react-bootstrap';
import { FaPencilAlt } from "react-icons/fa";
import Moment from 'react-moment';
import { Field } from "formik";
import Modal from "react-responsive-modal";
import DatePickerField from "./lib/DatePicker";
import { CustomSelect } from "./lib/Select";
import * as CurrencyFormat from 'react-currency-format';
import PhoneField from "./lib/Phone";
import SSNField from "./lib/ssn";

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
    <Col >
    <input  type="checkbox" id={id} name={name} checked={checked} {...props} />
    </Col>
    <Col  xs={11}>
    <p className="checkBox-label">
     I have reviewed and agree to the <a href="# ">Terms & Conditions</a> and <a href="# ">Privacy and Policy</a>.
     I understand this dealer will check my credit and share the results with their lender
    </p>
    </Col>
    
  </Row>
);
const Policy2 = ({ id, name, label, checked, css, ...props }) => (
  <Row>
    <Col>
    <input  type="checkbox" id={id} name={name} checked={checked} {...props} />
    </Col>
    <Col  xs={11}>
    <p className="checkBox-label">
     Both borrower intend to apply for joint credit
    </p>
    </Col>
    
  </Row>
);
export default ({ touched, errors ,values}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

    return(
  <Container>
     <Row>
      <h2>Review and Submit</h2>
    </Row>   
    <Row>
      <h6>Please take one last chance to everything.Make changes if needed</h6>
    </Row>
    <Row>
        <Col>
            <Row>
                <label className="tittle">Primary Applicant <FaPencilAlt className="pencil" onClick={() => setOpen1(true)} /></label>
            </Row>
            <Row>
                <p>{values.FirstName } {values.LastName}</p>
            </Row>
            <Row>
                <p>(***) ***-**{values.Phone.toString().slice(-2)}</p>
            </Row>
            <Row>
                <p>{values.Email.replace(/^(.)(.*)(.@.*)$/,
                 (_, a, b, c) => a + b.replace(/./g, '*') + c   
                )}</p>
            </Row>
            <Row>
                <p> <Moment format="MM/DD/YYYY">
                {values.Datepicker}
            </Moment></p>
            </Row>
            <Row>
                <p>***-**-{values.Ssn.toString().slice(-4)}</p>
            </Row>
        </Col>
        { values.Form_Type ==="false" &&
            <Col>
                <Row>
                    <label  className="tittle" >Secondary Applicant <FaPencilAlt className="pencil" onClick={() => setOpen2(true)} /></label>
                    </Row>
                <Row>
                    <p>{values.FirstNameJ} {values.LastNameJ}</p>
                    </Row>
                <Row>
                    <p>(***) ***-**{values.PhoneJ.toString().slice(-2)}</p>
                    </Row>
                <Row>
                    <p>{values.EmailJ.replace(/^(.)(.*)(.@.*)$/,
                 (_, a, b, c) => a + b.replace(/./g, '*') + c   
                )}</p>
                    </Row>
                <Row>
                    <p> <Moment format="MM/DD/YYYY">
                           {values.Datepickerj}
                         </Moment>
                    </p>
                    </Row>
                <Row>
                    <p>{values.SsnJ}</p>
                    </Row>
                <Row>
                    <p>{values.Employee_RealtionShip}</p>
                </Row>
            </Col>
        }
    </Row>
    <Row>
        <Col>
            <Row>
                <label  className="tittle">Housing <FaPencilAlt className="pencil" onClick={() => setOpen3(true)}/> </label>
            </Row>
            <Row>
            <p>{values.Own}</p>
            </Row>
            <Row>
            <p><CurrencyFormat value={values.Rent} displayType={'text'} thousandSeparator={true} prefix={'$'} />/month</p>
            </Row>
            <Row>
            <p>{values.StreetAddress}</p>
            </Row>
            <Row>
            <p>{values.City}, {values.State} {values.Zipcode}</p>
            </Row>
            <Row>
            <p>{values.Having_Two_years?'Over 2 years':'---'}</p>
            </Row>

        </Col>
        { values.Form_Type ==="false" &&
        <Col>
            <Row>
                <label  className="tittle">Housing <FaPencilAlt className="pencil" onClick={() => setOpen4(true)}/> </label>
            </Row>
            <Row>
                <p>{values.OwnJ}</p>
            </Row>
            <Row>
            <p><CurrencyFormat value={values.RentJ} displayType={'text'} thousandSeparator={true} prefix={'$'} />/month</p>
            </Row>
            <Row>
                <p>{values.StreetAddressJ}</p>
            </Row>
            <Row>
                <p>{values.CityJ}, {values.StateJ} {values.ZipcodeJ}</p>
            </Row>
            <Row>
                 <p>{values.Having_Two_years_Joint?'Over 2 years':'---'}</p>
            </Row>
        </Col>
        }
    </Row>
    <Row>
        <Col>
            <Row>
                <label  className="tittle">Employment <FaPencilAlt className="pencil" onClick={() => setOpen5(true)}/> </label>
            </Row>
            <Row>
                 <p>{values.Employment_Status}</p>
            </Row>
            <Row>
                 <p>{values.Employer}</p>
            </Row>
            <Row>
            <p><CurrencyFormat value={values.Money} displayType={'text'} thousandSeparator={true} prefix={'$'} />/{values.Tenure}</p>
            </Row>
        </Col>
        { values.Form_Type ==="false" &&
        <Col>
            <Row>
                 <label  className="tittle">Employment <FaPencilAlt className="pencil" onClick={() => setOpen6(true)}/></label>
            </Row>
            <Row>
                <p>{values.Employment_StatusJ}</p>
            </Row>
            <Row>
                 <p>{values.EmployerJ}</p>
            </Row>
            <Row>
            <p><CurrencyFormat value={values.MoneyJ} displayType={'text'} thousandSeparator={true} prefix={'$'} />/{values.TenureJ}</p>

            </Row>
        </Col>
        }
    </Row>
    <div className="checkBox-bg">
      <Field
          name="Policy1"
          render={({ field }) => (
            <Policy1
              {...field}
              value="true"
            />
          )}
        />
    { values.Form_Type ==="false" &&
     <Field
         name="Policy2"
         render={({ field }) => (
           <Policy2
             {...field}
             value="true"
           />
         )}
       />
}
</div>
   {/* Primary Modal */}
   <Modal 
      open={open1}
      onClose={() => setOpen1(false)}
      center
      focusTrapped
    >
        <Row>
        <Field name="FirstName" id="FirstName"  placeholder="First Name" />
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
          <PhoneField name="Phone"/>
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
       <DatePickerField value={values.Datepicker} name="Datepicker" />
       {touched.Datepicker && typeof errors.Datepicker === "string" && (
         <div className="input-feedback">{errors.Datepicker}</div>
       )}
     </Row>
      <Row>
        <SSNField  name="Ssn"/>
        {/* <Field name="Ssn" id="Ssn" value={values.Ssn} component={SSNFormate} /> */}
        {touched.Ssn && typeof errors.Ssn === "string" && (
          <div className="input-feedback">{errors.Ssn}</div>
        )}
      </Row>
    </Modal>

    {/* Secondary Modal  */}
    <Modal 
      open={open2}
      onClose={() => setOpen2(false)}
      center
      focusTrapped
    >
       <Row>
        <Field name="FirstNameJ" id="FirstNameJ"  placeholder="First Name" />
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
          <PhoneField name="PhoneJ"/>
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
       <DatePickerField value={values.DatepickerJ} name="DatepickerJ" />
       {touched.DatepickerJ && typeof errors.DatepickerJ === "string" && (
         <div className="input-feedback">{errors.DatepickerJ}</div>
       )}
     </Row>
      <Row>
        <SSNField  name="SsnJ" />
        {touched.SsnJ && typeof errors.SsnJ === "string" && (
          <div className="input-feedback">{errors.SsnJ}</div>
        )}
      </Row>
      <Row>
          <Field
            className="select"
            name="Employee_RealtionShip"
            value={values.Employee_RealtionShip}
            options={relationToApplicant}
            component={CustomSelect}
            placeholder="Relationship to Primary Applicant"
            isMulti={false}
          />
        </Row>
    </Modal>
  
  {/* primary Housimg */}
  <Modal 
      open={open3}
      onClose={() => setOpen3(false)}
      center
      focusTrapped
    >
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
  </Modal>

{/* Secondary Housimg */}
<Modal 
      open={open4}
      onClose={() => setOpen4(false)}
      center
      focusTrapped
    >
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
      {touched.StreetAddressJ && typeof errors.StreetAddressJ === "string" && (
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
<Modal 
      open={open5}
      onClose={() => setOpen5(false)}
      center
      focusTrapped
    >
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
  </Modal>
  

  
  {/* Secondary Employement */}
<Modal 
      open={open6}
      onClose={() => setOpen6(false)}
      center
      focusTrapped
    >
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
  </Modal>
  </Container>
)};
