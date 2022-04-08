import React from 'react';
import web from "../images/Mobile user-rafiki.svg";
import '../styles/contact.css';

const Contact =() =>{
return (
    <>
        <div className='con_cont'>
        <section class="contact-area ptb-100 my-4"><div class="container"><div class="section-title"><span class="sub-title"><h3>Contact Us</h3></span><h2>Drop us Message for any Query</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div><div class="row align-items-center"><div class="col-lg-4 col-md-4"><div class="contact-image"><img src={web} className="img-fluid animated" alt="home img" /></div></div><div class="col-lg-8 col-md-8"><div class="contact-form"><form id="contactForm"><div class="row"><div class="col-lg-6 col-md-12"><div class="form-group"><input type="text" name="name" id="name" class="form-control my-3" placeholder="Name"/></div></div><div class="col-lg-6 col-md-12"><div class="form-group"><input type="email" name="email" id="email" class="form-control my-3" placeholder="Email"/></div></div><div class="col-lg-6 col-md-12"><div class="form-group"><input type="text" name="phone_number" id="phone_number" class="form-control my-3" placeholder="Phone"/></div></div><div class="col-lg-6 col-md-12"><div class="form-group"><input type="text" name="msg_subject" id="msg_subject" class="form-control my-3" placeholder="Subject"/></div></div><div class="col-lg-12 col-md-12"><div class="form-group"><textarea name="message" class="form-control my-3" id="message" rows="5" placeholder="Your Message"></textarea></div></div><div class="col-lg-12 col-md-12 text-center"><button type="submit" class="default-btn btn btn-outline-primary my-3">Send Message <span></span></button></div></div></form></div></div></div></div></section>
        </div>
    </>
);
};

export default Contact;