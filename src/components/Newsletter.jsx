import React from 'react';
import '../styles/newsletter.css';
import img from '../images/email-receive.jpg';

export default function Newsletter() {
    return (
        <>
            <div className='email-img-div'>
                <img src={img} alt="" />
            </div>
            <div className='email-div'>
                <p>Newsletter</p>
                <p>Stay up to date with our latest news and products</p>
                <div>
                    <input type="email" placeholder='Your email address'/>
                    <button>SUBSCRIBE</button>
                </div>
                <p className='email-info'>Your email is safe with us, we don't spam.</p>
            </div>
        </>
    )
}
