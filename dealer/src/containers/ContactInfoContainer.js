import React from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox,Tabs,Select,Row,Col,Divider,DatePicker } from 'antd';
import 'antd/dist/antd.css';
import {setContactSection,setNextPage} from '../store/actions';

function onChange(date, dateString) {
  console.log(date, dateString);
} 

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
  class ContactInfo extends React.Component {  
    nextClick = e => {
      e.preventDefault();
      this.props.setNextPage({payload:2})
    };
    setSection=e=>{
      e.preventDefault();
     this.props.setContactSection({payload:e.target.name})
    }

    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };

  
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
                      <Button name="Individual" onClick={this.setSection} size={this.props.size}>Individual</Button>
                      </Col>
                      <Col span={12}>
                      <Button name="Joint" onClick={this.setSection}  size={this.props.size} >Joint</Button>      
                      </Col>
                    </Row>
                </Form.Item>
                <h3>Your Name</h3>
                <Form.Item>
                  {getFieldDecorator('firstName', {
                    rules: [{ required: true, message: 'Please input your First Name!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="First Name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your Last Name!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Last Name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your Phone!' }],
                  })(
                    <Input
                      prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Phone"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Email"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please Verify Email!' }],
                })(
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Verify Email"
                  />,
                )}
              </Form.Item>
            <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
           <h3>Requireed for Identity Verification</h3>
           <p>if you are not ready to apply for credit and justwant to know your rates <a>check them here</a></p>
            <Form.Item>
              <Row gutter={8}>
                  <Col span={12}>
                      {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please select date' }],
                      })(
                        <DatePicker onChange={onChange} />
                      )}
                  </Col>
                      
              </Row>              
            </Form.Item>            
            <Form.Item >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })(  <Input
                    suffix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Social Security"
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
                  {/* {this.JointForm()} */}       <Form.Item>
                  {getFieldDecorator('firstName', {
                    rules: [{ required: true, message: 'Please input your First Name!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="First Name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your Last Name!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Last Name"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your Phone!' }],
                  })(
                    <Input
                      prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Phone"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your Email!' }],
                  })(
                    <Input
                      prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Email"
                    />,
                  )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please Verify Email!' }],
                })(
                  <Input
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Verify Email"
                  />,
                )}
              </Form.Item>
            <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
           <h3>Requireed for Identity Verification</h3>
           <p>if you are not ready to apply for credit and justwant to know your rates <a>check them here</a></p>
            <Form.Item>
              <Row gutter={8}>
                  <Col span={12}>
                      {getFieldDecorator('email', {
                        rules: [{ required: true, message: 'Please select date' }],
                      })(
                        <DatePicker onChange={onChange} />
                      )}
                  </Col>
                      
              </Row>              
            </Form.Item>            
            <Form.Item >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })(  <Input
                    suffix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Social Security"
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
                <Button onClick={this.nextClick} name='housing' type="primary" htmlType="submit" 
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
  setNextPage:setNextPage
};
ContactInfo = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default ContactInfo;
