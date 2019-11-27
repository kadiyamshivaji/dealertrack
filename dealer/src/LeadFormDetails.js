import React from "react";
import { Row, Container } from "react-bootstrap";
import { Field } from "formik";
import { Formik } from "formik";
import { FaDotCircle, FaAngleDoubleRight, FaAngleUp } from "react-icons/fa";
import HomeContainer from "./HomeContainer";
const validate = {
  1: values => {
    const errors = {};
    if (!values.name) errors.name = "required";
    return errors;
  },
  2: values => {
    const errors = {};
    if (!values.email) errors.email = "required";
    return errors;
  },
  3: values => {
    const errors = {};
    if (!values.password) errors.password = "required";
    return errors;
  }
};
class LeadFormDetails extends React.Component {
  state = {
    ShowLeadPage: true,
    showWelcomePage: false,
    ShowHomePage: false,
    ShowMainPage: false,
    showReqInfo: false,
    showProInfo: false,
    formValues: {
      FirstNameL: process.env.REACT_APP_SECRET_FIRSTNAME,
      LastNameL: process.env.REACT_APP_LASTNAME,
      EmailL: process.env.REACT_APP_SECRET_EMAIL,
      PhoneL: process.env.REACT_APP_SECRET_PHONE,
      vehicle:process.env.REACT_APP_SECRET_VIN,
      Year:process.env.REACT_APP_SECRET_YEAR,
      Modal:process.env.REACT_APP_SECRET_MODAL,
      Trim:process.env.REACT_APP_SECRET_TRIM,
      Make:process.env.REACT_APP_SECRET_MAKE
    },
    step: 1
  };

  next = formValues =>
    this.setState(state => ({
      step: state.step + 1,
      formValues
    }));

  onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };
  handlePage1Submit=(values)=>{
    console.log('*****',values)
  }
  handleSubmit = (values, bag) => {
    const { step } = this.state;
    if (step === 3) {
      return this.onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };
  showWelcomePage = () => {
    this.setState({
      ShowLeadPage: false,
      showWelcomePage: true,
      ShowHomePage: false,
      ShowMainPage: false
    });
  };
  showMainPage() {
    this.setState({
      ShowLeadPage: false,
      showWelcomePage: false,
      ShowHomePage: true,
      ShowMainPage: false
    });
  }
  startApp() {
    this.setState(
      {
        ShowLeadPage: false,
        showWelcomePage: false,
        ShowHomePage: false,
        ShowMainPage: true
      },
      function() {
        console.log(this.state, null, 2);
      }
    );
  }
  setShowProInfo = e => {
    e.preventDefault();
    this.setState({
      showProInfo: !this.state.showProInfo
    });
  };
  setShowReqInfo = e => {
    e.preventDefault();
    this.setState({
      showReqInfo: !this.state.showReqInfo
    });
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
            handleSubmit,handlePage1Submit
          }) => (
           <div>
              {this.state.ShowLeadPage && (
                <form onSubmit={handlePage1Submit}>
                <Container>
                  <Row>
                    <h2>Lead Form</h2>
                  </Row>
                  <br />
                  <Row>
                    <h4>This activity is lead gated</h4>
                  </Row>
                  
                  <Row>
                    <Field
                      name="FirstNameL"
                      id="FirstNameL"
                      value={values.FirstNameL}
                      placeholder="FirstNameL"
                    />
                    {errors.FirstNameL && (
                      <div style={{ backgroundColor: "red" }}>
                        {errors.FirstNameL }
                      </div>
                    )}
                  </Row>
                  <Row>
                    <Field
                      name="LastNameL"
                      id="LastNameL"
                      value={values.LastNameL}
                      placeholder="LastName"
                    />
                    {errors.LastNameL && (
                      <div style={{ backgroundColor: "red" }}>
                        {errors.LastNameL}
                      </div>
                    )}
                  </Row>
                  <Row>
                    <Field name="PhoneL" id="PhoneL"  value={values.PhoneL} placeholder="Phone" />
                    {errors.PhoneL && (
                      <div style={{ backgroundColor: "red" }}>
                        {errors.PhoneL}
                      </div>
                    )}
                  </Row>
                  <Row>
                    <Field name="EmailL" id="EmailL"  value={values.EmailL} placeholder="Email" />
                    {errors.EmailL && (
                      <div style={{ backgroundColor: "red" }}>
                        {errors.EmailL}
                      </div>
                    )}
                  </Row>
                  <Row>
                    <button onClick={() => this.showWelcomePage()}>
                      Conitnue to Credit
                    </button>
                  </Row>
                </Container>
              </form>
              )}
              {this.state.showWelcomePage && (
                <form onSubmit={handleSubmit}>
                <Container>
                  <Row>
                    <h2>Vehicle Information</h2>
                  </Row>
                  <br />
                  <Row>
                    <Field name="vehicle" id="vehicle" value={values.vehicle} placeholder="VIN" />
                    {touched.vehicle && typeof errors.vehicle === "string" && (
                      <div className="input-feedback">{errors.vehicle}</div>
                    )}
                  </Row>
                  <Row>
                    <Field name="Year" id="Year" value={values.Year} placeholder="Year" />
                    {touched.Make && typeof errors.Make === "string" && (
                      <div className="input-feedback">{errors.Year}</div>
                    )}
                  </Row>
                  <Row>
                    <Field name="Make" id="Make" value={values.Make} placeholder="Make" />
                    {touched.Trim && typeof errors.Make === "string" && (
                      <div className="input-feedback">{errors.Make}</div>
                    )}
                  </Row>
                  <Row>
                    <Field name="Modal" id="Modal" value={values.Modal}  placeholder="Modal" />
                    {touched.Trim && typeof errors.Modal === "string" && (
                      <div className="input-feedback">{errors.Modal}</div>
                    )}
                  </Row>
                  <Row>
                    <Field name="Trim" id="Trim" value={values.Trim} placeholder="Trim" />
                    {touched.Trim && typeof errors.Trim === "string" && (
                      <div className="input-feedback">{errors.Trim}</div>
                    )}
                  </Row>
                  <Row>
                    <button  onClick={() => this.showMainPage()}>
                      Start Credit Application
                    </button>
                  </Row>
                </Container>
                </form>
              )}
              {this.state.ShowHomePage &&                 <form onSubmit={handleSubmit}>

                <Container>
                  <Row>
                    <h2>Apply for Credit</h2>
                  </Row>
                  <br />
                  <Row>
                    <h4>Why it's smart for Apply Online</h4>
                  </Row>
                  <Row>
                    <p>
                      <FaDotCircle className="circleDot" /> Save time at
                      dealership
                    </p>
                  </Row>
                  <Row>
                    <p>
                      <FaDotCircle className="circleDot" /> Know whatyour
                      payment will be up front
                    </p>
                  </Row>
                  <Row>
                    <p>
                      <FaDotCircle className="circleDot" /> Get the best loan
                      Rate you qualify for
                    </p>
                  </Row>
                  <Row>
                    <p>
                      <FaDotCircle className="circleDot" /> Avoid the suprises
                      if you canit get the car you want
                    </p>
                  </Row>
                  <Row>
                    <hr />
                  </Row>
                  <Row>
                    <h4>Your Information is Protected</h4>
                  </Row>
                  <Row>
                    <span onClick={this.setShowProInfo} type="primary">
                      {!this.state.showProInfo ? "Show More" : "Show Less"}
                      {!this.state.showProInfo ? (
                        <FaAngleDoubleRight />
                      ) : (
                        <FaAngleUp />
                      )}
                    </span>
                    <br />
                    <br />
                    {this.state.showProInfo && (
                      <p>
                        We realize that some people get nervous when giving
                        personal info,especially over the computer.Not to
                        Worry.All information is encrypted and protected and
                        only used to process your application <br></br>
                        Please Note: Once you submit an application,you can't
                        chnage details about payment terms,vehicle protection or
                        your trade in.
                      </p>
                    )}
                  </Row>
                  <Row>
                    <hr />
                  </Row>
                  <Row>
                    <h4>Required Information</h4>
                  </Row>
                  <Row>
                    <span onClick={this.setShowReqInfo} type="primary">
                      {!this.state.showReqInfo ? "Show More" : "Show Less"}
                      {!this.state.showReqInfo ? (
                        <FaAngleDoubleRight />
                      ) : (
                        <FaAngleUp />
                      )
                      }
                    </span>
                    <br />
                    <br />
                    {this.state.showReqInfo && (
                      <div>
                        <Row>
                          <p>
                            Borrower and Co-Borrower,if applicable,will need the
                            following information to compelete the application{" "}
                          </p>
                        </Row>
                        <Row>
                          <h5>Personal Information</h5>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Name
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Phone Number
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Email
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Date of Birth
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Social
                            Security Number
                          </p>
                        </Row>
                        <Row>
                          <h5>Housing Information</h5>
                        </Row>
                        <Row>
                          <p>
                            {" "}
                            <FaDotCircle className="circleDot" /> Monthly
                            Mortgage or Rent
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Home Address
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> If less than 2
                            years at current address,what is your previous
                            address>
                          </p>
                        </Row>
                        <Row>
                          <h5>Employment Information</h5>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Employer
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Income
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> If less than 2
                            years at current employer,what is your previous
                            employer ?
                          </p>
                        </Row>
                        <Row>
                          <p>
                            <FaDotCircle className="circleDot" /> Additional
                            Income(optional)
                          </p>
                        </Row>
                      </div>
                    )}
                  </Row>
                  <Row>
                    <hr />
                  </Row>
                  <Row>
                    <button
                      onClick={() => this.startApp()}
                      type="primary"
                      className="login-form-button"
                    >
                      Start Credit Application
                    </button>
                  </Row>
                </Container>
              </form>
              }
              {this.state.ShowMainPage && <HomeContainer details={this.state} />}
            </div>
          )}
        />
      </div>
    );
  }
}

export default LeadFormDetails;
