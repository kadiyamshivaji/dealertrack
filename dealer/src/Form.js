import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";

import React from "react";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

  class FormComponent extends React.Component {
    render() {
      return (
        <div className="app">
        <h1>
          Basic{" "}
          <a
            href="https://github.com/jaredpalmer/formik"
            target="_blank"
            rel="noopener noreferrer"
          >
            Formik
          </a>{" "}
          Demo
        </h1>
    
        <Formik
          initialValues={{ email: "" }}
          onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required("Required")
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
                <div className="form-group">       
                  <input name="email" type="text" 
                    className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
                    value={values.email} 
                    onChange={handleChange}
                    onBlur={handleBlur} />
                  {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group">
                    <input
                      id="email"
                      placeholder="Email"
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
    
                <DisplayFormikState {...props} />
              </form>
            );
          }}
        </Formik>
    
        <MoreResources />
      </div>
     
     
      );
    }
  }

export default FormComponent;
