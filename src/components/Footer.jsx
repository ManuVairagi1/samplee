import React from 'react'
import '../styles/footer.css';
import image from '../images/imgg.jpg';
import email from '../images/email.png';
import msge from '../images/msge.png';
import instagram from '../images/instagram.jpg';
import '../scripts/script.js';

export default function Footer() {
  return (
    <footer className='footer-section'>
      <div className='contact-info'>
        <h1>
          Contact Info
        </h1>
        <hr />
        <div>
          <div><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-call-web-store-flaticons-lineal-color-flat-icons.png" /></div>
          <div>
            <p>MON TO FRI : 10:00AM - 06:00PM</p>
            <p>+123 54214 578 52</p>
          </div>
        </div>
        <div>
          <div><img src={email} /></div>
          <div>
            <p>DO YOU HAVE A QUESTION?</p>
            <p>example@taiker.com</p>
          </div>
        </div>
        <div>
          <div><img src={msge} /></div>
          <div>
            <p>SOCIALS NETWORK</p>
            <p className='social-icons-container'>
            <img className='social-icons' src={instagram} />
            <img className='social-icons' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-call-web-store-flaticons-lineal-color-flat-icons.png" />
            <img className='social-icons' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-call-web-store-flaticons-lineal-color-flat-icons.png" />
            <img className='social-icons' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-call-web-store-flaticons-lineal-color-flat-icons.png" />
            </p>
          </div>
        </div>
      </div>
      <div className='quick-links'>
        <h1>
          Quick Links
        </h1>
        <hr />
        <div>
          <a href="">Home</a>
          <a href="">About</a>
        </div>
        <div>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <div>
          <a href="">Agency</a>
          <a href="">Digital</a>
        </div>
        <div>
          <a href="">Support</a>
          <a href="">Shop</a>
        </div>
        <div>
          <a href="">Digital</a>
          <a href="">Support</a>
        </div>
        <div>
          <a href="">Digital</a>
          <a href="">Support</a>
        </div>
        <div>
          <a href="">Digital</a>
          <a href="">Support</a>
        </div>
      </div>
      <div className='instagram'>
        <h1>Instagram</h1>
        <hr />
        <div>
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </div>
    </footer>
  )
}