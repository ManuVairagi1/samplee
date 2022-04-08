import React from 'react'
import '../styles/features.css';

export default function services() {
  return (
    <section className='my-section'>
        <h1>IT Services</h1>
        <hr />
        <p>Home -- IT Services</p>
        <div>
          <div>
          <img className='' src="https://taiker-react.envytheme.com/_next/static/images/feature-image1-3087fdec90a3804d7c774d093a49ce69.png" alt="Logo" />
          </div>
          <div>
            <h4>Our Features</h4>
            <h1>Creative solutions to improve your business!</h1>
            <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
            <ul>
              
              <li><i className='fa fa-check'></i> Recommender systems</li>
              <li><i className='fa fa-check'></i> Demand prediction</li>
              <li><i className='fa fa-check'></i> Omnichannel analytics</li>
              <li><i className='fa fa-check'></i> Lead generation</li>
              <li><i className='fa fa-check'></i> Dedicated Developers</li>
              <li><i className='fa fa-check'></i> 24/7 Support</li>

            </ul>
          </div>
        </div>
    </section>
  )
}
