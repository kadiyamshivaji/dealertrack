
import React from "react";
import ReactDOM from "react-dom";
import {
    FormikWizardProvider,
    Wizard,
    StepsList,
    Step,
    ButtonsList,
    PreviousButton,
    NextButton,
    SubmitButton
  } from "./lib";
  import { DisplayFormikState } from './helper';
  import ContactInfo from "./ContactInfo";
  import ContactDetails from "./ContactDetails";
  import AddressDetails from "./AddressDetails";
  import withFormik from "./withFormik";
  
 import "./helper.css";  
 import 'bootstrap/dist/css/bootstrap.min.css';
  function basicValidations({ errors }) {
    return !errors.firstName;
  }
  
  function contactValidations({ errors }) {
    return !errors.email;
  }
  
  function addressValidations({ errors }) {
    return !errors.addressLine1;
  }
  
  function App(props) {
    console.log(process.env.REACT_APP_CLIENT_ID); 
    return (
      <div className="App">
        <FormikWizardProvider {...props}>
          {({ getValidators, ...otherProps }) => (
            <Wizard {...otherProps}>
              <StepsList
                validators={getValidators([basicValidations, contactValidations, addressValidations])}
              >
                <Step component={ContactInfo} title="Contact Info" />
                <Step component={ContactDetails} title="Housing Details" />
                <Step component={AddressDetails} title="Employement Details" />
                <Step component={AddressDetails} title="Personal Details" />
              </StepsList>
              <ButtonsList>
                <PreviousButton />
                <NextButton />
                <SubmitButton />
              </ButtonsList>
            </Wizard>
          )}
        </FormikWizardProvider>
        <DisplayFormikState {...props} />
      </div>
    );
  }
  
  const WithFormikApp = withFormik(App);
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<WithFormikApp />, rootElement);
  