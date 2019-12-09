import React from "react";
import {Row,Col,Container,Button} from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { Field } from "formik";
import PhoneInput from "./lib/Phone";

export default ({ touched, errors ,values}) => {
    const [modalShow, setModalShow] = React.useState(false);
   const MyVerticallyCenteredModal=(props)=> {
            return (
              <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Row>
      <Field name="FirstName" id="FirstName"  placeholder="First Name" />
      {touched.FirstName && typeof errors.FirstName === "string" && (
        <div className="input-feedback">{errors.FirstName}</div>
      )}
    </Row>
    <Row>
      <Field name="LastName" id="LastName" placeholder="Last Name" />
      {touched.LastName && typeof errors.LastName === "string" && (
        <div className="input-feedback">{errors.LastName}</div>
      )}
    </Row>
      <Row>
      <PhoneInput name="Phone" value={values.Phone} id="Phone"></PhoneInput>
      {touched.Phone && typeof errors.Phone === "string" && (
        <div className="input-feedback">{errors.Phone}</div>
      )}
    </Row>
    <Row>
      <Field name="Email" id="Email" placeholder="Email" />
      {touched.Email && typeof errors.Email === "string" && (
        <div className="input-feedback">{errors.Email}</div>
      )}
    </Row>
        
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
              </Modal>
            );
          };
    return(

  <Container>
    <Row>
        <Col>
            <Row>
                <label>Primary Applicant <FaRegEdit onClick={() => setModalShow(true)} > </FaRegEdit></label>
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
                {/* <p>{values.DateOfBirth}</p> */}
            </Row>
            <Row>
                <p>{values.Ssn}</p>
            </Row>
        </Col>
        { values.Form_Type ==="false" &&
            <Col>
                <Row>
                    <label>Secondary Applicant <FaRegEdit/></label>
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
                    {/* <p>{values.DateOfBirthJ}</p> */}
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
                <label>Housing <FaRegEdit/> </label>
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
                <label>Housing <FaRegEdit/> </label>
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
                <label>Employment <FaRegEdit/> </label>
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
                 <label>Employment <FaRegEdit/></label>
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
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Container>
)};
