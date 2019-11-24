import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'

export default ({ touched, errors ,values}) => (
  <Container>
    <Row>
        <Col>
        <Row>
            <label>Primary Applicant</label>
        </Row>
        <Row>
            <p>{values.FirstName } {values.LastName}</p>
        </Row>
        <Row>
            <p>{values.Phone}</p>
        </Row>
        <Row>
            <p>{values.Email}</p>  
        </Row>
        <Row>
            {/* <p>{values.Datepicker}</p> */}
        </Row>
        <Row>
             <p>{values.Ssn}</p>
        </Row>
        </Col>
        { values.Form_Type ==="false" && 
            <Col>
                <Row>
                    <label>Secondary Applicant</label>
                    </Row>
                <Row>
                    <p>{values.FirstNameJ} {values.LastNameJ}</p>
                    </Row>
                <Row>
                    <p>{values.PhoneJ}</p>
                    </Row>
                <Row>
                    <p>{values.EmailJ}</p>    
                    </Row>
                <Row>  
                    {/* <p>{values.DatepickerJ}</p> */}
                    </Row>
                <Row>  
                    <p>{values.SsnJ}</p>
                    </Row>
            </Col>
        }
    </Row>
    <Row>
        <Col>
            <Row>  
                <label>Housing</label>
            </Row>
            <Row> 
            <p>{values.Own}</p>
            </Row>
            <Row> 
            <p>{values.Rent}/month</p>
            </Row>
            <Row> 
            <p>{values.StreetAddress}</p>
            </Row>
            <Row> 
            <p>{values.City} {values.State} {values.Zipcode}</p>
            </Row>
            <Row> 
            <p>{values.Having_Two_years?'Over 2 years':'---'}</p>
            </Row>

        </Col>
        { values.Form_Type ==="false" && 
        <Col>
            <Row> 
                <label>Housing</label>
            </Row>
            <Row> 
                <p>{values.OwnJ}</p>
            </Row>
            <Row> 
                <p>{values.RentJ}/month</p>
            </Row>
            <Row> 
                <p>{values.StreetAddressJ}</p>
            </Row>
            <Row> 
                <p>{values.CityJ} {values.StateJ} {values.ZipcodeJ}</p>
            </Row>
            <Row> 
                 <p>{values.Having_Two_yearsJ?'Over 2 years':'---'}</p>
            </Row>
        </Col>
        }
    </Row>
    <Row>
        <Col>
            <Row> 
                <label>Employment</label>
            </Row>
            <Row> 
                 <p>{values.Empolyement_Status}</p>
            </Row>
            <Row> 
                 <p>{values.Employer}</p>
            </Row>
            <Row> 
                 <p>{values.Money}/{values.Tenure}</p>
            </Row>
        </Col>
        { values.Form_Type ==="false" && 
        <Col>
            <Row>   
                 <label>Employement</label>
            </Row>
            <Row> 
                <p>{values.Empolyement_StatusJ}</p>
            </Row>
            <Row> 
                 <p>{values.EmployerJ}</p>
            </Row>
            <Row> 
                 <p>{values.MoneyJ}/{values.TenureJ}</p>
            </Row>
        </Col>
        }
    </Row>
  </Container>
);
