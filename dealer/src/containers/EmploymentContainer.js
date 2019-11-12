import React from 'react';
import { connect } from 'react-redux'


import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';


import {setContactSection,setNextPage} from '../store/actions';

import 'antd/dist/antd.css';
// import './index.css';
const ButtonGroup = Button.Group;

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
        }
      });
    };
  

    nextClick = e => {
      e.preventDefault();
      this.props.setNextPage({payload:4})
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
        <h2 className="h3">Employment </h2>
        <div>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <h3>Thanks You're almost done!</h3>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select defaultValue="jack" style={{ width: '100% '}} onChange={handleChange}>
              <Option value="jack">Are you currently employed?</Option>
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
                placeholder="Employer"
              />,
            )}
          </Form.Item>
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
          <h3>How much do you make?</h3>
          <p>Please include salary wages and bonuses but not other sources like child support or housing allowance</p>
          <Form.Item >
                  <Row gutter={12}>
                        <Col span={12}>
                        {getFieldDecorator('username', {
                         rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder=""
                          />,
                        )}
                                    </Col>
                        <Col span={12}>
                        {getFieldDecorator('username', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Select defaultValue="jack" style={{ width: '100% '}} onChange={handleChange}>
                          <Option value="jack">Monthly</Option>
                          <Option value="lucy">Quarterly</Option>
                          
                          <Option value="Yiminghe">Annualy</Option>
                        </Select>,
                        )}
                        </Col>
                  </Row>
               </Form.Item>
           <h3>Additional Income (optional)</h3>
           <p>Allmany child support, or separete maintenance income need not be discolsed unless  relied upon credit</p>
           <label> <Icon type="plus-circle" />
               Add Additional Income (optional)
                </label><br/><br/>  

            {this.props.selectedSection==='Joint' && 
                        <div>
                            <Divider/>
                            <h3 className="h6">Co-Application Employment </h3>
                            <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select defaultValue="jack" style={{ width: '100% '}} onChange={handleChange}>
              <Option value="jack">Are you currently employed?</Option>
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
                placeholder="Employer"
              />,
            )}
          </Form.Item>
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
          <h3>How much do you make?</h3>
          <p>Please include salary wages and bonuses but not other sources like child support or housing allowance</p>
          <Form.Item >
                  <Row gutter={12}>
                        <Col span={12}>
                        {getFieldDecorator('username', {
                         rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder=""
                          />,
                        )}
                                    </Col>
                        <Col span={12}>
                        {getFieldDecorator('username', {
                          rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                          <Select defaultValue="jack" style={{ width: '100% '}} onChange={handleChange}>
                          <Option value="jack">Monthly</Option>
                          <Option value="lucy">Quarterly</Option>
                          
                          <Option value="Yiminghe">Annualy</Option>
                        </Select>,
                        )}
                        </Col>
                  </Row>
               </Form.Item>
           <h3>Additional Income (optional)</h3>
           <p>Allmany child support, or separete maintenance income need not be discolsed unless  relied upon credit</p>
           <label> <Icon type="plus-circle" />
               Add Additional Income (optional)
                </label>
                        </div>
            }

        </Form>

         <Divider/>
                    <Form.Item >
                    <Button  onClick={this.nextClick}  type="primary" htmlType="submit" className="login-form-button">
                                 Next Personal
                                </Button>
                </Form.Item>
           
          </div>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Employment);
  
            
const mapStateToProps = (state) => ({
  selectedSection:state.contactSection
})

const mapDispatchToProps = {
  setNextPage:setNextPage
};
Employment = connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);
export default Employment;
