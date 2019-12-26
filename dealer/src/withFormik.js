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
    FirstName_Co: "",
    LastName_Co: "",
    Phone_Co: "",
    Email_Co: "",
    ConfirmEmail_Co: "",
    DateOfBirth_Co: "",
    Ssn_Co: "",

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
    roles:"",
    Own_Co: "",
    Rent_Co: "",
    StreetAddress_Co: "",
    City_Co: "",
    State_Co: "",
    Zipcode_Co: "",
    SuitNo_Co: "",
    Having_Two_years_Joint: false,
    StreetAddress_Co_P: "",
    SuitNo_Co_P: "",
    City_Co_P: "",
    State_Co_P: "",
    Zipcode_Co_P: "",

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

    Employment_Status_Co: "",
    Employer_Co: "",
    WorkPhone_Co: "",
    Occupation_Co: "",
    Having_Two_years_Employment_Co: false,
    Employment_Status_Co_P: "",
    Employer_Co_P: "",
    WorkPhone_Co_P: "",
    Occupation_Co_P: "",
    Money_Co: "",
    Tenure_Co: "",
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
      FirstName_Co: Yup.string().required("First Name is required"),
      LastName_Co: Yup.string().required("Last Name is required"),
      Phone_Co: Yup.string().required("Phone Number is required"),
      Email_Co: Yup.string()
        .email()
        .required("Email is required"),
      ConfirmEmail_Co: Yup.string().test(
        "passwords-match",
        "Email must match",
        function(value) {
          return this.parent.Email_Co === value;
        }
      ),
      DateOfBirth_Co: Yup.string().required("Date of Birth is required"),
      Ssn_Co: Yup.string().required("Social Security Number  is required"),
      addressLine1: Yup.string().required("Address Line 1 is required"),
      Own: Yup.string().required("Own is required"),
      Rent: Yup.string().required("Rent  is required"),
      StreetAddress: Yup.string().required("Address is required"),
      City: Yup.string().required("City is required"),
      State: Yup.string().required("State is required"),
      Zipcode: Yup.string().required("Zipcode  is required"),
      Own_Co: Yup.string().required("Own is required"),
      Rent_Co: Yup.string().required("Rent is required"),
      StreetAddress_Co: Yup.string().required("Address is required"),
      City_Co: Yup.string().required("City  is required"),
      State_Co: Yup.string().required("State is required"),
      Zipcode_Co: Yup.string().required("Zipcode is required"),
      Empolyement_Status: Yup.string().required(
        "Employment_Status is required"
      ),
      Employer: Yup.string().required("Employer is required"),
      Money: Yup.string().required("Field is required"),
      Tenure: Yup.string().required("Field is required"),
      Empolyement_StatusJ: Yup.string().required("Field is required"),
      Employer_Co: Yup.string().required("Employer is required"),
      Money_Co: Yup.string().required("Field is required"),
      Tenure_Co: Yup.string().required("Field is required"),
      Policy1: Yup.string().required("Accept the Terms and Conditions"),
      Policy2: Yup.string().required("Accept the Terms and Conditions")
    }),

  handleSubmit: (values, props) => {
    debugger;
    console.log(values, props);
  }
});
