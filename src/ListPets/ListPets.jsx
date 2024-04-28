import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import FavoriteIcon from '@mui/icons-material/Favorite';

const ListPets = () => {

    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <>
            {/* Navbar component calling */}
            <NavBar />

            <div className="text-center mt-4">
                <h3 style={{ fontFamily: 'Copperplate' }}><b>Popular Pet Searches</b></h3>
                <p style={{ fontFamily: 'Copperplate' }}><small>Whilst you can use our filters to search for specific pets, we thought you'd like to try these popular pet searches!</small></p>

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b>Big Dogs</b></h3>
                </div>
                <div className="row justify-content-around">
                    {/* Small card -1 */}
                    <div className="row justify-content-around">
                        {/* Small card -1 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src=" https://media.istockphoto.com/id/1489427502/photo/black-and-white-siberian-husky-with-blue-eyes-walks-in-the-snow-in-winter-against-the.webp?b=1&s=170667a&w=0&k=20&c=gHDlLi8oFlmpkXanE1kHPmgZ24dOw5n3L_IF3eiS458= " className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Husky</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                       

                        {/* Small card -2 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1520981988395-08b47cfa6865?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZGVucmV0cmlldmVyfGVufDB8fDB8fHww " className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Golden Retriver</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                        
                        {/* Small card -3 */}
                       {/**/}
                       <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src=" https://media.istockphoto.com/id/1184492889/photo/american-bully-pocket.webp?b=1&s=170667a&w=0&k=20&c=1uk-nI9cRu3zp-hJrTW1UYOzj8TPEvrwuXtwIsUM6-g=" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>American Bully</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* 2 row cards */}

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b>Paired Dogs</b></h3>
                </div>
                <div className="row justify-content-around">
                    {/* Small card -1 */}
                    <div className="row justify-content-around">
                        {/* Small card -1 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1598826046537-475a302ffcee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9ncyUyMHBhaXJzfGVufDB8fDB8fHww" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Yorkie</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>

                        {/* Small card -2 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://media.istockphoto.com/id/502303041/photo/three-labrador-retriever-dogs-on-the-grass.webp?b=1&s=170667a&w=0&k=20&c=eTSWvMGzHgThFhCMnB_pKo53938RPmehiY2NYBQuFQg=" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>labrador Retriver</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                       
                        {/* Small card -3 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1567361940434-132560a50902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3MlMjBwYWlyc3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Husky</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                {/* 3 row cards-Cats */}

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b> Paired Cats</b></h3>
                </div>
                <div className="row justify-content-around">
                    {/* Small card -1 */}
                    <div className="row justify-content-around">
                        {/* Small card -1 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '19px' }}>
                                    <img src="https://plus.unsplash.com/premium_photo-1671976322693-97b3056d69b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Manx</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                       

                        {/* Small card -2 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '19px' }}>
                                    <img src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHN8ZW58MHx8MHx8fDA%3D" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Manx</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                        {/* Small card -3 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '19px' }}>
                                    <img src="https://media.istockphoto.com/id/534138151/photo/cat-and-dog-together.webp?b=1&s=170667a&w=0&k=20&c=SzDH9tba8lwaXr7M08W9NlbOaplfWm7uUQBlXuJgNTQ=" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Manx</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>

                {/* 4 row -Kitten */}

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b> Kitten's</b></h3>
                </div>
                <div className="row justify-content-around">
                    {/* Small card -1 */}
                    <div className="row justify-content-around">
                        {/* Small card -1 */}
                        {/*  */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '19px' }}>
                                    <img src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Manx</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>

                        {/* Small card -2 */}
                       
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '19px' }}>
                                    <img src="https://media.istockphoto.com/id/1070428270/photo/mother-cat-nursing-baby-kittens.webp?b=1&s=170667a&w=0&k=20&c=DzQtp-kak95miDz41X3iWQYJG4GHNodwBwrdAAAlQWg=" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Manx Kittens</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                       
                        {/* Small card -3 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '19px' }}>
                                    <img src="https://media.istockphoto.com/id/927401846/photo/group-persian-kittens-sitting-on-cat-tower.webp?b=1&s=170667a&w=0&k=20&c=Jj7KlTfw9a6QScGlm1wpNNK2pD52ZnGeBCqKjCmoLU8=" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center " style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Persian Kittens</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                       
                    </div>

                </div>

                {/* 5 Row Rabbits */}

                <div className="text-center mt-3">
                    <h3 style={{ fontFamily: 'Copperplate' }}><b> Rabbit's</b></h3>
                </div>
                <div className="row justify-content-around">
                    {/* Small card -1 */}
                    <div className="row justify-content-around">
                        {/* Small card -1 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1591561582301-7ce6588cc286?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhYmJpdHxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Snow-white Bunny</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>

                        {/* Small card -2 */}
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1629898569904-669319348211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1bm55fGVufDB8fDB8fHww" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Brown Bunny</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
                                </div>
                            </div>
                        </div>
                       
                        {/* Small card -3 */}   
                        <div className="col-md-4">
                            <div className="list-card-1 mt-1" style={{ backgroundColor: '#fdf5e2', marginBottom: '20px', borderRadius: '15px', width: '80%', height: '90%', position: 'relative' }}>
                                <div style={{ padding: '15px' }}>
                                    <img src="https://images.unsplash.com/photo-1583301286816-f4f05e1e8b25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D" className="card-img-top mx-auto d-block " alt="Small Card-Image" style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '10px' }} />
                                </div>
                                <div className="card-body text-center" style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>
                                    <h4 style={{ fontFamily: 'Copperplate', color:'white' }}>Pairs Bunny</h4>
                                    {/* <p style={{ fontFamily: 'Copperplate' }}><small>Bottom Center Text</small></p> */}
                                </div>
                                <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                                    <FavoriteIcon style={{ color: isLiked ? 'red' : 'grey', cursor: 'pointer' }} onClick={toggleLike} />
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