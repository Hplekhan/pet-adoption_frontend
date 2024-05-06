import { Person } from '@mui/icons-material';
import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import brand_logo from '../../src/assests/logo.png'

const NavBar = () => {
    return (

        <>
            <nav
                className="navbar navbar-expand-lg text-center sticky-top "
                id="nav-custom"
                style={{ backgroundColor: "white", height: "80px" }} // #E6E6E6
            >
                <div className="container-fluid mr-auto">
                    <Link href="#home" className='ml-auto'>
                        <img id='brandlogo'
                            src={brand_logo}
                            width="450%"
                            height="350%"
                            className="d-inline-block align-top"
                            alt="Brand Logo"
                            style={{ objectFit: "fill", marginLeft: "60px" }}
                        />
                    </Link>
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
                    <div
                        className="collapse navbar-collapse col-12 d-flex justify-content-center"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>Home</b></small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/pets-list" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>List a Pet</b></small>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <NavDropdown title={<small><b>Help and Advive</b></small>} id="basic-nav-dropdown" style={{ fontFamily: 'Copperplate' }}>
                                    <NavLink className="dropdown-item" to="/faq">FAQ</NavLink>
                                    <NavLink className="dropdown-item" to="/petcareinfo">Pet care information</NavLink>
                                    <NavLink className="dropdown-item" to="/contact">Contact</NavLink>
                                </NavDropdown>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutus" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>About Us</b></small>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ fontFamily: 'Copperplate' }}>
                                    <small><b>Contact</b></small>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" style={{ fontFamily: 'Copperplate' }}><Person />
                                    <small><b>LoginIn/Register</b></small>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar