/* eslint-disable no-useless-escape */
import { withFormik } from "formik";
import * as Yup from "yup";

export default withFormik({
  displayName: "WizardForm",
  enableReinitialize: true,
  mapPropsToValues: () => ({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
    ConfirmEmail: "",
    Datepicker: "",
    Ssn: "",
    FirstNameJ: "",
    LastNameJ: "",
    PhoneJ: "",
    EmailJ: "",
    ConfirmEmailJ: "",
    DatepickerJ: "",
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
    Tenure: "Monthly",
    Employment_StatusJ: "",
    EmployerJ: "",
    Having_Two_years_EmploymentJ: "",
    MoneyJ: "",
    TenureJ: "Monthly",

    Form_Type: "true",

    addressLine1: "",
    addressLine2: "",
    country: ""
  }),
  validationSchema: () =>
    Yup.object().shape({
      FirstName: Yup.string().required("First name is required"),
      LastName: Yup.string().required("Last name is required"),
      Phone: Yup.string().required("phone is required"),
      Email: Yup.string()
        .email()
        .required("Email is required"),
      ConfirmEmail: Yup.string()
        .oneOf([Yup.ref("Email"), null])
        .required("confirmEmail is required"),
      Datepicker: Yup.string().required("Date of Birth is required"),
      Ssn: Yup.string().required("ssn is required"),
      FirstNameJ: Yup.string().required("First name is required"),
      LastNameJ: Yup.string().required("Last name is required"),
      PhoneJ: Yup.string().required("phone is required"),
      EmailJ: Yup.string()
        .email()
        .required("Email is required"),
      ConfirmEmailJ: Yup.string()
        .oneOf([Yup.ref("EmailJ"), null])
        .required("confirmEmail is required"),
      DatepickerJ: Yup.string().required("Date of Birth is required"),
      SsnJ: Yup.string().required("ssn is required"),
      addressLine1: Yup.string().required("Address Line 1 is required"),
      Own: Yup.string().required("Own is required"),
      Rent: Yup.string().required("Rent  is required"),
      StreetAddress: Yup.string().required("Address is required"),
      City: Yup.string().required("City is required"),
      State: Yup.string().required("state is required"),
      Zipcode: Yup.string().required("Zipcode  is required"),
      OwnJ: Yup.string().required("Own is required"),
      RentJ: Yup.string().required("Rent is required"),
      StreetAddressJ: Yup.string().required("Address is required"),
      CityJ: Yup.string().required("City  is required"),
      StateJ: Yup.string().required("State is required"),
      ZipcodeJ: Yup.string().required("Zipcode is required"),
      Empolyement_Status: Yup.string().required(
        "Empolyement_Status is required"
      ),
      Employer: Yup.string().required("Employer is required"),
      Money: Yup.string().required("Field is required"),
      Tenure: Yup.string().required("Field is required"),
      Empolyement_StatusJ: Yup.string().required("Field is required"),
      EmployerJ: Yup.string().required("Employer is required"),
      MoneyJ: Yup.string().required("Field is required"),
      TenureJ: Yup.string().required("Field is required")
    }),

  handleSubmit: values => {
    console.log(values);
  }
});
