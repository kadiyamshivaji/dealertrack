import React from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox,Tabs,Select,Row,Col,Divider,DatePicker,InputNumber } from 'antd';
import 'antd/dist/antd.css';
import {setContactSection,setNextPage,saveContactInfo} from '../store/actions';
const formatters = {
  'phone'      : [/^\(?\s?(\d{3})\s?\)?\s?\-?\s?(\d{3})\s?\-?\s?(\d{4})$/,     '($1) $2-$3' ],
  'ssn'        : [/^(\d{3})\s?\-?\s?(\d{2})\s?\-?\s?(\d{3})$/,                 '$1-$2-$3'   ],
  'creditcard' : [/^(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{4})\s?\-?\s?(\d{4})$/, '$1-$2-$3-$4']
};

  class ContactInfo extends React.Component {
    formate(){

    }  
    setSection = e => {
      e.preventDefault();
     this.props.setContactSection({payload:e.target.name})
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.saveContactInfo({payload:values})
          this.props.setNextPage({payload:1})

        }
      });
    };
    compareToFirstEmail = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('email')) {
        callback('Two emails that you enter is inconsistent!');
      } else {
        callback();
      }
    };
    compareToFirstJointEmail = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('email')) {
        callback('Two emails that you enter is inconsistent!');
      } else {
        callback();
      }
    };
     formatPhoneNumber(phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        var intlCode = (match[1] ? '+1 ' : '')
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
      }
      return null
    }
    
    render() {    
      const { getFieldDecorator } = this.props.form;
      return (
        
      <div>
        <h2 className="h3">Contact Info</h2>
        <h3 className="h6">Application Type</h3>
            <Form onSubmit={this.handleSubmit} className="login-form">            
                <Form.Item >
                    <Row gutter={12}>
                      <Col span={12}>
                      <Button name="Individual" className={this.props.selectedSection==='Joint'?'':'active'}
                       onClick={this.setSection} size={this.props.size}>Individual</Button>
                      </Col>
                      <Col span={12}>
                      <Button name="Joint"  className={this.props.selectedSection==='Joint'?'active':''} onClick={this.setSection}  size={this.props.size} >Joint</Button>      
                      </Col>
                    </Row>
                </Form.Item>
                <h3>Your Name</h3>
                <Form.Item>
                  {getFieldDecorator('firstname', {
                    rules: [{ required: true, message: 'Please input your First Name!' }],
                  })(
                    <Input
                      placeholder="first name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your Last Name!' }],
                  })(
                    <Input
                      placeholder="last name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your Phone!'}],
                  })(
                    <InputNumber
                        style={{ width: '100%', marginRight: 8 }} 
                        formatter={value =>this.formatPhoneNumber(value)}
                        placeholder='phone'
                        maxLength={10}
                          size='large'
                        />,
                  )}
                </Form.Item>
               
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [ {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                      { required: true, message: 'Please input your Email!' }],
                  })(
                    <Input
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="email"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('mail', {
                  rules: [{ required: true, message: 'Please Verify Email!' },
                  {
                    validator: this.compareToFirstEmail,
                  }],
                })(
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type='email'
                    placeholder="verify email"
                  />,
                )}
              </Form.Item>
            <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
           <h3>Requireed for Identity Verification</h3>
           <p>if you are not ready to apply for credit and justwant to know your rates <a>check them here</a></p>
            <Form.Item>
             <Row gutter={8}>
                  <Col span={12}>
                     {getFieldDecorator('date', {
                        rules: [{ type: 'object', required: true, message: 'Please select time!' }]
                     }
                     )(<DatePicker />)}
                  </Col>
              </Row>              
            </Form.Item>            
            <Form.Item >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('ssn', {
                    rules: [{ required: true, message: 'Please input your social security number' }],
                  })(  <InputNumber
                    style={{ width: '100%', marginRight: 8 }}
                    placeholder="social security"
                    maxlength={11}
                    formatter={value => `${value}`.replace(/^(\d{3})\s?\-?\s?(\d{2})\s?\-?\s?(\d{3})$/,'$1-$2-$3')}
                  />,)}
                </Col>
                <Col span={12}>                  
                  <label>
                  <Icon type="lock"style={{ color: 'blue' }} />
                    SSL Secure Connection</label>
                </Col>
              </Row>
            </Form.Item>
            <p>Your Social Security Number is required to ensure we're reviewing the correct credit report while we consider your application </p>
          {this.props.selectedSection==='Joint' && 
              <div>
                  <Divider/>
                  <h3 className="h6">Co-Application Name</h3>
                  <Form.Item>
                  {getFieldDecorator('firstnameJ', {
                    rules: [{ required: true, message: 'Please input your First Name!' }],
                  })(
                    <Input
                      placeholder="first name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('lastnameJ', {
                    rules: [{ required: true, message: 'Please input your Last Name!' }],
                  })(
                    <Input
                      placeholder="last name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('phoneJ', {
                    rules: [{ required: true, message: 'Please input your Phone!' }],
                  })(
                    <InputNumber
                        style={{ width: '100%', marginRight: 8 }} 
                        formatter={value =>this.formatPhoneNumber(value)}
                        placeholder='phone'
                        maxLength={10}
                          size='large'
                        />,
                  )}
                </Form.Item>
                
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [ {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                      { required: true, message: 'Please input your Email!' }],
                  })(
                    <Input
                      placeholder="email"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('confirmJ', {
                  rules: [{ required: true, message: 'Please Verify Email!' },
                  {
                    validator: this.compareToFirstJointEmail,
                  }],
                })(
                  <Input
                    type='email'
                    placeholder="verify email"
                  />,
                )}
              </Form.Item>
            <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
           <h3>Requireed for Identity Verification</h3>
           <p>if you are not ready to apply for credit and justwant to know your rates <a>check them here</a></p>
            <Form.Item>
              <Row gutter={8}>
              <Col span={12}>
                     {getFieldDecorator('dateJ', {
                        rules: [{ type: 'object', required: true, message: 'Please select time!' }]
                     }
                     )(<DatePicker />)}
                  </Col>
                      
              </Row>              
            </Form.Item>            
            <Form.Item >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('ssnJ', {
                    rules: [{ required: true, message: 'Please input the social security number' }],
                  })(  <InputNumber
                    style={{ width: '100%', marginRight: 8 }}
                    placeholder="social security"
                    maxlength={11}
                    formatter={value => `${value}`.replace(/^(\d{3})\s?\-?\s?(\d{2})\s?\-?\s?(\d{3})$/,'$1-$2-$3')}
                  />,)}
                </Col>
                <Col span={12}>                  
                  <label>
                  <Icon type="lock"style={{ color: 'blue' }} />
                    SSL Secure Connection</label>
                </Col>
              </Row>
            </Form.Item>
            <p>Your Social Security Number is required to ensure we're reviewing the correct credit report while we consider your application </p>
         
              </div>
            }
             <Divider></Divider>
            <Form.Item>
                <Button name='housing' type="primary" htmlType="submit" 
                  className="login-form-button">
                  Next Housing
                </Button>
            </Form.Item>
        </Form>
      </div>
     
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(ContactInfo);
  
            
const mapStateToProps = (state) => ({
    size: state.size,
    selectedSection:state.contactSection
})
const mapDispatchToProps = {
  setContactSection: setContactSection,
  setNextPage:setNextPage,
  saveContactInfo:saveContactInfo
};
ContactInfo = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default ContactInfo;
