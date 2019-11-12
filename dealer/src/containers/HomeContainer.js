import React from 'react';
import { connect } from 'react-redux'
import ContactInfo from "./ContactInfoContainer";
import EmploymentContainer from "./EmploymentContainer";
import Housing from "./HousingContainer";
import {setNextPage,startApp} from '../store/actions';
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
            <div >
                        <h3 className="h3">Apply for Credit  </h3>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                         <h4>Why it's smart for Apply Online</h4>
                         <p>Save time at dealership</p>
                         <p>Know whatyour payment will be up front</p>
                         <p>Get the best loan Rate you qualify for</p>
                         <p>Avoid the suprises if you canit get the car you want</p>
                         <Divider></Divider>
                         <h4>Your Information is Protected</h4>
                         <Button type="primary">
                            Show more
                            <Icon type="double-right" />
                        </Button>
                         <Divider></Divider>             
                         <h4>Required Information</h4>
                         <Button type="primary">
                            Show more
                            <Icon type="double-right" />
                        </Button><br/><br/>
                         <Button onClick={this.nextClick} name='housing' type="primary" htmlType="submit" className="login-form-button">
                                                            Start Credit Application
                         </Button>
                         <p>if you are not ready to apply the credit and just want to know your rates <a>check them here</a></p>
           </Form>
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
                                <Button onClick={this.nextClick} name='housing' type="primary" htmlType="submit" className="login-form-button">
                                Next Housing
                                </Button>
                        </div>
                    }

                    { this.props.currentDot===2 &&
                        <div>
                            <Housing></Housing>
                                <Button  onClick={this.nextClick} name='employment' type="primary" htmlType="submit" className="login-form-button">
                                Next Employment
                                </Button>
                        </div>
                    }
               
                    { this.props.currentDot===3 &&
                        <div>
                                <EmploymentContainer></EmploymentContainer>
                                <Button  onClick={this.nextClick} name='personal' type="primary" htmlType="submit" className="login-form-button">
                                Next Personal
                                </Button>
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
    news: state.news,
    startAppState:state.startApp
})
const mapDispatchToProps = {
    setNextPage: setNextPage,
    startApp:startApp
};
HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default HomeContainer;
