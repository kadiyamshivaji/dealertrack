import React from 'react';
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';

import {setContactSection,setNextPage} from '../store/actions';


import 'antd/dist/antd.css';
// import './index.css';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
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
    nextClick = e => {
      e.preventDefault();
      this.props.setNextPage({payload:3})
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
          <h2 className="h3">Housing </h2>
          <div>
              <Form onSubmit={this.handleSubmit} className="login-form">
              { this.props.selectedSection==='Joint' && 
                  <Form.Item>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(<Checkbox>Both borrowers live at the same address.</Checkbox>)}
                    </Form.Item>
              }
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please !' }],
                  })(
                    <Select defaultValue="jack" style={{ width: '100% '}} onChange={handleChange}>
                      <Option value="jack">Do you Own or rent</Option>
                      <Option value="lucy">yes</Option>
                      
                      <Option value="Yiminghe">No</Option>
                    </Select>,
                  )}
                </Form.Item>
              

                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Monthly Mortgage/Rent"
                    />,
                  )}
                </Form.Item>
                
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your address' }],
                  })(
                    <Input
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      placeholder="Street Address"
                    />,
                  )}
                </Form.Item>
                <Form.Item >
                    <Row gutter={12}>
                      <Col span={8}>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your address' }],
                            })(
                            <Input
                              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              placeholder="City"
                            />,
                           )}
                      </Col>
                      <Col span={8}>
                      {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your address' }],
                            })(
                            <Input
                              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              placeholder="State"
                            />,
                           )}
                      </Col>
                      <Col span={8}>
                      {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your address' }],
                            })(
                            <Input
                              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              placeholder="Zip Code"
                            />,
                           )}
                      </Col>
                    </Row>
                </Form.Item>
                
                <label> <Icon type="plus-circle" />
                Suffe/Appartment Number (optional)
                </label><br/><br/>
                <p>Have you lived here for 2 years or more?</p>
                <Form.Item >
                  <Row gutter={12}>
                        <Col span={12}>
                        <Button name="Individual" size={this.props.size}>yes</Button>
                        </Col>
                        <Col span={12}>
                        <Button name="Joint"  size={this.props.size} >No</Button>      
                        </Col>
                  </Row>
               </Form.Item>
               { this.props.selectedSection==='Joint' && 
                   <div>
                     <h3>Co-Applicant Housing</h3>
                      <Form.Item>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please !' }],
                          })(
                            <Select defaultValue="jack" style={{ width: '100% '}} onChange={handleChange}>
                              <Option value="jack">Do you Own or rent</Option>
                              <Option value="lucy">yes</Option>
                              
                              <Option value="Yiminghe">No</Option>
                            </Select>,
                          )}
                        </Form.Item>
                      

                        <Form.Item>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                            <Input
                              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              placeholder="Monthly Mortgage/Rent"
                            />,
                          )}
                        </Form.Item>
                        
                        <Form.Item>
                          {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your address' }],
                          })(
                            <Input
                              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              placeholder="Street Address"
                            />,
                          )}
                        </Form.Item>
                        <Form.Item >
                            <Row gutter={12}>
                              <Col span={8}>
                                  {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your address' }],
                                    })(
                                    <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="City"
                                    />,
                                  )}
                              </Col>
                              <Col span={8}>
                              {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your address' }],
                                    })(
                                    <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="State"
                                    />,
                                  )}
                              </Col>
                              <Col span={8}>
                              {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your address' }],
                                    })(
                                    <Input
                                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                      placeholder="Zip Code"
                                    />,
                                  )}
                              </Col>
                            </Row>
                        </Form.Item>
                        
                        <label> <Icon type="plus-circle" />
                        Suffe/Appartment Number (optional)
                        </label><br/><br/>
                        <p>Have you lived here for 2 years or more?</p>
                        <Form.Item >
                          <Row gutter={12}>
                                <Col span={12}>
                                <Button name="Individual" size={this.props.size}>yes</Button>
                                </Col>
                                <Col span={12}>
                                <Button name="Joint"  size={this.props.size} >No</Button>      
                                </Col>
                          </Row>
                      </Form.Item>
                  </div>
               }
                   <Divider/>
                    <Form.Item >
                    <Button  onClick={this.nextClick}  type="primary" htmlType="submit" className="login-form-button">
                                Next Employment
                                </Button>
                </Form.Item>
              </Form>

        
           
          </div>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Housing);
  
            
const mapStateToProps = (state) => ({
    selectedSection:state.contactSection
   

})

const mapDispatchToProps = {
  setNextPage:setNextPage
};
Housing = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default Housing;
