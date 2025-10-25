import React from 'react'
import { NavLink } from 'react-router-dom';
// import Products from './Products';
import Product_search from '../components/Product_search';
import ProductList from '../components/Productlists';
import Products from '../components/Products';

function Home() {
    return (
        
        <div>
            <section id='slides'>
                <div
                    id="mycarousel"
                    className="carousel slide carousel-dark"
                    data-bs-ride="carousel"
                    data-bs-interval="3000"
                >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#mycarousel" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="https://hespokestyle.com/wp-content/uploads/2024/06/casual-clothes-for-men-dressing-down-guide.jpg"
                                className="d-block h-full w-100 content-center"
                                alt="slide 1"
                                style={{ height: "100vh" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1461552909-65775e9c51e7a.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*"
                                className="d-block w-100 h-full object-cover"
                                alt="slide 2"
                                style={{ height: "100vh" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://sfycdn.speedsize.com/2780c694-3419-4266-9652-d242439affeb/https://stateandliberty.com/cdn/shop/files/S_L_NavyTux.jpg"
                                className="d-block w-100 h-full object-cover"
                                alt="slide 3"
                                style={{ height: "100vh" }}
                            />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#mycarousel">
                        <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#mycarousel">
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>
            <section>
                <div className=' mx-30'>
                    <h1 className=' p-6'>Treading 🔥🔥🔥</h1>
                <Products/>
                <h1 className=' p-6'>Tops Choose for Sports</h1>
                <Products />
                </div>
            </section>
        </div>

    );
}

export default Home
