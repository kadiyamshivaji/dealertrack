import React from 'react';
import { connect } from 'react-redux'
import ContactInfo from "./ContactInfoContainer";
import EmploymentContainer from "./EmploymentContainer";
import Housing from "./HousingContainer";
import {setNextPage} from '../store/actions';
import { Form, Icon, Input, Button, Checkbox,Steps, Divider } from 'antd';
const { Step } = Steps;

class HomeContainer extends React.Component {
    nextClick = e => {
        e.preventDefault();
        this.props.setNextPage({payload:this.pageValues(e.target.name)})
      };
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
        );
     }
}

const mapStateToProps = (state) => ({
    currentDot:state.currentDot,
    news: state.news
})
const mapDispatchToProps = {
    setNextPage: setNextPage,
};
HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default HomeContainer;
