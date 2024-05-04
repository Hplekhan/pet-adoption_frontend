import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap';


function AboutContent () {
  return (
 <Container>

     <Row>
  <Col xs={8} md={4}>
    <div style={{ position: 'relative',  }}>
      <img src="https://t4.ftcdn.net/jpg/01/12/60/69/360_F_112606954_B6V2owNKZLAmVT340AGU5505a1x5kIFm.jpg" 
      alt="Your abc" style={{ width: '350%', height: '80%',}}/>
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h1 style={{margin:'20%', marginTop:'8%', fontSize: '40px', fontFamily:'Garamond',whiteSpace: 'nowrap', color:'black'}}>About Us / Volunteer with Us</h1>
      </div>
    </div>
  </Col>
  </Row>
  <br />
<br /> <br />
  <div>
    <Row>
        <Col xs={10} md={6}>
        <h3>We're On a Mission To Support And Empower People To Responsibly Rehome Their Pets </h3>
        <br /> 
        <h6>Who we are, and why we created PetAdoption</h6>
        <p>PetAdoption has been set up by a group of animal lovers who are committed to ending pet 
            homelessness and irresponsible rehoming practices. We're part of a registered INDIAN charity 
            so you can rest assured that we always prioritise pet welfare over profit.</p>
        </Col>

        <Col xs={6} md={5}>
          <div style={{ position: 'relative' }}>
            <img src="https://images.ctfassets.net/nx3pzsky0bc9/2oMy4H3o20A4lZxvulkYdV/a1fba76e656c1d09528ebda201cf4aa0/husky-puppy-giving-a-high-five.jpg" 
            alt="Your img" style={{ width: '100%', height:'35vh'}} />
           
          </div>
        </Col>
    </Row>
  </div>
<br /> <br /> <br />
  <div>
    <Row>
        <Col xs={6} md={5}>
        <div style={{ position: 'relative' }}>
            <img src="https://nepapetsitting.com/wp-content/uploads/2022/06/Cat-Hug-2.png" 
            alt="Your img" style={{ width: '100%', height:'40vh'}} />
          </div>
        </Col>

        <Col xs={10} md={6} >
            <h4> What We Do</h4>
            <p>We're a safer, more professional and ethical alternative to sites like Facebook, Preloved, Pets4Homes and Gumtree.</p>
            <p>Our platform connects potential adopters with people who need to rehome their pets, initially starting with the India's most popular pets; dogs, cats and rabbits. This makes it easier for good people to adopt the right pet whilst maximising the chance of pets finding their forever home.</p>
            <p>We offer a non-judgmental service to rehomers and give them full control of the process. We're also helping to reduce the number of animals going into shelters. This frees up space and resources for the pets who have been abandoned, need immediate help or specialist care.</p>
        </Col>
    </Row>
  </div>
  <br /> <br />

  <div className="container"  style={{ backgroundColor: '#DFE3E8', height: '100vh', width: '100vw'}}>
    <br /> <br />
    <h2 style={{textAlign: 'center'}}>Our Values</h2>
            <div className="row justify-content-center mt-5">

                <div className="col-md-4">
                        <div className="card">
                            <img src="https://www.shutterstock.com/image-vector/icon-illustration-concept-family-care-600nw-1077028331.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '150px', width: 'auto' }} />
                            <div className="card-body">
                                <p className="card-text text-center mb-1" style={{ fontFamily: 'Copperplate' }}><h4>Kind  Everyone </h4></p>
                                <p className="card-text text-center" style={{ fontFamily: 'Copperplate' }}><small>We believe that...</small></p>
                                <ul>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>Every pet deserves to be safe, loved & respect.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who are grate candidates for adoption shouldn't wbe put off by complicated process.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who need  to  adopt the pets should be empowered to do so without being judged</small></li>

                                </ul>
                            </div>
                        </div>
                </div>

                <div className="col-md-4">
                        <div className="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqKW_fomC27szSDf43ncEI6DmPhr8Rna6AFK9lmyuqpZcehijT3FMDbQaKDM62ZlL1Ko&usqp=CAU" className="rounded-top img-fluid mx-auto d-block mt-2" alt="pet-cards-img" style={{ height: '150px', width: 'auto' }} />
                            <div className="card-body">
                                <p className="card-text text-center mb-1" style={{ fontFamily: 'Copperplate' }}><h4>Kind  Everyone </h4></p>
                                <p className="card-text text-center" style={{ fontFamily: 'Copperplate' }}><small>We believe that...</small></p>
                                <ul>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>Every pet deserves to be safe, loved & respect.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who are grate candidates for adoption shouldn't wbe put off by complicated process.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who need  to  adopt the pets should be empowered to do so without being judged</small></li>

                                </ul>
                            </div>
                        </div>
                </div>

                <div className="col-md-4">
                        <div className="card" style={{ transition: 'transform 0.3s' }}>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/007/636/859/small/community-logo-design-free-vector.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="community-cards-img" style={{ height: '150px', width: 'auto' }} />
                            <div className="card-body">
                                <p className="card-text text-center mb-1" style={{ fontFamily: 'Copperplate' }}><h4>Advocate Adoption </h4></p>
                                <p className="card-text text-center" style={{ fontFamily: 'Copperplate' }}><small>We believe that...</small></p>
                                <ul>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>Every pet deserves to be safe, loved & respect.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who are grate candidates for adoption shouldn't wbe put off by complicated process.</small></li>
                                    <li style={{ fontFamily: 'Copperplate' }}><small>People who need  to  adopt the pets should be empowered to do so without being judged</small></li>

                                </ul>
                            </div>
                        </div>
                </div>
            </div>
            <br /> <br />
            <div className="box">
                <p className='box-text'>
                    <h3>Register for an Account <button style={{float:"right", marginTop:'20px', }} id="btn-1">Register</button></h3>
                    <p style={{fontSize:'15px'}}>The best way to save a beloved pet is to keep them out of the shelter system. Rehoming a dog, cat or rabbit  <br />is a better kind of pet adoption, in every way.</p>
                    <div> </div> </p>
            </div>

        </div>
        <br /> <br />

        
  </Container>
  
  )
}
export default AboutContent;