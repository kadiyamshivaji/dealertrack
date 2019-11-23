import React from "react";
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import {Row,Col,Container} from 'react-bootstrap'
import { Field } from "formik";
import { Formik } from 'formik';
import { FaArrowRight,FaArrowUp } from 'react-icons/fa';
import HomeContainer from './HomeContainer'
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
    ShowLeadPage:true,
    showWelcomePage:false,
    ShowHomePage:false,
    ShowMainPage:false,
    showReqInfo:false,
    showProInfo:false,
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
  showWelcomePage=()=>{
    this.setState({
      ShowLeadPage:false,
      showWelcomePage:true,
      ShowHomePage:false,
      ShowMainPage:false,
    })
  }
  showMainPage(){
    this.setState({
      ShowLeadPage:false,
      showWelcomePage:false,
      ShowHomePage:true,
      ShowMainPage:false,
    })
  }
  startApp(){
    this.setState({
      ShowLeadPage:false,
      showWelcomePage:false,
      ShowHomePage:false,
      ShowMainPage:true,
    },function(){
      console.log(this.state,null,2)
    }
    )
  }
  setShowProInfo =e=>{
    e.preventDefault();
   this.setState({
    showProInfo:!this.state.showProInfo
   })
  }
  setShowReqInfo =e=>{
    e.preventDefault();
    this.setState({
      showReqInfo:!this.state.showReqInfo
     })
  }
 
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
          {this.state.ShowLeadPage && 
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
                  <button onClick={()=>this.showWelcomePage()}>Conitnue to Credit</button>
                  </Row>
        </Container>
      }
      {this.state.showWelcomePage && 
            <Container>
                          <Row>
                          <label>Welcome firstName</label>
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
                          <button  onClick={()=>this.showMainPage()} >Start Credit Application</button>
                          </Row>
            </Container>
      }
      {
        this.state.ShowHomePage &&
        <Container>
          <Row>
            <h2 className="h3">Apply for Credit  </h2>
          </Row>
          <Row>
            <h3>Why it's smart for Apply Online</h3>
            <p>Save time at dealership</p>
            <p>Know whatyour payment will be up front</p>
            <p>Get the best loan Rate you qualify for</p>
            <p>Avoid the suprises if you canit get the car you want</p>
          </Row>
          <Row>
            <hr/>
          </Row>
          <Row>
            <h3>Your Information is Protected</h3>
          </Row>
          <Row>
          <label  onClick={this.setShowProInfo} type="primary">
            { !this.state.showProInfo? 'Show More' :'Show Less'}
            { !this.state.showProInfo?  
                    <FaArrowRight />
                        :<FaArrowUp />}
            </label><br/><br/>
            {this.state.showProInfo &&
            <p>We realize that some people get nervous when giving personal info,especially over the computer.Not to Worry.All information is encrypted and protected and only used to process your application <br></br>
            Please Note: Once you submit an application,you can't chnage details about payment terms,vehicle protection or your trade in.</p>
            }
          </Row>
          <Row>
            <hr/>
          </Row>
          <Row>
          <h3>Required Information</h3>
          </Row>
          <Row>
              <label onClick={this.setShowReqInfo}  type="primary">
            { !this.state.showReqInfo? 'Show More' :'Show Less'}
                { !this.state.showReqInfo?  
                         <FaArrowRight />
                         :<FaArrowUp />}
            </label><br/><br/>
            {this.state.showReqInfo &&
                <div>
                    <p>Borrower and Co-Borrower,if applicable,will need the following information to compelete the application </p>
                    <h3>Personal Information</h3>
                    <p>Name</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                    <p>Date of Birth</p>
                    <p>Social Security Number</p>

                    <h3>Housing Information</h3>
                    <p>Monthly Mortgage or Rent</p>
                    <p>Home Address</p>
                    <p>If less than 2 years at current address,what is your previous address></p>
                    <h3>Employment Information</h3>
                    <p>Employer</p>
                    <p>Income</p>
                    <p>If less than 2 years at current employer,what is your previous employer ?</p>
                    <p>Additional Income(optional)</p>
                </div>
                }
          </Row>
          <Row>
                <hr/>
          </Row>
          <Row>
          <button  onClick={()=>this.startApp()}  type="primary" className="login-form-button">
                Start Credit Application
        </button>
          </Row>
        </Container>
      }
      { this.state.ShowMainPage &&
         <HomeContainer/>
      }
            </form>
          )}
        />
      </div>
    );
  }
}

export default LeadFormDetails;