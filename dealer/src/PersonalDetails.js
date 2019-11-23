import React from "react";
import { Field } from "formik";
import {Row,Col,Container} from 'react-bootstrap'

export default ({ touched, errors }) => (
  <Container>
    <Row>
        <Col>
            <label>Primary Applicant</label>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
        </Col>
        <Col>
            <label>Secondary Applicant</label>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
        </Col>
    </Row>
    <Row>
        <Col>
            <label>Housing</label>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
        </Col>
        <Col>
            <label>Housing</label>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
        </Col>
    </Row>
    <Row>
        <Col>
            <label>Employment</label>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
        </Col>
        <Col>
            <label>Employement</label>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
            <p>First Name</p>
        </Col>
    </Row>
  </Container>
);
