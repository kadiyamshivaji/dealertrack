import "./helper.css";
import React from "react";
import { Formik } from "formik";
import { Input,Form, Icon,  Button, Checkbox,Tabs,Select,Row,Col,Divider,DatePicker,InputNumber } from 'antd';

import * as Yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  class FormComponent extends React.Component {
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
      return (
        <div className="app">
         <h2 className="h3">Contact Info</h2>
        <h3 className="h6">Application Type</h3>
    
        <Formik
          initialValues={{ firstName:"",lastName:"",phone:"",email: "",confirmEmail:"" }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required"),
              firstName: Yup.string()
              .required("Required"),
              lastName: Yup.string()
              .required("Required"),
              confirmEmail: Yup.string()
              .oneOf([Yup.ref('email'), null])
              .required('Password confirm is required'),
              phone:  Yup.number()
              .typeError("That doesn't look like a phone number")
              .positive("A phone number can't start with a minus")
              .integer("A phone number can't include a decimal point")
              
              .min(8)
              .max(10)
              .required('A phone number is required'),

          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset
            } = props;
            return (
              <form className="container" onSubmit={handleSubmit}>
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
                <div className="form-group">       
                <input
                    name="firstName"
                      id="firstName"
                      placeholder="firstName"
                      type="text"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.firstName && touched.firstName
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                {errors.firstName && touched.firstName && (
                  <div className="input-feedback">{errors.firstName}</div>
                )}
                </div>
                <div className="form-group">       
                <input
                    name="lastName"
                      id="lastName"
                      placeholder="lastName"
                      type="text"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.lastName && touched.lastName
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                {errors.lastName && touched.lastName && (
                  <div className="input-feedback">{errors.lastName}</div>
                )}
                </div>
                <div className="form-group">       
                <input
                    name="phone"
                      id="phone"
                      formatter={value =>this.formatPhoneNumber(value)}
                      placeholder="phone"
                      type="text"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phone && touched.phone
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                {errors.phone && touched.phone && (
                  <div className="input-feedback">{errors.phone}</div>
                )}
                </div>
              
                <div className="form-group">       
                <input
                    name="email"
                      id="email"
                      placeholder="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
                </div>
                <div className="form-group">
                    <input
                    name="confirmEmail"
                      id="confirmEmail"
                      placeholder="confirmEmail"
                      type="text"
                      value={values.confirmEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.confirmEmail && touched.confirmEmail
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                {errors.confirmEmail && touched.confirmEmail && (
                  <div className="input-feedback">{errors.confirmEmail}</div>
                )}
     </div>
     <div className="form-group">      
     <p>we respect your privacy and will only use this information to process your appplication and communicate with you about loan</p>
           <h3>Requireed for Identity Verification</h3>
           <p>if you are not ready to apply for credit and justwant to know your rates <a>check them here</a></p>
    </div>
     <div className="form-group">       
                  <input name="email" type="text" 
                   placeholder="Email"
                    className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <button
                  type="button"
                  className="outline"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            );
          }}
        </Formik>
      </div>
     
     
      );
    }
  }

export default FormComponent;
