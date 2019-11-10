import React from 'react';
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, Checkbox ,Row,Col} from 'antd';


import 'antd/dist/antd.css';
// import './index.css';
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  class Housing extends React.Component {
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
        <h3 className="h3">Housing </h3>
        <div>

        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Both borrowers live at the same address.</Checkbox>)}
          </Form.Item>


          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Monthly mortgage/Rent"
              />,
            )}
          </Form.Item>
          
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your address' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Address"
              />,
            )}
          </Form.Item>
          
          <label prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }} />}
          >Suffe/Appartment Number (optional)
          </label>
          <p>Have you lived here for 2 years or more?</p>
          <Form.Item >
    <Row gutter={8}>
      <Col span={12}>
          <Button>Yes</Button>
      </Col>
      <Col span={12}>
          <Button>No</Button>
      </Col>
    </Row>
  </Form.Item>
        </Form>
          </div>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Housing);
  
            
const mapStateToProps = (state) => ({
    news: state.news
})

Housing = connect(mapStateToProps, null)(WrappedNormalLoginForm);
export default Housing;
