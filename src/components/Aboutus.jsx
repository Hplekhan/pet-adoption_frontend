import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function Aboutus() {
  return (
    <Navbar className="navbar navbar-expand-lg text-center sticky-top" id="nav-custom" style={{ backgroundColor: "", height: "80px" }}>
      <div className="container-fluid mr-auto">
        <Navbar.Brand href="#home" className='ml-auto'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYEQbU5aMvGET8rRFSZkQcGrZutBf1CMRAFslJ7878DQ&s"
            width="100px"
            height="70px"
            className="d-inline-block align-top"
            alt="Brand Logo"
            style={{ objectFit: "fill", marginLeft: "60px" }}
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
        <Nav className="collapse navbar-collapse col-12 d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Corrected className */}
            <li className="nav-item"> {/* Corrected className */}
              <Link className="nav-link" to="/" style={{ fontFamily: 'Copperplate' }}> {/* Changed to Link and to */}
                <small><b>Home</b></small>
              </Link>
            </li>
            <li className="nav-item"> {/* Corrected className */}
              <Link className="nav-link" to="/portfolio" style={{ fontFamily: 'Copperplate' }}> {/* Changed to Link and to */}
                <small><b>List a Pet</b></small>
              </Link>
            </li>
            <li className="nav-item"> {/* Corrected className */}
              <NavDropdown title={<small><b>Help and Advice</b></small>} id="basic-nav-dropdown" style={{ fontFamily: 'Copperplate' }}>
                <NavDropdown.Item href="#action/3.1">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pet Care Information</NavDropdown.Item>

              </NavDropdown>
            </li>
            <li className="nav-item"> {/* Corrected className */}
              <Link className="nav-link" to="/books" style={{ fontFamily: 'Copperplate' }}> {/* Changed to Link and to */}
                <small><b>About Us</b></small>
              </Link>
            </li>
            <li className="nav-item"> {/* Corrected className */}
              <Link className="nav-link" to="#" style={{ fontFamily: 'Copperplate' }}> {/* Changed to Link and to */}
                <small><b>Login/Register</b></small>
              </Link>
            </li>
          </ul>
        </Nav>
      </div>

      <div>
        <img src="https://petrehomer.org/media/qohdituh/green-hand-paw-1.png" alt="" />
      </div>
    </Navbar>
  )
}

export default Aboutus;
