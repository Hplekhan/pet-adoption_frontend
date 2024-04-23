import { Container, Row, Col, Form } from 'react-bootstrap';
import * as React from 'react';
import Button from 'react-bootstrap/Button';

function Menuu() {
  return (
    <Container style={{ minHeight: '100vh' }} className="d-flex align-items-center justify-content-center">
      <Row>
        <Col xs={6} md={6}>
          <div>
            <h1 style={{ fontSize: '20px', textAlign: 'center' }}>REGISTER</h1>
            <Form style={{ marginTop: '20px' }}>
              <Col>
                <Form.Group className="mb-3" controlId="firstName" style={{ textAlign: 'center' }}>
                  <Form.Label > <h3>First Name *</h3></Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName"  style={{ textAlign: 'center' }}>
                  <Form.Label> <h3>Last Name *</h3></Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email"  style={{ textAlign: 'center' }}>
                  <Form.Label> <h3>Email*</h3></Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password"  style={{ textAlign: 'center', }}>
                  <Form.Label style={{height: '45px', width: '100px'}}> <h3> Password* </h3></Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" type="button" className="w-100"  style={{ textAlign: 'center', height: '45px', width: '100px' }}>
                  Register
                </Button>
              </Col>
            </Form>
          </div>
        </Col>

        <Col xs={6} md={6}>
          <div>
            <h1 style={{ fontSize: '20px', textAlign: 'center' }}>LOGIN</h1>
            <Form style={{ marginTop: '20px' }}>
              <Col>
                <Form.Group className="mb-3" controlId="loginEmail"  style={{ textAlign: 'center' }}>
                  <Form.Label>Email *</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="loginPassword"  style={{ textAlign: 'center' }}>
                  <Form.Label>Password *</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" type="button" className="w-100"  style={{ textAlign: 'center' }}>
                  Submit
                </Button>
              </Col>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Menuu;
