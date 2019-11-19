import React from 'react';
import { connect } from 'react-redux'

import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';

import {setContactSection,setNextPage,saveHousingInfo} from '../actions';


import 'antd/dist/antd.css';
// import './index.css';

let id = 0;
const { Option } = Select;
  class Housing extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.saveHousingInfo({payload:values})
         this.props.setNextPage({payload:2})
        }
      });
    };
    remove = k => {
      const { form } = this.props;
      // can use data-binding to get
      const keys = form.getFieldValue('keys');
      // We need at least one appartment number
      if (keys.length === 1) {
        return;
      }
  
      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k),
      });
    };
  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };
    render() {
      const { getFieldDecorator ,getFieldValue} = this.props.form;
      getFieldDecorator('keys', { initialValue: [] });
      const keys = getFieldValue('keys');
      const formItems = keys.map((k, index) => (
        <Form.Item
          required={false}
          key={k}
        >
          {getFieldDecorator(`names[${k}]`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [
              {
                whitespace: true,
                message: "Please input appartment number or delete this field.",
              },
            ],
          })(<Input placeholder="Appartment  number" style={{ width: '60%', marginRight: 8 }} />)}
          {keys.length > 1 ? (
            <Icon
              className="dynamic-delete-button"
              type="minus-circle-o"
              onClick={() => this.remove(k)}
            />
          ) : null}
        </Form.Item>
      ));
      
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
                  {getFieldDecorator('own', {
                    rules: [{ required: true, message: 'Please input your !' }],
                  })(
                    <Select
                     placeholder="Do you Own or rent ?"
                     style={{ width: '100% '}} >
                      <Option value="Mortgage">Mortgage</Option>                      
                      <Option value="Rent">Rent</Option>
                      <Option value="Family">Family</Option>
                      <Option value="Other">Other</Option>
                      <Option value="OwnOutright">OwnOutright</Option>
                      <Option value="Military">Military</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('rent', {
                    rules: [{ required: true, message: 'Please input your rent!' }],
                  })(
                    <Input
                      placeholder="Monthly Mortgage/Rent"
                    />,
                  )}
                </Form.Item>
                
                <Form.Item>
                  {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your address' }],
                  })(
                    <Input
                      placeholder="Street Address"
                    />,
                  )}
                </Form.Item>
                <Form.Item >
                    <Row gutter={12}>
                      <Col span={8}>
                          {getFieldDecorator('city', {
                            rules: [{ required: true, message: 'Please input your city' }],
                            })(
                            <Input
                              placeholder="City"
                            />,
                           )}
                      </Col>
                      <Col span={8}>
                      {getFieldDecorator('state', {
                            rules: [{ required: true, message: 'Please input your state' }],
                            })(
                            <Input
                              placeholder="State"
                            />,
                           )}
                      </Col>
                      <Col span={8}>
                      {getFieldDecorator('zipcode', {
                            rules: [{ required: true, message: 'Please input your zipcode' }],
                            })(
                            <Input
                              placeholder="Zip Code"
                            />,
                           )}
                      </Col>
                    </Row>
                </Form.Item>
                {formItems}
              <Form.Item >
              {getFieldDecorator('suitNo', {
                    rules: [{ required: true, message: 'Please input your address' }],
                  })(
                    <Input
                      placeholder="Suite/Apt Number (optional)"
                    />,)}
              </Form.Item>
                <p>Have you lived here for 2 years or more?</p>
                <Form.Item >
                  <Row gutter={12}>
                        <Col span={12}>
                        <Button name="yes" size={this.props.size}>yes</Button>
                        </Col>
                        <Col span={12}>
                        <Button name="no"  size={this.props.size} >No</Button>      
                        </Col>
                  </Row>
               </Form.Item>
               { this.props.selectedSection==='Joint' && 
                   <div>
                     <h3>Co-Applicant Housing</h3>
                      <Form.Item>
                          {getFieldDecorator('ownJ', {
                            rules: [{ required: true, message: 'Please input your !' }],
                          })(
                            <Select
                     placeholder="Do you Own or rent ?"
                     style={{ width: '100% '}} >
                      <Option value="Mortgage">Mortgage</Option>                      
                      <Option value="Rent">Rent</Option>
                      <Option value="Family">Family</Option>
                      <Option value="Other">Other</Option>
                      <Option value="OwnOutright">OwnOutright</Option>
                      <Option value="Military">Military</Option>
                    </Select>,
                          )}
                        </Form.Item>
                      

                        <Form.Item>
                          {getFieldDecorator('rentJ', {
                            rules: [{ required: true, message: 'Please input your rent!' }],
                          })(
                            <Input
                              placeholder="Monthly Mortgage/Rent"
                            />,
                          )}
                        </Form.Item>
                        
                        <Form.Item>
                          {getFieldDecorator('addressJ', {
                            rules: [{ required: true, message: 'Please input your address' }],
                          })(
                            <Input
                              placeholder="Street Address"
                            />,
                          )}
                        </Form.Item>
                        <Form.Item >
                            <Row gutter={12}>
                              <Col span={8}>
                                  {getFieldDecorator('cityJ', {
                                    rules: [{ required: true, message: 'Please input your city' }],
                                    })(
                                    <Input
                                      placeholder="City"
                                    />,
                                  )}
                              </Col>
                              <Col span={8}>
                              {getFieldDecorator('stateJ', {
                                    rules: [{ required: true, message: 'Please input your state' }],
                                    })(
                                    <Input
                                      placeholder="State"
                                    />,
                                  )}
                              </Col>
                              <Col span={8}>
                              {getFieldDecorator('zipcodeJ', {
                                    rules: [{ required: true, message: 'Please input your zip code' }],
                                    })(
                                    <Input
                                      placeholder="Zip Code"
                                    />,
                                  )}
                              </Col>
                            </Row>
                        </Form.Item>
                      
                        <Form.Item >
              {getFieldDecorator('suitNoJ', {
                    rules: [{ required: true, message: 'Please input your address' }],
                  })(
                    <Input
                      placeholder="Suite/Apt Number (optional)"
                    />,)}
              </Form.Item>
                        <p>Have you lived here for 2 years or more?</p>
                        <Form.Item >
                          <Row gutter={12}>
                                <Col span={12}>
                                <Button name="yes" size={this.props.size}>yes</Button>
                                </Col>
                                <Col span={12}>
                                <Button name="no"  size={this.props.size} >No</Button>      
                                </Col>
                          </Row>
                      </Form.Item>
                  </div>
               }
                   <Divider/>
                    <Form.Item >
                    <Button  type="primary" htmlType="submit" className="login-form-button">
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
  setNextPage:setNextPage,
  saveHousingInfo:saveHousingInfo
};
Housing = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default Housing;
