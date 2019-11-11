import React from 'react';
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox,Tabs,Select,Row,Col,Divider,DatePicker } from 'antd';
import 'antd/dist/antd.css';
import {setContactSection} from '../store/actions';

function onChange(date, dateString) {
  console.log(date, dateString);
} 


  class ContactInfo extends React.Component {  

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

    IndividualForm(){
        const { getFieldDecorator } = this.props.form;
      return(
        <Form onSubmit={this.handleSubmit} className="login-form">
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
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please Verify Email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Verify Email"
            />,
          )}
        </Form.Item>
      <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
      <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please Verify Email!' }],
          })(
            <DatePicker onChange={onChange} />
          )}
        </Form.Item>
      
        <Form.Item  extra="We must make sure that your are a human.">
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
            <Icon type="lock"style={{ color: 'rgba(0,0,0,.25)' }} />
            <label>Socail Security</label>
          </Col>
        </Row>
      </Form.Item>
      <p>Your Social Security ***********************************************</p>
      </Form>
    )
  }
  JointForm(){
    const { getFieldDecorator } = this.props.form;
  return(
    <Form onSubmit={this.handleSubmit} className="login-form">
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
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Phone"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('email', {
        rules: [{ required: true, message: 'Please input your Email!' }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Email"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('email', {
        rules: [{ required: true, message: 'Please Verify Email!' }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Verify Email"
        />,
      )}
    </Form.Item>
  <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
  <Form.Item>
      {getFieldDecorator('email', {
        rules: [{ required: true, message: 'Please Verify Email!' }],
      })(
        <DatePicker onChange={onChange} />
      )}
    </Form.Item>
  
    <Form.Item  extra="We must make sure that your are a human.">
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
        <Icon type="lock"style={{ color: 'rgba(0,0,0,.25)' }} />
        <label>Socail Security</label>
      </Col>
    </Row>
  </Form.Item>
  <p>Your Social Security ***********************************************</p>
  </Form>
)
}

    render() {    
      return (
      <div>
        <h3 className="h3">Contact Info</h3>
        <h6 className="h6">Application Type</h6>
        <div>
          <div className='tabs'>
          <Button name="Individual" onClick={this.setSection} size={this.props.size}>Individual</Button>
        <Button name="Joint" onClick={this.setSection}  size={this.props.size} >Joint</Button>      
        
          </div>
        
          {this.IndividualForm()}
          {this.props.selectedSection==='Joint' && 
              <div>
                  <Divider/>
                  <h6 className="h6">Co-Application Name</h6>
                  {this.JointForm()}
              </div>
            }
           
      </div>
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
};
ContactInfo = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default ContactInfo;
