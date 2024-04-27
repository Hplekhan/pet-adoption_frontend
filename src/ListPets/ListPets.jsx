import React from 'react'
import NavBar from '../NavBar/NavBar'
import PetsIcon from '@mui/icons-material/Pets';

const ListPets = () => {
    return (
        <>
            {/* Navbar component calling */}
            <NavBar />

            <div className="text-center mt-4">
                <h3 style={{ fontFamily: 'Copperplate' }}><b>Popular Pet Searches</b></h3>
                <p style={{ fontFamily: 'Copperplate' }}><small>Whilst you can use our filters to search for specific pets, we thought you'd like to try these popular pet searches!</small></p>

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b>Big Dogs</b></h3></div>
                <div className="row justify-content-around">
                    {/* Small card -1 */}
                    <div className="row justify-content-around">
                        {/* Small card -1 */}
                        <div className="col-md-4">
                            <div className="card-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '100%', height: '80%' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1520981988395-08b47cfa6865?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVucmV0cmlldmVyfGVufDB8fDB8fHww" className="card-img-top mx-auto d-block zoom-on-hover" alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center">
                                    <h4 style={{ fontFamily: 'Copperplate' }}>Golden Retriever</h4>
                                    <p style={{ fontFamily: 'Copperplate' }}><small></small></p>
                                </div>
                            </div>
                        </div>
                        {/* Small card -2 */}
                        <div className="col-md-4">
                            <div className="card-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '100%', height: '80%' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1520981988395-08b47cfa6865?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVucmV0cmlldmVyfGVufDB8fDB8fHww" className="card-img-top mx-auto d-block zoom-on-hover" alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center">
                                    <h4 style={{ fontFamily: 'Copperplate' }}>Golden Retriever</h4>
                                    <p style={{ fontFamily: 'Copperplate' }}><small></small></p>
                                </div>
                            </div>
                        </div>
                        {/* Small card -3 */}
                        <div className="col-md-4">
                            <div className="card-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '100%', height: '80%' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1520981988395-08b47cfa6865?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVucmV0cmlldmVyfGVufDB8fDB8fHww" className="card-img-top mx-auto d-block zoom-on-hover" alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center">
                                    <h4 style={{ fontFamily: 'Copperplate' }}>Golden Retriever</h4>
                                    <p style={{ fontFamily: 'Copperplate' }}><small></small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        </>
    )
}

export default ListPets