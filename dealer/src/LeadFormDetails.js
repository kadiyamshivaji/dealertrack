import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import {Row,Col,Container} from 'react-bootstrap'
import { Field } from "formik";
import { Formik } from 'formik';

const validate = {
  1: values => {
    const errors = {};
    if (!values.name) errors.name = 'required';
    return errors;
  },
  2: values => {
    const errors = {};
    if (!values.email) errors.email = 'required';
    return errors;
  },
  3: values => {
    const errors = {};
    if (!values.password) errors.password = 'required';
    return errors;
  },
};
class LeadFormDetails extends React.Component {
  state = {
    formValues: {
      FirstNameL: '',
      LastNameL: '',
      EmailL: '',
      PhoneL:''
    },
    step: 1,
  };

  next = formValues =>
    this.setState(state => ({
      step: state.step + 1,
      formValues,
    }));

  onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  handleSubmit = (values, bag) => {
    const { step } = this.state;
    if (step === 3) {
      return this.onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };

  render() {
    const { formValues, step } = this.state;
    return (
      <div>
        <Formik
          initialValues={formValues}
          validate={validate[step]}
          onSubmit={this.handleSubmit}
          render={({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
               <Container>
  <Row>
    <Field name="FrstNameL" id="FirstNameL" placeholder='FirstName' />
    {errors.FirstNameL && (
    <div style={{ backgroundColor: 'red' }}>{errors.FirstNameL}</div>
  )}
  </Row>
  <Row>
    <Field name="LastNameL" id="LastNameL" placeholder='LastName' />
    {errors.LastNameL && (
    <div style={{ backgroundColor: 'red' }}>{errors.LastNameL}</div>
  )}
  </Row>
  <Row>
    <Field name="PhoneL" id="PhoneL" placeholder='Phone' />
   {errors.PhoneL && (
    <div style={{ backgroundColor: 'red' }}>{errors.PhoneL}</div>
  )}
  </Row>
  <Row>
    <Field name="EmailL" id="EmailL" placeholder='Email' />
    {errors.EmailL && (
    <div style={{ backgroundColor: 'red' }}>{errors.EmailL}</div>
  )}
  </Row>
  <Row>
   <button>Conitnue to Credit</button>
  </Row>

</Container>
<Container>
    <Row>
     <label>Welcome <firstName></firstName></label>
    </Row>
    <Row>
     <label>Do you know your credit score?</label>
    </Row>
    <Row>
     <label>Do you know your credit scorkjfskdjfsjdfksjf
         sfdksdflsf
         sjdfksjfs
         skfdhskfksf
         jskdfj?</label>
    </Row>
    <Row>
      <Field name="LastNameL" id="LastNameL" placeholder='LastName' />
      {touched.LastNameL &&
          typeof errors.LastNameL === "string" &&(
            <div className="input-feedback">{errors.LastNameL}</div>
          )}
    </Row>
    <Row>
      <Field name="PhoneL" id="PhoneL" placeholder='Phone' />
      {touched.PhoneL &&
          typeof errors.PhoneL === "string" &&(
            <div className="input-feedback">{errors.PhoneL}</div>
          )}
    </Row>
    <Row>
      <Field name="EmailL" id="EmailL" placeholder='Email' />
      {touched.EmailL &&
          typeof errors.EmailL === "string" &&(
            <div className="input-feedback">{errors.EmailL}</div>
          )}
    </Row>
    <Row>
     <button>Get my Credit Rating </button>
    </Row>
    <Row>
     <button>Start Credit Application</button>
    </Row>
</Container>
            </form>
          )}
        />
      </div>
    );
  }
}

export default LeadFormDetails;