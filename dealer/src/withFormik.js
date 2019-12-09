/* eslint-disable no-useless-escape */
import { withFormik } from "formik";
import * as Yup from "yup";

export default withFormik({
  displayName: "WizardForm",
  enableReinitialize: false,
  mapPropsToValues: props => ({
    FirstName: props.data.FirstName,
    LastName: props.data.LastName,
    Email: props.data.Email,
    Phone: props.data.Phone,
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
    Having_Two_years: "",

    OwnJ: "",
    RentJ: "",
    StreetAddressJ: "",
    CityJ: "",
    StateJ: "",
    ZipcodeJ: "",
    SuitNoJ: "",
    Having_Two_years_Joint: "",

    /*Employment */
    Employment_Status: "",
    Employer: "",
    Having_Two_years_Employment: "",
    Money: "",
    Tenure: "",
    Employment_StatusJ: "",
    EmployerJ: "",
    Having_Two_years_EmploymentJ: "",
    MoneyJ: "",
    TenureJ: "",
    Policy1: "",
    Policy2: "",
    Form_Type: "true",

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

  handleSubmit: values => {
    console.log(values);
  }
});
