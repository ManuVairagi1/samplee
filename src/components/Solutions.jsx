// import React from 'react'
// import featureimg from './featureimg.png';
// import Image from '../../components/Image'
// const Solutions = () => {
//   return (
//     <div>
//       <div className='container flex md:items-center m-auto pt-24 mx-30 '>

//         <div className='left ml-28  w-1/3'>
//           <img className='' src="https://taiker-react.envytheme.com/_next/static/images/feature-image1-3087fdec90a3804d7c774d093a49ce69.png" alt="Logo" />
//         </div>

//         <div className='right px-16 mx-3 w-1/2'>
//           <div className='mx-30'>
//             <h4 className='text-custom-blue-h2 font-semibold py-4'>OUR FEATURES</h4>
//             <h1 className='text-5xl font-medium pb-8'>Creative solutions to improve your business!</h1>
//             <p className='text-paragraph font-bold pb-8 text-base'>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

//           </div>
//           <div className=''>
//             <div className='my-4 '>
//             <ul className='text-base font-semibold flex flex-nowrap'>
//                 <li className='py-2 mx-4 bg-custom-blue-a rounded text-white px-2'>Recommender systems</li>
//                 <li className='px-2 mx-4 py-2 bg-custom-blue-a rounded text-white'>Demand prediction</li>
//               </ul>
//               <ul className='text-base font-semibold flex flex-nowrap'>
//                 <li className='py-2 px-2 mx-4 bg-custom-blue-a rounded text-white my-4'>Omnichannel analytics</li>
//                 <li className='px-2 py-2 mx-4 bg-custom-blue-a rounded text-white my-4'>Lead generation</li>
//               </ul>
//               <ul className='text-base font-semibold flex flex-nowrap'>
//                 <li className='py-2 px-2 bg-custom-blue-a rounded text-white mx-4'>Dedicated Developers</li>
//                 <li className='px-4 py-2 bg-custom-blue-a rounded text-white mx-4'>24/7 Support</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Solutions

import React from 'react';
import '../styles/solutions.css';

export default function Solutions() {
  return (
    <section className='solutions-sec'>
      <h1>Our Features</h1>
      <hr />
      <div className='my-grid'>
        <div>
        <img className='' src="https://taiker-react.envytheme.com/_next/static/images/feature-image1-3087fdec90a3804d7c774d093a49ce69.png" alt="Logo" />
        </div>
        <div>
          <p>Creative solutions to improve your business!</p>
          <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
          <div className="buttons">
            <div>
              <button><i className='fa fa-check'></i> Button</button>
              <button><i className='fa fa-check'></i> Button</button>
            </div>
            <div>
              <button><i className='fa fa-check'></i> Button</button>
              <button><i className='fa fa-check'></i> Button</button>
            </div>
            <div>
              <button><i className='fa fa-check'></i> Button</button>
              <button><i className='fa fa-check'></i> Button</button>
            </div>
            <div>
              <button><i className='fa fa-check'></i> Button</button>
              <button><i className='fa fa-check'></i> Button</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
