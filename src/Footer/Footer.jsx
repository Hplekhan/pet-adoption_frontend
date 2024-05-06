import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container" style={{ backgroundColor: '#DBE2E9', padding: '20px' }}>
            <h2 className="text-center" style={{ fontFamily: 'Copperplate', marginBottom: '20px', fontFamily: 'Copperplate' }}></h2>

            {/* About Us */}
            <div className="footer-container">
                <Container>
                    <Row className="justify-content-around">
                        {/* About Us */}
                        <Col style={{ fontFamily: 'Copperplate' }} className='mb-4'>
                            <h3>About Us</h3>
                            <small>Online pet adoption platforms provide a convenient and accessible way for individuals and families to find their perfect animal companions. These platforms typically feature profiles of pets available for adoption, including details about their age, breed, temperament, and any special needs they may have. Users can browse through these profiles from the comfort of their own homes, allowing them to carefully consider their options before making a decision.</small>
                        </Col>

                        {/* Quick Links */}
                        <Col style={{ fontFamily: 'Copperplate' }} className='mb-4 text-center'>
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled">
                                <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
                                <li><NavLink to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Adopt</NavLink></li>
                                <li><NavLink to="/pets-list" style={{ textDecoration: 'none', color: 'inherit' }}>Pets List</NavLink></li>
                                <li><NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</NavLink></li>
                            </ul>
                        </Col>

                        {/* Social Media Icons */}
                        <Col style={{ fontFamily: 'Copperplate' }} className='mb-4 text-center'>
                            <h3>Follow Us</h3>
                            <div className="icons">

                                <a href="#" className="mr-3"> <PinterestIcon /> </a>
                                <a href="#" className="mr-3"> <InstagramIcon /> </a>
                                <a href="#" className="mr-3"> <TwitterIcon /> </a>
                                <a href="#" className='mr-3'> <FacebookIcon /> </a>
                            </div>
                        </Col>
                    </Row>

                    {/* Copyright */}
                    <Row>
                        <Col>
                            <p className="text-center">
                                <small>© 2024 Copyright - PetAdoption</small>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}

export default Footer