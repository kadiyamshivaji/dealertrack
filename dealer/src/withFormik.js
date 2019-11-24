/* eslint-disable no-useless-escape */
import { withFormik } from 'formik';
import * as Yup from 'yup';

export default withFormik({
  displayName: 'WizardForm',
  enableReinitialize: true,
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail:'',
    datepicker:'',
    ssn:'',
    FirstNameJ: '',
    LastNameJ: '',
    PhoneJ: '',
    EmailJ: '',
    ConfirmEmailJ:'',
    DatepickerJ:'',
    SsnJ:'',
    own:'',
    Rent:'',
    mobile: '',
    Form_Type:"true",
    addressLine1: '',
    addressLine2: '',
    country: '',
  }),
  validationSchema: () =>
    Yup.object().shape({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      phone: Yup.string().required('phone is required'),
      email: Yup.string().required('Email is required'),
      confirmEmail: Yup.string().required('confirmEmail is required'),
      datepicker: Yup.string().required('datepicker is required'),
      ssn: Yup.string().required('ssn is required'),
      FirstNameJ: Yup.string().required('First name is required'),
      LastNameJ: Yup.string().required('Last name is required'),
      PhoneJ: Yup.string().required('phone is required'),
      EmailJ: Yup.string().required('Email is required'),
      ConfirmEmailJ: Yup.string().required('confirmEmail is required'),
      DatepickerJ: Yup.string().required('datepicker is required'),
      SsnJ: Yup.string().required('ssn is required'),
      addressLine1: Yup.string().required('Address Line 1 is required'),
    }),
  handleSubmit: values => {
    console.log(values);
  },
});
