import React from "react";
import { Row, Container, Col, Spinner } from "react-bootstrap";
import { Field } from "formik";
import { Formik } from "formik";
import { FaDotCircle, FaAngleDoubleRight, FaAngleUp, FaCheck, FaUserAlt, FaUserFriends, FaCarAlt, FaCheckCircle, FaRegComments } from "react-icons/fa";
import HomeContainer from "./HomeContainer";
import NumberFormat from "react-number-format";



class LeadFormDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowLeadPage: false,
      showWelcomePage: false,
      ShowHomePage: false,
      ShowMainPage: true,
      showReqInfo: false,
      showProInfo: false,
      newHomePage: false,
      showResponsePage: false,
      loading: false,
      resEmail: undefined,
      FirstName: process.env.REACT_APP_SECRET_FIRSTNAME,
      LastName: process.env.REACT_APP_LASTNAME,
      Email: process.env.REACT_APP_SECRET_EMAIL,
      Phone: process.env.REACT_APP_SECRET_PHONE,
      Vehicle: process.env.REACT_APP_SECRET_VIN,
      Year: process.env.REACT_APP_SECRET_YEAR,
      Modal: process.env.REACT_APP_SECRET_MODAL,
      Trim: process.env.REACT_APP_SECRET_TRIM,
      Make: process.env.REACT_APP_SECRET_MAKE,
      Individual: false,
      Joint: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.RadioBoxCheck = this.RadioBoxCheck.bind(this)
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

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
    this.setState({
      ShowLeadPage: false,
      showWelcomePage: false,
      ShowHomePage: false,
      newHomePage: false,
      ShowMainPage: true
    });
  }
  newDesign() {
    this.setState({
      ShowLeadPage: false,
      showWelcomePage: false,
      ShowHomePage: false,
      newHomePage: true
    });
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
  onSubmitFinal(result) {
    this.setState({
      showResponsePage: true,
      ShowMainPage: false,
      resEmail: result.email,
      responseId: result.id
    })
    console.log('******', result)
  }
  PhoneFormate = ({ field, form, ...props }) => {
    return (
      <NumberFormat
        name="Phone"
        onChange={this.handleInputChange}
        value={this.state.Phone}
        placeholder="Phone"
        format="(###) ###-####"
      />
    );
  };
  RadioBoxCheck = e => {
    if (e === "Individual") {
      this.setState({
        Individual: true,
        Joint: false
      });
    } else {
      this.setState({
        Individual: false,
        Joint: true
      });
    }

  };
  render() {
    return (
      <div>
        <Formik
          render={({ touched, errors, handleSubmit }) => (
            <div>
              {this.state.ShowLeadPage && (
                <form>
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
                        name="FirstName"
                        id="FirstName"
                        onChange={this.handleInputChange}
                        value={this.state.FirstName}
                        placeholder="FirstName"
                      />
                      {errors.FirstName && (
                        <div style={{ backgroundColor: "red" }}>
                          {errors.FirstName}
                        </div>
                      )}
                    </Row>
                    <Row>
                      <Field
                        name="LastName"
                        id="LastName"
                        onChange={this.handleInputChange}
                        value={this.state.LastName}
                        placeholder="LastName"
                      />
                      {errors.LastName && (
                        <div style={{ backgroundColor: "red" }}>
                          {errors.LastName}
                        </div>
                      )}
                    </Row>

                    <Row>
                      <Field
                        name="Phone"
                        id="Phone"
                        component={this.PhoneFormate}
                        placeholder="Phone"
                      />
                      {errors.Phone && (
                        <div style={{ backgroundColor: "red" }}>
                          {errors.Phone}
                        </div>
                      )}
                    </Row>
                    <Row>
                      <Field
                        name="Email"
                        onChange={this.handleInputChange}
                        id="Email"
                        value={this.state.Email}
                        placeholder="Email"
                      />
                      {errors.Email && (
                        <div style={{ backgroundColor: "red" }}>
                          {errors.Email}
                        </div>
                      )}
                    </Row>
                    <Row>
                      <button onClick={() => this.showWelcomePage()}>
                        Continue to Credit
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
                      <Field
                        name="vehicle"
                        onChange={this.handleInputChange}
                        id="vehicle"
                        value={this.state.Vehicle}
                        placeholder="VIN"
                      />
                      {touched.vehicle &&
                        typeof errors.vehicle === "string" && (
                          <div className="input-feedback">{errors.vehicle}</div>
                        )}
                    </Row>
                    <Row>
                      <Field
                        name="Year"
                        id="Year"
                        onChange={this.handleInputChange}
                        value={this.state.Year}
                        placeholder="Year"
                      />
                      {touched.Make && typeof errors.Make === "string" && (
                        <div className="input-feedback">{errors.Year}</div>
                      )}
                    </Row>
                    <Row>
                      <Field
                        name="Make"
                        id="Make"
                        onChange={this.handleInputChange}
                        value={this.state.Make}
                        placeholder="Make"
                      />
                      {touched.Trim && typeof errors.Make === "string" && (
                        <div className="input-feedback">{errors.Make}</div>
                      )}
                    </Row>
                    <Row>
                      <Field
                        name="Modal"
                        id="Modal"
                        value={this.state.Modal}
                        onChange={this.handleInputChange}
                        placeholder="Modal"
                      />
                      {touched.Trim && typeof errors.Modal === "string" && (
                        <div className="input-feedback">{errors.Modal}</div>
                      )}
                    </Row>
                    <Row>
                      <Field
                        name="Trim"
                        id="Trim"
                        onChange={this.handleInputChange}
                        value={this.state.Trim}
                        placeholder="Trim"
                      />
                      {touched.Trim && typeof errors.Trim === "string" && (
                        <div className="input-feedback">{errors.Trim}</div>
                      )}
                    </Row>
                    <Row>
                      <button onClick={() => this.showMainPage()}>
                        Start Credit Application
                      </button>
                    </Row>
                  </Container>
                </form>
              )}
              {this.state.ShowHomePage && (
                <form onSubmit={handleSubmit}>
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
                          chnage details about payment terms,vehicle protection
                          or your trade in.
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
                          )}
                      </span>
                      <br />
                      <br />
                      {this.state.showReqInfo && (
                        <div>
                          <Row>
                            <p>
                              Borrower and Co-Borrower,if applicable,will need
                              the following information to compelete the
                              application{" "}
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
                              <FaDotCircle className="circleDot" /> Date of
                              Birth
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
                              <FaDotCircle className="circleDot" /> If less than
                              2 years at current address,what is your previous
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
                              <FaDotCircle className="circleDot" /> If less than
                              2 years at current employer,what is your previous
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
                        onClick={() => this.newDesign()}
                        type="primary"
                        className="login-form-button"
                      >
                        Start Credit Application
                      </button>
                    </Row>
                  </Container>
                </form>
              )}
              {this.state.newHomePage && (
                <form onSubmit={handleSubmit}>
                  <Container>
                    <Row>
                      <Col>
                        <FaCarAlt className='car' />
                      </Col>
                      <Col xs={11}>
                        <Row><h1>Apply for Credit Online</h1></Row>
                        <Row className='sub-tittle'><p>This application should only take about 10 minutes .Don't worry ,we'll only use this information to process your applications </p></Row>
                      </Col>
                    </Row>
                    <div className="applicant">
                      <Row><h6>What you need for all applicants</h6></Row>
                      <Row>
                        <Col className='text'><FaCheck className="check" />Social security number and date of birth </Col>
                        <Col className='text'><FaCheck className="check" /> Housing information</Col>
                        <Col className='text'><FaCheck className="check" /> Employment details</Col>
                      </Row>
                    </div>
                    <div>
                      <Row><h6>Are you applying individually or jointly</h6></Row>
                      <Row>
                        <Col>
                          <div className={this.state.Individual ? 'active-1' : 'radio-box'}>
                            <Row onClick={() => this.RadioBoxCheck('Individual')} >
                              <Col><h6 ><FaUserAlt className="user" />
                                {" "}{"Individual"}
                              </h6>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col>

                          <div className={this.state.Joint ? 'active-1' : 'radio-box'}>
                            <Row onClick={() => this.RadioBoxCheck('Joint')} >
                              <Col><h6 ><FaUserFriends className="user" />
                                {" "}{"Joint"}
                              </h6>
                              </Col>
                            </Row>
                          </div>
                        </Col>

                      </Row>
                    </div>
                    <Row>
                      <button
                        onClick={() => this.startApp()}
                        type="primary"
                        className="login-form-button"
                      >
                        Start
                      </button>
                    </Row>
                  </Container>
                </form>)}
              {this.state.ShowMainPage && <HomeContainer onSubmitFinal={this.onSubmitFinal.bind(this)} data={this.state} />}

              {this.state.showResponsePage &&
                <div >
                  <Row>
                    <Col>
                      <FaCarAlt className='car' />
                    </Col>
                    <Col xs={11}>
                      <Row><h1>Housing</h1></Row>
                      <Row className='sub-tittle'><p>For your protection, we will be looking at your recent history to verify your identity.</p></Row>
                    </Col>
                  </Row>
                  <Row className="r-tittle">
                    <Col xs={9}><p><h3><FaCheckCircle className='check-icon' /> Application Submitted!</h3></p>
                    </Col>
                    <Col className='cooment'><FaRegComments className='cooment-icon' /> Get text updates  </Col>

                  </Row>
                  <div className='r-content'>
                    <Row>
                      <h4>
                        Applicantion #:{" "}
                        {this.state.responseId}
                      </h4>
                    </Row>
                    <Row>
                      <p>
                        A copy of this Application has been sent to <b>{this.state.resEmail}</b>
                        <br />
                        Somone from <b>Name</b> dealership will contact you.
                 <br />
                        Questions? Call <b>1-800-555-1234</b>
                      </p>
                    </Row>
                  </div>
                </div>
              }
              {this.state.loading && (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default LeadFormDetails;
