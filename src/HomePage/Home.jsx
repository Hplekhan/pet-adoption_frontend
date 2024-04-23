// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Person } from '@mui/icons-material';
import { Nav, Navbar } from 'react-bootstrap';
import React, { useEffect } from 'react';
import './Home.css';
import { NavDropdown } from 'react-bootstrap';
// import PolicyTwoToneIcon from '@mui/icons-material/PolicyTwoTone';
// import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';



function Home() {
    useEffect(() => {
        // Add CSS to prevent scrolling
        document.body.style.overflow = 'hidden';
        // Clean up function to remove CSS when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (

        <>
            <Navbar
                className="navbar navbar-expand-lg text-center sticky-top "
                id="nav-custom"
                style={{ backgroundColor: "", height: "80px" }} // #E6E6E6
            >
                <div className="container-fluid mr-auto">
                    <Navbar.Brand href="#home" className='ml-auto'>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEQbU5aMvGET8rRFSZkQcGrZutBf1CMRAFslJ7878DQ&s"
                            width="100px"
                            height="70px"
                            className="d-inline-block align-top"
                            alt="Brand Logo"
                            style={{ objectFit: "fill", marginLeft: "60px" }} // Added marginLeft
                        />
                    </Navbar.Brand>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Nav
                        className="collapse navbar-collapse col-12 d-flex justify-content-center"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ml-auto"> {/* Added ml-auto class */}
                            <li className="nav-item">
                                <Nav.Link className="nav-link" aria-current="page" to="/" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>Home</b></small>
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" to="/portfolio" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>List a Pet</b></small>
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <NavDropdown title={<small><b>Help and Advive</b></small>} id="basic-nav-dropdown" style={{ fontFamily: 'Copperplate' }}>
                                    <NavDropdown.Item href="#action/3.1">Action 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Action 3</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" to="/books" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>About Us</b></small>
                                </Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link className="nav-link" to="#" style={{ fontFamily: 'Copperplate' }}><Person />
                                    <small><b>LoginIn/Register</b></small>
                                </Nav.Link>
                            </li>
                        </ul>
                    </Nav>
                </div>
            </Navbar>


            {/* <div className="big-image"
                    style={{
                        backgroundImage: `url(https://www.dogcancer.com/wp-content/uploads/2023/04/ROLE-OF-DOGS-AS-FAMILY-MEMBERS.jpg)`,
                        backgroundSize: 'cover',
                        height: '700px', // Adjust height as needed
                        marginTop: '1px' // Adjust margin-top as needed
                    }}
                ></div> */}
            <div className="image-container">
                <div className="overlay-card">
                    <div className="icon">
                        <TravelExploreIcon fontSize="large" />
                    </div>
                    <div className="content">
                        <h2>Want to Adopt</h2>
                        <small>Search the available pets listed on this site</small>
                    </div>
                </div>
                <div
                    className="big-image"
                    style={{
                        backgroundImage: `url(https://www.dogcancer.com/wp-content/uploads/2023/04/ROLE-OF-DOGS-AS-FAMILY-MEMBERS.jpg)`,
                        backgroundSize: 'cover',
                        height: '600px', // Adjust height as needed
                        marginTop: '1px' // Adjust margin-top as needed
                    }}
                ></div>


            </div>
            <div className="box">
                <p className='box-text'>
                    <h3>Register for an Account</h3>
                    <div>
                        <button id="btn-1">Register</button>

                    </div>
                </p>
            </div>










        </>



    );
}

export default Home;
