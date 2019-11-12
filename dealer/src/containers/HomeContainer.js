import React from 'react';
import { connect } from 'react-redux'
import ContactInfo from "./ContactInfoContainer";
import EmploymentContainer from "./EmploymentContainer";
import Housing from "./HousingContainer";
import  PersonalContainer from "./PersonalContainer";
import {setNextPage,startApp , setShowProInfo,
    setShowReqInfo} from '../store/actions';
import { Form, Icon, Input, Button, Checkbox,Steps, Divider } from 'antd';
const { Step } = Steps;

class HomeContainer extends React.Component {
    nextClick = e => {
        e.preventDefault();
        this.props.setNextPage({payload:this.pageValues(e.target.name)})
      };
      startApp =e=>{
        e.preventDefault();
        this.props.startApp({payload:true})
      }
      setShowProInfo =e=>{
        e.preventDefault();
        this.props.setShowProInfo()
      }
      setShowReqInfo =e=>{
        e.preventDefault();
        this.props.setShowReqInfo()
      }
      pageValues(name){
          const values={
              'contactInfo':1,
              'housing':2,
              'employment':3,
              'personal':4
          }
          return values[name];
      }
    render() {
        return  (
            <div className='content'>
                 { !this.props.startAppState &&
                    <div>
                            <h2 className="h3">Apply for Credit  </h2>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                            <h3>Why it's smart for Apply Online</h3>
                            <p>Save time at dealership</p>
                            <p>Know whatyour payment will be up front</p>
                            <p>Get the best loan Rate you qualify for</p>
                            <p>Avoid the suprises if you canit get the car you want</p>
                            <Divider></Divider>
                            <h3>Your Information is Protected</h3>
                                <label  onClick={this.setShowProInfo} type="primary">
                                { !this.props.showProInfo? 'Show More' :'Show Less'}
                                { !this.props.showProInfo?  
                                        <Icon type="double-right" />
                                            :<Icon type="up" />}
                                </label><br/><br/>
                                {this.props.showProInfo &&
                                <p>We realize that some people get nervous when giving personal info,especially over the computer.Not to Worry.All information is encrypted and protected and only used to process your application <br></br>
                                Please Note: Once you submit an application,you can't chnage details about payment terms,vehicle protection or your trade in.</p>
                                }
                            
                            <Divider></Divider>             
                            <h3>Required Information</h3>
                            <label onClick={this.setShowReqInfo}  type="primary">
                            { !this.props.showReqInfo? 'Show More' :'Show Less'}
                                { !this.props.showReqInfo?  
                                        <Icon type="double-right" />
                                            :<Icon type="up" />}
                            </label><br/><br/>
                            {this.props.showReqInfo &&
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
                            <Divider></Divider>             
                            <Button onClick={this.startApp}  type="primary" htmlType="submit" className="login-form-button">
                                    Start Credit Application
                            </Button>

                        </Form>
                    </div>
                }
            { this.props.startAppState &&
                 <div>
                    <div>
                        <Steps progressDot={false} current={this.props.currentDot}>
                        <Step title="Finished" description="This is a description." />
                        <Step title="In Progress" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                        <Step title="Waiting" description="This is a description." />
                        </Steps>
                        <Divider />
                    </div>
                    { this.props.currentDot===1 &&
                        <div>
                            <ContactInfo></ContactInfo>
                        </div>
                    }

                    { this.props.currentDot===2 &&
                        <div>
                            <Housing></Housing>
                        </div>
                    }
               
                    { this.props.currentDot===3 &&
                        <div>
                                <EmploymentContainer></EmploymentContainer>
                        </div>
                    }

                    { this.props.currentDot===4 &&
                        <div>
                                <PersonalContainer></PersonalContainer>
                        </div>
                    }
                </div>                
            }               
        </div>
        );
     }
}

const mapStateToProps = (state) => ({
    currentDot:state.currentDot,
    startAppState:state.startApp,
    showProInfo:state.showMoreProtectedInfo,
    showReqInfo:state.showMoreRequiredInfo
})
const mapDispatchToProps = {
    setNextPage: setNextPage,
    startApp:startApp,
    setShowProInfo:setShowProInfo,
    setShowReqInfo:setShowReqInfo
};
HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default HomeContainer;
