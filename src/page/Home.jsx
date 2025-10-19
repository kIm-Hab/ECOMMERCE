import React from 'react'
import { NavLink } from 'react-router-dom';
import Products from './Products';

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
            <section id='men&women'>
                <div className=' flex justify-center gap-10 p-4'>
                    <div>
                        <img
                            src="./src/image/Male.jpg"
                            alt=""
                            className=' rounded' />
                        <NavLink
                            to="/Men"
                            className=" flex justify-center text-decoration-none">
                            <button
                                type="button"
                                className=' border-2 rounded w-[250px] mt-2 border-black text-black hover:bg-blue-500 transition duration-500'
                            >Men</button>
                        </NavLink>
                    </div>
                    <div>
                        <img
                            src="./src/image/Female.jpg"
                            alt="" className=' rounded' />
                        <NavLink
                            to="/Women"
                            className=" flex justify-center text-decoration-none">
                            <button
                                type="button"
                                className=' border-2 rounded w-[250px] mt-2 border-black text-black hover:bg-pink-500 hover:text-white hover:border-pink-500 transition duration-500'>Women</button>
                        </NavLink>
                    </div>
                </div>
            </section>
            <section>
                <h1 className=' p-6'>Men Section</h1>
                <Products />
                <h1 className=' p-6'>Women Section</h1>
                <Products />
            </section>
        </div>

    );
}

export default Home
