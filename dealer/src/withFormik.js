/* eslint-disable no-useless-escape */
import { withFormik } from "formik";
import * as Yup from "yup";

export default withFormik({
  displayName: "WizardForm",
  enableReinitialize: false,
  mapPropsToValues: props => ({
    FirstName: props.data.FirstName ? props.data.FirstName : "John",
    LastName: props.data.LastName ? props.data.LastName : "Miller",
    Email: props.data.Email ? props.data.Email : "johnmiller@gmail.com",
    Phone: props.data.Phone ? props.data.Phone : "1234567829",
    ConfirmEmail: "",
    DateOfBirth: "",
    Ssn: "",
    FirstNameJ: "",
    LastNameJ: "",
    PhoneJ: "",
    EmailJ: "",
    ConfirmEmailJ: "",
    DateOfBirthJ: "",
    SsnJ: "",

    /*Housing */
    Own: "",
    Rent: "",
    StreetAddress: "",
    City: "",
    State: "",
    Zipcode: "",
    SuitNo: "",
    Having_Two_years: false,
    StreetAddress_P: "",
    SuitNo_P: "",
    City_P: "",
    State_P: "",
    Zipcode_P: "",

    OwnJ: "",
    RentJ: "",
    StreetAddressJ: "",
    CityJ: "",
    StateJ: "",
    ZipcodeJ: "",
    SuitNoJ: "",
    Having_Two_years_Joint: false,
    StreetAddressJ_P: "",
    SuitNoJ_P: "",
    CityJ_P: "",
    StateJ_P: "",
    ZipcodeJ_P: "",

    /*Employment */
    Employment_Status: "",
    Employer: "",
    Having_Two_years_Employment: false,
    Money: "",
    Occupation: "",
    WorkPhone: "",
    Employment_Status_P: "",
    Employer_P: "",
    WorkPhone_P: "",
    Occupation_P: "",
    Tenure: "",

    Income: [],
    IncomeCo: [],
    Source0: "",
    Source1: "",
    Source2: "",
    Source3: "",
    Source4: "",
    Source5: "",
    Income0: "",
    Income1: "",
    Income2: "",
    Income3: "",
    Income4: "",
    Income5: "",
    IncomeCo0: "",
    IncomeCo1: "",
    IncomeCo2: "",
    IncomeCo3: "",
    IncomeCo4: "",
    IncomeCo5: "",
    SourceCo0: "",
    SourceCo1: "",
    SourceCo2: "",
    SourceCo3: "",
    SourceCo4: "",
    SourceCo5: "",

    Employment_StatusJ: "",
    EmployerJ: "",
    WorkPhoneJ: "",
    OccupationJ: "",
    Having_Two_years_EmploymentJ: false,
    Employment_StatusJ_P: "",
    EmployerJ_P: "",
    WorkPhoneJ_P: "",
    OccupationJ_P: "",
    MoneyJ: "",
    TenureJ: "",
    Source_Income_Joint: "",
    IncomeJoint: "",
    Policy1: false,
    Policy2: false,
    IsCoApplicantFormEnable: props.data.Joint,
    addressLine1: "",
    addressLine2: "",
    country: ""
  }),
  validationSchema: () =>
    Yup.object().shape({
      FirstName: Yup.string().required("First name is required"),
      LastName: Yup.string().required("Last name is required"),
      Phone: Yup.string().required("Phone Number is required"),
      Email: Yup.string()
        .email()
        .required("Email is required"),
      ConfirmEmail: Yup.string().test(
        "passwords-match",
        "Email must match",
        function(value) {
          return this.parent.Email === value;
        }
      ),
      DateOfBirth: Yup.string().required("Date of Birth is required"),
      Ssn: Yup.string().required("Social Security Number is required"),
      FirstNameJ: Yup.string().required("First Name is required"),
      LastNameJ: Yup.string().required("Last Name is required"),
      PhoneJ: Yup.string().required("Phone Number is required"),
      EmailJ: Yup.string()
        .email()
        .required("Email is required"),
      ConfirmEmailJ: Yup.string().test(
        "passwords-match",
        "Email must match",
        function(value) {
          return this.parent.EmailJ === value;
        }
      ),
      DateOfBirthJ: Yup.string().required("Date of Birth is required"),
      SsnJ: Yup.string().required("Social Security Number  is required"),
      addressLine1: Yup.string().required("Address Line 1 is required"),
      Own: Yup.string().required("Own is required"),
      Rent: Yup.string().required("Rent  is required"),
      StreetAddress: Yup.string().required("Address is required"),
      City: Yup.string().required("City is required"),
      State: Yup.string().required("State is required"),
      Zipcode: Yup.string().required("Zipcode  is required"),
      OwnJ: Yup.string().required("Own is required"),
      RentJ: Yup.string().required("Rent is required"),
      StreetAddressJ: Yup.string().required("Address is required"),
      CityJ: Yup.string().required("City  is required"),
      StateJ: Yup.string().required("State is required"),
      ZipcodeJ: Yup.string().required("Zipcode is required"),
      Empolyement_Status: Yup.string().required(
        "Employment_Status is required"
      ),
      Employer: Yup.string().required("Employer is required"),
      Money: Yup.string().required("Field is required"),
      Tenure: Yup.string().required("Field is required"),
      Empolyement_StatusJ: Yup.string().required("Field is required"),
      EmployerJ: Yup.string().required("Employer is required"),
      MoneyJ: Yup.string().required("Field is required"),
      TenureJ: Yup.string().required("Field is required"),
      Policy1: Yup.string().required("Accept the Terms and Conditions"),
      Policy2: Yup.string().required("Accept the Terms and Conditions")
    }),

  handleSubmit: (values, props) => {
    debugger;
    console.log(values, props);
  }
});
