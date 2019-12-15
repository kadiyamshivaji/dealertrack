import React from 'react';
import PropTypes from 'prop-types';
import { Row,  Container } from "react-bootstrap";

const WizardButton = ({
  children,
  type,
  show,
  className,
  onClick,
  label,
  validator,
}) =>
  show ? (
    children ? (
      React.cloneElement(children, {
        onClick: !validator || validator.call(null) ? onClick : null,
        disabled: typeof validator === 'function' && !validator.call(null),
      })
    ) : (
      <Container>
      <Row>
      <button
        type={type}
        className={className}
        onClick={!validator || validator.call(null) ? onClick : null}
        disabled={typeof validator === 'function' && !validator.call(null)}
      >
        {label || 'Next'}
      </button>
      </Row>
      </Container>
    )
  ) : null;

WizardButton.defaultProps = {
  type: 'button',
};

WizardButton.propTypes = {
  show: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
  validator: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

WizardButton.displayName = 'WizardButton';

export default WizardButton;
