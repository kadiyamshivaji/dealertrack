import React from "react";
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
import { DisplayFormikState } from "./helper";
import ContactInfo from "./ContactInfo";
import HousingDetails from "./HousingDetails";
import EmploymentDetails from "./EmploymentDetails";
import ReviewDetails from "./ReviewDetails";
import LeadFormDetails from "./LeadFormDetails";
import withFormik from "./withFormik";
import "bootstrap/dist/css/bootstrap.min.css";
function ContactInfoValidations({ errors }) {
  return !errors.FirstName;
}

function HousingDetailsValidations({ errors }) {
  return !errors.Rent;
}

function EmploymentDetailsValidations({ errors }) {
  return !errors.Employer;
}

function ReviewDetailsValidations({ errors }) {
  return !errors.Employer;
}
class HomeContainer extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
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
                validators={getValidators([
                  ContactInfoValidations,
                  HousingDetailsValidations,
                  EmploymentDetailsValidations,
                  ReviewDetailsValidations
                ])}
              >
                <Step component={ContactInfo} title="Contact Info" />
                <Step component={HousingDetails} title="Housing" />
                <Step component={EmploymentDetails} title="Employment" />
                <Step component={ReviewDetails} title="Review" />
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
    );
  }
}

const WithFormikApp = withFormik(HomeContainer);
export default WithFormikApp;
