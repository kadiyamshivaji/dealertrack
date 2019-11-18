// import React from 'react';
// import { connect } from 'react-redux';
// import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';
// import {setNextPage} from '../store/actions';
// import 'antd/dist/antd.css';

// const ButtonGroup = Button.Group;
// const { Option } = Select;
//   class PersonalContainer extends React.Component {

//     // handleSubmit = e => {
//     //   e.preventDefault();
//     //   this.props.form.validateFields((err, values) => {PersonalContainer
//     //     if (!err) {
//     //       console.log('Received values of form: ', values);
//     //     }
//     //   });
//     // };
  

//     nextClick = e => {
//       e.preventDefault();
//       this.props.setNextPage({payload:4})
//     };
//     render() {
//       const { getFieldDecorator } = this.props.form;
//       // const {firstname,lastname,phone,email,ssn,date,firstnameJ,lastnameJ,
//       //         phoneJ,ssnJ,dateJ} =this.props.contactInfo;
//         // const {own,ownJ,rent,rentJ,address,addressJ,
//         //         city,cityJ,state,stateJ,zipcode,zipcodeJ,}=this.props.housingInfo;
//         // const {employeed,employeedJ,employer,employerJ,money,moneyJ,paytype,paytypeJ}=this.props.employementInfo;
//       return (
//         <div>
//         <h2 className="h3">Review and Submit </h2>
//         <i>Please take one last chance to everything .Make changes if needed.</i>
//         <div>
//         <Form onSubmit={this.handleSubmit} className="login-form">
//                  <Row gutter={12}>
//                         <Col span={12}>
//                             <label>Primary Applicant
//                             <Icon type="edit" style={{ color: 'blue' }} />
//                             </label>    <br/><br/>
//                             <p>{(this.props.contactInfo||{}).firstname||{}} {(this.props.contactInfo||{}).lastname||{}}</p>
//                             <p>{(this.props.contactInfo||{}).phone||{}} </p>
//                             <p>{(this.props.contactInfo||{}).email||{}} </p>
//                             <p>{(this.props.contactInfo||{}).date||{}} </p>
//                             <p>{(this.props.contactInfo||{}).ssn||{}} </p>
//                         </Col>
//                         {this.props.selectedSection==='Joint' && 

//                             <Col span={12}>
//                             <label>Secondary Applicant
//                                 <Icon type="edit" style={{ color: 'blue' }} />
//                                 </label> <br/><br/>
//                                 <p>{(this.props.contactInfo||{}).firstnameJ||{}} {(this.props.contactInfo||{}).lastnameJ||{}}</p>
//                                 <p>{(this.props.contactInfo||{}).phoneJ||{}} </p>
//                             <p>{(this.props.contactInfo||{}).email||{}} </p>
//                             <p>{(this.props.contactInfo||{}).dateJ||{}} </p>
//                             <p>{(this.props.contactInfo||{}).ssnJ||{}} </p>
//                             </Col>  
//                         }
//                   </Row>
//                   <Row gutter={12}>
//                         <Col span={12}>
//                             <label>Housing
//                             <Icon type="edit" style={{ color: 'blue' }} />
//                             </label><br/><br/>
//                             <p>{(this.props.contactInfo||{}).own||{}} </p>
//                             <p>{(this.props.contactInfo||{}).rent||{}} </p>
//                             <p>{(this.props.contactInfo||{}).address||{}} </p>
//                             <p>{(this.props.contactInfo||{}).city||{}},{(this.props.contactInfo||{}).state||{}},{(this.props.contactInfo||{}).zipcode||{}} </p>
//                             <p>Over 2 years</p>
//                             <p>Spouse</p>
//                         </Col>
//                         {this.props.selectedSection==='Joint' &&                        
            
//                             <Col span={12}>
//                             <label>Housing
//                                 <Icon type="edit" style={{ color: 'blue' }} />
//                                 </label> 
//                                 <br/><br/>
//                                 <p>{(this.props.contactInfo||{}).ownJ||{}} </p>
//                                 <p>{(this.props.contactInfo||{}).rentJ||{}} </p>
//                                 <p>{(this.props.contactInfo||{}).addressJ||{}} </p>
//                                 <p>{(this.props.contactInfo||{}).cityJ||{}},{(this.props.contactInfo||{}).stateJ||{}},{(this.props.contactInfo||{}).zipcodeJ||{}} </p>
//                                 <p>Over 2 years</p>
//                                 <p>Spouse</p>
//                             </Col>
//                      }
//                   </Row>
//                   <Row gutter={12}>
//                         <Col span={12}>
//                             <label>Employment
//                             <Icon type="edit" style={{ color: 'blue' }} />
//                             </label><br/><br/>employer
//                                <p>{(this.props.contactInfo||{}).employeed||{}} </p>
//                                <p>{(this.props.contactInfo||{}).employer||{}} </p>
//                                <p>{(this.props.contactInfo||{}).money||{}}/{(this.props.contactInfo||{}).paytype||{}} </p>
//                         </Col>
//                         {this.props.selectedSection==='Joint' && 
//                         <Col span={12}>
//                             <label>Employment
//                             <Icon type="edit" style={{ color: 'blue' }} />
//                             </label> <br/><br/>
//                             <p>{(this.props.contactInfo||{}).employeedJ||{}} </p>
//                                <p>{(this.props.contactInfo||{}).employerJ||{}} </p>
//                                <p>{(this.props.contactInfo||{}).moneyJ||{}}/{(this.props.contactInfo||{}).paytypeJ||{}} </p>
                     
//                         </Col>
//                         }
//                   </Row> */}
//                   <Form.Item>
//                       {getFieldDecorator('remember', {
//                         valuePropName: 'checked',
//                         initialValue: true,
//                       })(<Checkbox>I have reviewed and agree to the <a>Terms & Conditions</a> and <a>Privacy Policy</a>.
//                       I understand  this dealer will check my credit and share the ressults with their lender</Checkbox>)}
//                     </Form.Item>
//                   { this.props.selectedSection==='Joint' && 
//                   <Form.Item>
//                       {getFieldDecorator('remember', {
//                         valuePropName: 'checked',
//                         initialValue: true,
//                       })(<Checkbox>Both borrowers inttend to apply for joint credit.</Checkbox>)}
//                     </Form.Item>
//               }
//             <Divider/>
//                   <Form.Item >
//                     <Button  onClick={this.nextClick}  type="primary" htmlType="submit" className="login-form-button">
//                          Submit Application
//                     </Button>
//                  </Form.Item>   
//         </Form>
//           </div>
//         </div>
//       );
//     }
//   }
// const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(PersonalContainer);
// const mapStateToProps = (state) => ({
//   selectedSection:state.contactSection,
//   contactInfo:state.contactInfo,
//   housingInfo:state.housingInfo,
//   employementInfo:state.employementInfo
// })
// const mapDispatchToProps = {
//   setNextPage:setNextPage
// };
// PersonalContainer = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
// export default PersonalContainer;


import React from 'react';
import { connect } from 'react-redux'


import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';


import {setContactSection,setNextPage} from '../store/actions';

import 'antd/dist/antd.css';
// import './index.css';
const ButtonGroup = Button.Group;

const { Option } = Select;
  class PersonalContainer extends React.Component {

    // handleSubmit = e => {
    //   e.preventDefault();
    //   this.props.form.validateFields((err, values) => {PersonalContainer
    //     if (!err) {
    //       console.log('Received values of form: ', values);
    //     }
    //   });
    // };


    nextClick = e => {
      e.preventDefault();
      this.props.setNextPage({payload:4})
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
        <h2 className="h3">Review and Submit </h2>
        <i>Please take one last chance to everything .Make changes if needed.</i>
        <div>

        <Form onSubmit={this.handleSubmit} className="login-form">
                 <Row gutter={12}>
                        <Col span={12}>
                            <label>Primary Applicant
                            <Icon type="edit" style={{ color: 'blue' }} />
                            </label>    <br/><br/>
                            <p>Jonna smith</p>
                            <p>(555)-555-5555</p>
                            <p>example@gmail.com</p>
                             <p>10/31/2019</p>
                            <p>xxx-xx-1234</p>
                        </Col>
                        {this.props.selectedSection==='Joint' && 

                            <Col span={12}>
                            <label>Secondary Applicant
                                <Icon type="edit" style={{ color: 'blue' }} />
                                </label> <br/><br/>
                                <p>Jonna smith</p>
                                <p>(555)-555-5555</p>
                                <p>example@gmail.com</p>
                                <p>10/31/2019</p>
                                <p>xxx-xx-1234</p>
                                <p>Spouse</p>
                            </Col>  
                        }
                  </Row>
                  <Row gutter={12}>
                        <Col span={12}>
                            <label>Housing
                            <Icon type="edit" style={{ color: 'blue' }} />
                            </label><br/><br/>
                            <p>Rent</p>
                            <p>$5555/month</p>
                            <p>123 Washington lane</p>
                             <p>Atlanta,GA,30309</p>
                            <p>Over 2 years</p>
                            <p>Spouse</p>
                        </Col>
                        {this.props.selectedSection==='Joint' &&                        

                            <Col span={12}>
                            <label>Housing
                                <Icon type="edit" style={{ color: 'blue' }} />
                                </label> 
                                <br/><br/>
                                <p>Rent</p>
                                <p>$5555/month</p>
                                <p>123 Washington lane</p>
                                <p>Atlanta,GA,30309</p>
                                <p>Over 2 years</p>
                                <p>Spouse</p>
                            </Col>
                     }
                  </Row>
                  <Row gutter={12}>
                        <Col span={12}>
                            <label>Employment
                            <Icon type="edit" style={{ color: 'blue' }} />
                            </label><br/><br/>
                            <p>Employed</p>
                            <p>Company Inc.</p>
                            <p>$3,000/month</p>
                        </Col>
                        {this.props.selectedSection==='Joint' && 

                                <Col span={12}>
                                <label>Employment
                                    <Icon type="edit" style={{ color: 'blue' }} />
                                    </label> <br/><br/>
                                    <p>Employed</p>
                                    <p>Company Inc.</p>
                                    <p>$3,000/month</p>
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


        </Form>

         <Divider/>
                    <Form.Item >
                    <Button  onClick={this.nextClick}  type="primary" htmlType="submit" className="login-form-button">
                                 Submit Application
                                </Button>
                </Form.Item>

          </div>
        </div>
      );
    }
  }

  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(PersonalContainer);


const mapStateToProps = (state) => ({
  selectedSection:state.contactSection
})

const mapDispatchToProps = {
  setNextPage:setNextPage
};
PersonalContainer = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default PersonalContainer;