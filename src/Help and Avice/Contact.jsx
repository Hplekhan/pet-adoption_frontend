import React from 'react';
import { Row, Col, Form, Button } from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavBar from '../NavBar/NavBar';
function Contact() {
  return (
    <>
      <NavBar />
      <div>
        <img src="https://www.petprotect.co.uk/wp-content/uploads/2023/04/Blog-1140x325px-9-1.png" alt="" style={{ width: '100%', height: 'auto', }} />
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white p-1 shadow-lg rounded-lg">
          <br /> <br />
          <div className="flex justify-center items-center">
            <h2 style={{ textAlign: 'center', fontFamily: 'Copperplate' }}><b>Contact Us</b></h2>
            <h5 style={{ textAlign: 'center', fontFamily: 'Copperplate' }} >Please use the form below to get in touch with us. Let us know what the enquiry is about and we'll respond as soon as we can.</h5>
            <br />
          </div>

          <div>
            <Row className="justify-content-center">
              <Col xs={12} md={6} lg={6}> {/* Adjust the width according to your design */}
                <Form style={{ marginTop: '8px', backgroundColor: 'white', minHeight: '50vh', padding: '20px' }}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Control type="text" placeholder="Full name" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="phone">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="telephone">
                        <Form.Control type="tel" placeholder="Telephone" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="query">
                        <Form.Control type="text" placeholder="what is your enquiery about?" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="query">
                        <Form.Control as="textarea" rows={4} placeholder="Write in detail about your enquiery" />
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={12} className="d-flex justify-content-center align-items-center">
                      <Button variant="primary" type="submit" className=" w-40" style={{ backgroundColor: '#5F7FCD' }} >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
        <div className='conatct-footer' style={{ background: "white" }}>
          <div className="flex justify-content-center">
            <h2 style={{ textAlign: 'center', fontFamily: 'Copperplate' }}>Follow Us</h2>
            <br />
            <div className='d-flex justify-content-center align-items-center' >
              <PinterestIcon style={{ marginLeft: '' }}></PinterestIcon>
              <FacebookIcon style={{ marginLeft: '20px' }}></FacebookIcon>
              <TwitterIcon style={{ marginLeft: '20px', }}></TwitterIcon>
              <InstagramIcon style={{ marginLeft: '20px' }}></InstagramIcon>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}
export default Contact;
