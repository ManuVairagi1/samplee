import React from 'react';
import web from "../images/Rocket-bro.svg";
import '../styles/home.css';

const Home =() =>{
return (
    <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col-10 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h5> Welcome!</h5>
                            <h1> Grow your business with <strong className="brand-name">Orinova</strong>!</h1>
                            <h3 className="my-3">We are the team of talented professionals making Web-sites</h3>
                            <div className="mt-3">
                                <a href="" className="btn-get-started"> GET STARTED</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={web} className="img-fluid animated" alt="home img" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);
};

export default Home;