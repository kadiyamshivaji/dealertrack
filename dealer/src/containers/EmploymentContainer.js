import React from 'react';
import { connect } from 'react-redux'


import { Form, Icon, Input, Button, Checkbox ,Row,Col,Select,Divider} from 'antd';


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
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
        <h3 className="h3">Employment </h3>
        <div>

        <Form onSubmit={this.handleSubmit} className="login-form">
          <label>Thanks You're almost done!</label>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select
              showSearch
        style={{ width: 200 }}
        placeholder="Are you currently employed?"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Are you currently employed?</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>,
            )}
          </Form.Item>
         
<label>How much do you make?</label>
<p>Please include salary wages and bonuses but not other sources like child support or housing allowance</p>
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
          <ButtonGroup>
      <Button>     </Button>
      <Button>Monthly</Button>
    </ButtonGroup>
         
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
  <label>Additional Income (optional)</label>
  <p>Allmany child support**********************************</p>

  {this.props.selectedSection==='Joint' && 
              <div>
                  <Divider/>
                  <h6 className="h6">Co-Application Employment </h6>
                  <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Select
              showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Do you own or Rent</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>,
            )}
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
              </div>
            }
        </Form>

        
           
          </div>
        </div>
      );
    }
  }
  
  const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Employment);
  
            
const mapStateToProps = (state) => ({
  selectedSection:state.contactSection
})

Employment = connect(mapStateToProps, null)(WrappedNormalLoginForm);
export default Employment;
