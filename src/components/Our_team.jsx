import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../styles/our_team.css';
import team_member from '../images/team_member.jpg';
import instagram from '../images/instagram.jpg';

export default class Responsive extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="our-team">
                <h2>Our Team</h2>
                <h2>Our Expert Team</h2>
                <Slider {...settings}>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <span><img src={team_member} alt="" /></span>
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                    <div className="member-box">
                        <div className="first-div">
                            <div className="post">
                                <img src={team_member} alt="" />
                                <div className="post-s">
                                    <h2>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Some Member</p>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}