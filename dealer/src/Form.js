import React from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';
import {setNextPage} from '../actions';
import 'antd/dist/antd.css';

const ButtonGroup = Button.Group;
const { Option } = Select;
  class PersonalContainer extends React.Component {


    currentPage(e){
      this.props.setNextPage({payload:e})
    }

    nextClick = e => {
      e.preventDefault();
      this.props.setNextPage({payload:4})
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      // const {firstname,lastname,phone,email,ssn,date,firstnameJ,lastnameJ,
      //         phoneJ,ssnJ,dateJ} =this.props.contactInfo;
        // const {own,ownJ,rent,rentJ,address,addressJ,
        //         city,cityJ,state,stateJ,zipcode,zipcodeJ,}=this.props.housingInfo;
        // const {employeed,employeedJ,employer,employerJ,money,moneyJ,paytype,paytypeJ}=this.props.employementInfo;
      return (
        <div>
        <h2 className="h3">Review and Submit </h2>
        <i>Please take one last chance to everything .Make changes if needed.</i>
        <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
                 <Row gutter={12}>
                        <Col span={12}>
                            <label>Primary Applicant
                            <Icon type="edit" style={{ color: 'blue' }} onClick={(e) => this.currentPage(0)}  />
                            </label>    <br/><br/>
                            <p>{(this.props.contactInfo||{}).firstname||{}} {(this.props.contactInfo||{}).lastname||{}}</p>
                            <p>{(this.props.contactInfo||{}).phone||{}} </p>
                            <p>{(this.props.contactInfo||{}).email||{}} </p>
                            {/* <p>{(this.props.contactInfo||{}).date||{}} </p> */}
                            <p>{(this.props.contactInfo||{}).ssn||{}} </p>
                        </Col>
                        {this.props.selectedSection==='Joint' && 

                            <Col span={12}>
                            <label>Secondary Applicant
                                <Icon type="edit" style={{ color: 'blue' }} onClick={(e) => this.currentPage(0)} />
                                </label> <br/><br/>
                                <p>{(this.props.contactInfo||{}).firstnameJ||{}} {(this.props.contactInfo||{}).lastnameJ||{}}</p>
                                <p>{(this.props.contactInfo||{}).phoneJ||{}} </p>
                            <p>{(this.props.contactInfo||{}).email||{}} </p>
                            {/* <p>{(this.props.contactInfo||{}).dateJ||{}} </p> */}
                            <p>{(this.props.contactInfo||{}).ssnJ||{}} </p>
                            </Col>  
                        }
                  </Row>
                 <Row gutter={12}>
                        <Col span={12}>
                            <label>Housing
                            <Icon type="edit" style={{ color: 'blue' }} onClick={(e) => this.currentPage(1)} />
                            </label><br/><br/>
                            <p>{(this.props.housingInfo||{}).own||{}} </p>
                            <p>{(this.props.housingInfo||{}).rent||{}} </p>
                            <p>{(this.props.housingInfo||{}).address||{}} </p>
                            <p>{(this.props.housingInfo||{}).city||{}},{(this.props.housingInfo||{}).state||{}},{(this.props.housingInfo||{}).zipcode||{}} </p>
                            <p>{(this.props.housingInfo||{}).suitNo||{}} </p>
                            <p>Over 2 years</p>
                            <p>Spouse</p>
                        </Col>
                        {this.props.selectedSection==='Joint' &&                        
            
                            <Col span={12}>
                            <label>Housing
                                <Icon type="edit" style={{ color: 'blue' }} onClick={(e) => this.currentPage(1)} />
                                </label> 
                                <br/><br/>
                                <p>{(this.props.housingInfo||{}).ownJ||{}} </p>
                                <p>{(this.props.housingInfo||{}).rentJ||{}} </p>
                                <p>{(this.props.housingInfo||{}).addressJ||{}} </p>
                                <p>{(this.props.housingInfo||{}).cityJ||{}},{(this.props.housingInfo||{}).stateJ||{}},{(this.props.housingInfo||{}).zipcodeJ||{}} </p>
                                <p>{(this.props.housingInfo||{}).suitNoJ||{}} </p>
                                <p>Over 2 years</p>
                                <p>Spouse</p>
                            </Col>
                     }
                  </Row>
                   <Row gutter={12}>
                        <Col span={12}>
                            <label>Employment
                            <Icon type="edit" style={{ color: 'blue' }} onClick={(e) => this.currentPage(2)} />
                            </label><br/><br/>
                               <p>{(this.props.employementInfo||{}).employeed||{}} </p>
                               <p>{(this.props.employementInfo||{}).employer||{}} </p>
                               <p>{(this.props.employementInfo||{}).money||{}}/{(this.props.employementInfo||{}).paytype||{}} </p>
                        </Col>
                        {this.props.selectedSection==='Joint' && 
                        <Col span={12}>
                            <label>Employment
                            <Icon type="edit" style={{ color: 'blue' }} onClick={(e) => this.currentPage(2)} />
                            </label> <br/><br/>
                            <p>{(this.props.employementInfo||{}).employeedJ||{}} </p>
                               <p>{(this.props.employementInfo||{}).employerJ||{}} </p>
                               <p>{(this.props.employementInfo||{}).moneyJ||{}}/{(this.props.employementInfo||{}).paytypeJ||{}} </p>
                     
                        </Col>
                        }
                  </Row>  
                  <Form.Item>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>I have reviewed and agree to the <a>Terms & Conditions</a> and <a>Privacy Policy</a>.
                      I understand  this dealer will check my credit and share the ressults with their lender</Checkbox>)}
                    </Form.Item>
                  { this.props.selectedSection==='Joint' && 
                  <Form.Item>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>Both borrowers inttend to apply for joint credit.</Checkbox>)}
                    </Form.Item>
              }
            <Divider/>
                  <Form.Item >
                    <Button   type="primary" htmlType="submit" className="login-form-button">
                         Submit Application
                    </Button>
                 </Form.Item>   
        </Form>
          </div>
        </div>
      );
    }
  }
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(PersonalContainer);
const mapStateToProps = (state) => ({
  selectedSection:state.contactSection,
  contactInfo:state.contactInfo,
  housingInfo:state.housingInfo,
  employementInfo:state.employmentInfo
})
const mapDispatchToProps = {
  setNextPage:setNextPage
};
PersonalContainer = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default PersonalContainer;
