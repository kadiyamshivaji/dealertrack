import React from 'react';
import { connect } from 'react-redux'


import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';


import {setContactSection,setNextPage,saveEmploymentInfo} from '../store/actions';

import 'antd/dist/antd.css';
// import './index.css';
const ButtonGroup = Button.Group;
let id = 0;

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
  class Employment extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          this.props.saveEmploymentInfo({payload:values})
          this.props.setNextPage({payload:3})
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

    nextClick = e => {
      e.preventDefault();
     
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
        <h2 className="h3">Employment </h2>
        <div>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3>Thanks You're almost done!</h3>
          <Form.Item>
            {getFieldDecorator('employeed', {
              rules: [{ required: true, message: 'Please input your !' }],
            })(
              <Select 
               placeholder="Are you currently employed ?"
               style={{ width: '100% '}}>
              <Option value="0">yes</Option>
              <Option value="1">no</Option>
            </Select>,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('employer', {
              rules: [{ required: true, message: 'Please input your employer!' }],
            })(
              <Input
                placeholder="Employer"
              />,
            )}
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
          <h3>How much do you make?</h3>
          <p>Please include salary wages and bonuses but not other sources like child support or housing allowance</p>
          <Form.Item >
                  <Row gutter={12}>
                        <Col span={12}>
                          {getFieldDecorator('money', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                          })(
                            <Input
                              placeholder=""
                            />,
                          )}
                        </Col>
                        <Col span={12}>
                        {getFieldDecorator('paytype', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Select 
                          placeholder="select your pay"
                           style={{ width: '100% '}} onChange={handleChange}>
                          <Option value="m">Monthly</Option>
                          <Option value="q">Quarterly</Option>                          
                          <Option value="a">Annualy</Option>
                        </Select>,
                        )}
                        </Col>
                  </Row>
               </Form.Item>
           <h3>Additional Income (optional)</h3>
           <p>Allmany child support, or separete maintenance income need not be discolsed unless  relied upon credit</p>
           {formItems}
              <Form.Item >
                <Button  onClick={this.add} style={{ width: '100%' }}>
                  <Icon type="plus" /> Suffe/Appartment Number (optional)
                </Button>
              </Form.Item>
            {this.props.selectedSection==='Joint' && 
                        <div>
                            <Divider/>
                            <h3 className="h6">Co-Application Employment </h3>
                            <Form.Item>
            {getFieldDecorator('employedJ', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select 
              placeholder="Are you currently employed ?"
              style={{ width: '100% '}}>
             <Option value="0">yes</Option>
             <Option value="1">no</Option>
            </Select>,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('employerJ', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Employer"
              />,
            )}
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
          <h3>How much do you make?</h3>
          <p>Please include salary wages and bonuses but not other sources like child support or housing allowance</p>
          <Form.Item >
                  <Row gutter={12}>
                        <Col span={12}>
                        {getFieldDecorator('moneyJ', {
                         rules: [{ required: true, message: 'Please input your money!' }],
                        })(
                          <Input
                            placeholder=""
                          />,
                        )}
                        </Col>
                        <Col span={12}>
                        {getFieldDecorator('paytypeJ', {
                          rules: [{ required: true, message: 'Please input your paytype!' }],
                        })(
                          <Select 
                          placeholder="select your pay"
                           style={{ width: '100% '}} onChange={handleChange}>
                          <Option value="m">Monthly</Option>
                          <Option value="q">Quarterly</Option>                          
                          <Option value="a">Annualy</Option>
                        </Select>,
                        )}
                        </Col>
                  </Row>
               </Form.Item>
           <h3>Additional Income (optional)</h3>
           <p>Allmany child support, or separete maintenance income need not be discolsed unless  relied upon credit</p>
           {formItems}
              <Form.Item >
                <Button  onClick={this.add} style={{ width: '100%' }}>
                  <Icon type="plus" /> Suffe/Appartment Number (optional)
                </Button>
              </Form.Item>
                        </div>
            }
             <Divider/>
            <Form.Item >
              <Button type="primary" htmlType="submit" className="login-form-button">
                  Next Personal
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Employment);
  
            
const mapStateToProps = (state) => ({
  selectedSection:state.contactSection
}); 
const mapDispatchToProps = {
  setNextPage:setNextPage,
  saveEmploymentInfo:saveEmploymentInfo
};
Employment = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default Employment;
