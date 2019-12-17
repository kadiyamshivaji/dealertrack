import React from "react";
import {
  FormikWizardProvider,
  Wizard,
  StepsList,
  Step,
  ButtonsList,
  PreviousButton,
  NextButton
} from "./lib";
import { DisplayFormikState } from "./helper";
import ContactInfo from "./ContactInfo";
import HousingDetails from "./Housing";
import EmploymentDetails from "./Employment";
import ReviewDetails from "./Review";
import LeadFormDetails from "./LeadFormDetails";
import withFormik from "./withFormik";
import "bootstrap/dist/css/bootstrap.min.css";
import SubmitButton from './lib/SubmitButton';
function ContactInfoValidations({ errors, values }) {
  if (!values.IsCoApplicantFormEnable) {
    return (
      !errors.FirstName &&
      !errors.LastName &&
      !errors.Email &&
      !errors.Phone &&
      !errors.ConfirmEmail &&
      !errors.DateOfBirth &&
      !errors.Ssn
    );
  } else {
    return (
      !errors.FirstName &&
      !errors.LastName &&
      !errors.Email &&
      !errors.Phone &&
      !errors.ConfirmEmail &&
      !errors.DateOfBirth &&
      !errors.Ssn &&
      !errors.FirstNameJ &&
      !errors.LastNameJ &&
      !errors.EmailJ &&
      !errors.PhoneJ &&
      !errors.ConfirmEmailJ &&
      !errors.DateOfBirthJ &&
      !errors.SsnJ
    );
  }
}

function HousingDetailsValidations({ errors, values }) {
  if (!values.IsCoApplicantFormEnable) {
    return (
      !errors.Own &&
      !errors.Rent &&
      !errors.StreetAddress &&
      !errors.City &&
      !errors.State &&
      !errors.Zipcode
    );
  } else {
    return (
      !errors.Own &&
      !errors.Rent &&
      !errors.StreetAddress &&
      !errors.City &&
      !errors.State &&
      !errors.Zipcode &&
      !errors.OwnJ &&
      !errors.RentJ &&
      !errors.StreetAddressJ &&
      !errors.CityJ &&
      !errors.StateJ &&
      !errors.ZipcodeJ
    );
  }
}

function EmploymentDetailsValidations({ errors, values }) {
  if (!values.IsCoApplicantFormEnable) {
    return (
      !errors.Employment_Status &&
      !errors.Employer &&
      !errors.Money
    );
  } else {
    return (
      !errors.Employment_Status &&
      !errors.Employer &&
      !errors.Money &&
      !errors.Employment_StatusJ &&
      !errors.EmployerJ &&
      !errors.MoneyJ
    );
  }
}

function ReviewDetailsValidations({ errors, values }) {
  if (!values.IsCoApplicantFormEnable) {
    return values.Policy1;
  } else {
    return values.Policy1 && values.Policy2;
  }
}
class HomeContainer extends React.Component {
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
                <Step component={ContactInfo} title="Personal" />
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
