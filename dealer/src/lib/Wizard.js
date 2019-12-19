import React, { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import StepTabs from "./StepTabs";
import { constructPayload } from "../lib/util";
import axios from "axios";

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStepIndex: 0,
      totalSteps: this.getTotalSteps(props.children),
      stepTabs: []
    };
  }

  getTotalSteps(children) {
    let totalSteps = 0;
    Children.forEach(children, child => {
      if (child.type.displayName === "StepsList") {
        totalSteps = child.props.children.length - 1;
      }
    });
    return totalSteps;
  }

  onPreviousStep = () => {
    this.setState({
      activeStepIndex: this.state.activeStepIndex - 1
    });
  };

  onNextStep = () => {
    this.setState({
      activeStepIndex: this.state.activeStepIndex + 1
    });
  };

  onSubmit = () => {
    // const response = submit(this.props.values);
    const payload = this.props.values;
    const token =
      "AAIkMjYxZWM2YWEtNmUzYy00YmRiLTg0NmMtMzBmMzYzZDFjNGZjla7VmkO3bkvOTVkKhTT_hP-2sorxUjg0foID_xhLWxSvKeX6oX5JzltzYMfmbYMvFVrnCBDbZnkdX7x5Kvr6rCqytSDLmjZ-1JP95wiRJsovoCgO1TkV5-bTQ0WTlr4ls7GRKqQV1bOvVOm1lcYrfB9eFoMZTjoNYjNYLMdz09g";
    const payloadJSON = constructPayload(payload);
    axios
      .post(
        `https://fni-api-np.dealertrack.com/sfni/uat1/credit-application/v1/deals/credit-apps
    `,
        payloadJSON,
        {
          headers: {
            Authorization: "Bearer " + token
          }
        }
      )
      .then(res => {
        const response = res.data;
        const result = {
          id: response.applicationReferenceNumber,
          email: this.props.values.Email
        };
        this.props.onSubmitFinal(result);
      });
  };

  updateStepTabs = stepTabs => {
    this.setState({
      stepTabs
    });
  };

  getInitialComponents() {
    const { children, ...props } = this.props;
    let stepsComponent = null;
    let buttonsListComponent = null;
    let validators = [];

    Children.forEach(children, child => {
      if (child.type.displayName === "StepsList") {
        stepsComponent = cloneElement(child, {
          activeStepIndex: this.state.activeStepIndex,
          updateStepTabs: this.updateStepTabs,
          ...props
        });
        if (child.props.validators) {
          // eslint-disable-next-line prefer-destructuring
          validators = child.props.validators;
        }
      }
      if (child.type.displayName === "ButtonsList") {
        buttonsListComponent = cloneElement(child, {
          activeStepIndex: this.state.activeStepIndex,
          totalSteps: this.state.totalSteps,
          onSubmit: this.onSubmit,
          onNextStep: this.onNextStep,
          onPreviousStep: this.onPreviousStep,
          validators,
          ...props
        });
      }
    });
    return { stepsComponent, buttonsListComponent };
  }

  render() {
    const { className } = this.props;
    const {
      stepsComponent,
      buttonsListComponent
    } = this.getInitialComponents();
    return (
      <div
        className={cx("react-formik-wizard", {
          [className]: !!className
        })}
      >
        <StepTabs
          tabs={this.state.stepTabs}
          activeStepIndex={this.state.activeStepIndex}
        />
        {stepsComponent}
        {buttonsListComponent}
      </div>
    );
  }
}

Wizard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

Wizard.displayName = "Wizard";

export default Wizard;
