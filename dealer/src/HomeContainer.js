
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
  import HousingDetails from "./HousingDetails";
  import EmployementDetails from "./EmploymentDetails";
  import PersonalDetails from "./PersonalDetails";
  import WelcomeDetails from './WelcomeDetails';
  import LeadFormDetails from './LeadFormDetails';
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
  class HomeContainer extends React.Component {
      constructor(props){
          super(props);

      }
    render() {
        return (
            <div>
            <FormikWizardProvider {...this.props}>
          {({ getValidators, ...otherProps }) => (
            <Wizard {...otherProps}>
        <LeadFormDetails></LeadFormDetails>

              <StepsList
                validators={getValidators([basicValidations, contactValidations, addressValidations])}
              >
                <Step component={ContactInfo} title="Contact Info" />
                <Step component={HousingDetails} title="Housing Details" />
                <Step component={EmployementDetails} title="Employement Details" />
                <Step component={PersonalDetails} title="Personal Details" />
              </StepsList>
              <ButtonsList>
                <PreviousButton />
                <NextButton />
                <SubmitButton />
              </ButtonsList>
            </Wizard>
          )}
        </FormikWizardProvider>
        <DisplayFormikState {...this.props} /> 
        </div>
        )
    }
    
  }

  const WithFormikApp = withFormik(HomeContainer);
export default WithFormikApp;
  