import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap';
function Aboutus(){ return (
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
         <Col xs={10} md={7}>
           <div style={{ fontFamily: 'Copperplate', marginTop:'20px' }}>
             <br /> <br />
         <h3 >We're On a Mission To Support And Empower People To Responsibly Rehome Their Pets </h3>
         <br /> 
         <h6>Who we are, and why we created PetAdoption</h6>
         <p>PetAdoption has been set up by a group of animal lovers who are committed to ending pet 
             homelessness and irresponsible rehoming practices. We're part of a registered Indian charity 
             so you can rest assured that we always prioritise pet welfare over profit.</p>
             </div> 
         </Col>
         <Col xs={6} md={5}>
           <div style={{ position: 'relative' }}>
             <img src="https://images.ctfassets.net/nx3pzsky0bc9/2oMy4H3o20A4lZxvulkYdV/a1fba76e656c1d09528ebda201cf4aa0/husky-puppy-giving-a-high-five.jpg" 
             alt="Your img" style={{ width: '100%', height:'45vh'}} />
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
             alt="Your img" style={{ width: '90%', height:'45vh'}} />
           </div>
         </Col>
         <Col xs={10} md={7} >
           <div style={{ fontFamily: 'Copperplate', marginTop:'20px' }}>
             <br />
             <h4> What We Do</h4>
             <p>We're a safer, more professional and ethical alternative to sites like Facebook, Preloved, Pets4Homes and Gumtree.</p>
             <p>Our platform connects potential adopters with people who need to rehome their pets, initially starting with the India's most popular pets; dogs, cats and rabbits. This makes it easier for good people to adopt the right pet whilst maximising the chance of pets finding their forever home.</p>
             <p>We offer a non-judgmental service to rehomers and give them full control of the process. We're also helping to reduce the number of animals going into shelters. This frees up space and resources for the pets who have been abandoned, need immediate help or specialist care.</p>
         </div>
         </Col>
     </Row>
   </div>
   <br /> <br />
   <div className="container"  style={{ backgroundColor: '#DFE3E8', height: '270vh', width: '100vw'}}>
     <br /> <br />
     <h2 style={{textAlign: 'center', fontFamily: 'Copperplate'}}>Our Values</h2>  
             <div className="row justify-content-center mt-5">
                 <div className="col-md-3">
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
                 <div className="col-md-3">
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
                 <div className="col-md-3">
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
             <div className="col-lg-20"  style={{ fontFamily: 'Copperplate', background:'#4491BF',padding:'15px' }}>
                 <p className='box-text'>
                   <br />
                   <h3>Register for an Account <button style={{ float: "right", marginTop: '20px', padding: '10px 20px', borderRadius: '10px', border: 'none', backgroundColor: 'lightblue', marginRight:'10%', width:'15%' }} id="btn-1">Register</button></h3>
                     <p style={{fontSize:'15px'}}>The best way to save a beloved pet is to keep them out of the shelter system. Rehoming a dog, cat or rabbit  <br />is a better kind of pet adoption, in every way.</p>
                     <div> </div> </p>
             </div>
 <br /> <br />
 <container style={{textAlign: 'center', fontFamily: 'Copperplate'}}>
   <h2 >Volunteer With Us</h2>
   <p>As a registered animal welfare charity we rely on support from our highly motivated <br /> team 
     of volunteers. We are currently recruiting additional volunteers to join us, <br /> and if you'd 
     like to play your part in helping pets find their safe, loving  <br />new home, please check out 
     the opportunities below.</p>
 </container>
 <div className="row justify-content-center mt-5">
                 <div className="col-md-5" >
                         <div className="card" st>
                           <br />
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtU4Qi62we1qdMHXFeyNzNDLyGilnJE9CsjrjW02K4g&s" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '100px', width: 'auto' }} />
                             <div className="card-body" style={{ fontFamily: 'Copperplate' }}>
                                 <p className="card-text text-center mb-1"><h4>Rehoming Coordinators</h4></p>
                                 <p className="card-text text-center"><small>We speak to every pet owner in detail about their pet before and  their listing is approved.</small></p>
                                 <p className="card-text text-center">We are currently seeking additional Rehoming Coordinators to join our team.</p>   
                                 <h6 className="card-text text-center"> <b>For further details, click here and please register your interest via our volunteer database </b></h6>
 <br />
                                 </div>
                         </div>
                 </div>
                 <div className="col-md-5">
                         <div className="card">
                           <br />
                             <img src="https://thumbs.dreamstime.com/b/black-round-veterinary-care-icon-cross-pet-45004984.jpg" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '100px', width: 'auto' }} />
                             <div className="card-body" style={{ fontFamily: 'Copperplate' }}>
                                 <p className="card-text text-center mb-1"><h4>Home Checkers</h4></p>
                                 <p className="card-text text-center"> <small>Every pet that is adopted has a home check. This can be in person or can be done remotely. </small></p>
                                 <p className="card-text text-center">We are currently seeking additional remotely based home checkers to join our team.</p>   
                                 <h6 className="card-text text-center"> <b>For further details, click here and please register your interest via our volunteer database </b></h6>
 <br />
                                 </div>
                         </div>
                 </div>
                 </div>
 <div className="row justify-content-center mt-5">
                 <div className="col-md-5" >
                         <div className="card" st>
                           <br />
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtgHXQPrtWyFmN4rW6_aACB6seI1DrGIAPwOHR1CmMvoFPW17qZ5HeIirzbQYzIpymd8&usqp=CAU" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '100px', width: 'auto' }} />
                             <div className="card-body" style={{ fontFamily: 'Copperplate' }}>
                                 <p className="card-text text-center mb-1"><h4>Social Media Content Creators</h4></p>
                                 <p className="card-text text-center"><small>We put a huge amount of effort into showcasing the pets on our website that are looking for new homes.</small></p>
                                 <p className="card-text text-center">We are currently seeking additional Rehoming Coordinators to join our team.</p>   
                                <h6 className="card-text text-center"> <b>For further details, click here and please register your interest via our volunteer database </b></h6>
                                 <br />
                                 </div>
                         </div>
                 </div>
                 <div className="col-md-5">
                         <div className="card" st>
                           <br />
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gvy_a470qMElJlBINXAh2BW4exI_c0Njylqn7NzLTQ88mobmAUHI4TLZEwLpgX8BeFY&usqp=CAU" className="rounded-top img-fluid mx-auto d-block mt-2" alt="kind-cards-img" style={{ height: '100px', width: 'auto' }} />
                             <div className="card-body" style={{ fontFamily: 'Copperplate' }}>
                                 <p className="card-text text-center mb-1"><h4>Occasional Pet Transporters</h4></p>
                                 <p className="card-text text-center"> <small>On occasions we need volunteers to help us transport pets. Although not a service we generally offer, there are times when we need to provide help.</small></p>
                                 <p className="card-text text-center">We are currently seeking additional Pet Transporters to join our team.</p>   
                               <br />  <h6 className="card-text text-center"> <b>For further details, click here and please register your interest via our volunteer database </b></h6>
 <br />
                                 </div>
                         </div>
                 </div>
                 </div>        
         </div>
         <br /> <br />
         <container style={{textAlign: 'center', fontFamily: 'Copperplate'}}>
                   <p><big>We don't know how many dogs, cats and rabbits will continue to be surrendered over the coming months because their owners can't keep them. <br />
 But we do know that rescue centres are telling us that they are struggling with space and the funds to care for them. <br /> If rescue centres are full what will happen to the pets that need the most help? <br />
 <br />
 At PetRehomer we are determined that things don’t have to be this way. Not in our 21st century, web-connected world. So we created PetRehomer, an online community where people who can’t keep their pets connect directly with people who want to adopt a pet. <br />
 <br />
 Together, we’ll keep dogs, cats and rabbits from ever seeing the inside of a rescue centre or shelter, so they can love and be loved in new homes. <br />
 Saving lives. Unburdening rescue centres. <br />
 <br />
 Creating a place where we can make a positive impact. Ending pet homelessness, and enabling responsible rehoming. <br /> That’s our mission. That’s what we want you to know about us.
 </big></p>
 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWpJxPwJS_ajMYV7pVPEhMxGnmfYU9vTZyvKKKdjl7A&s" alt="" />   
     </div>
     </container>
         <br /> <br />   
   </Container>
   );
  }
  export default Aboutus;
