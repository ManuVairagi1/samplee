import React from 'react'

const Experience = () => {
  return (
    <>
    <div>
      <div className=' container-fluid flex m-auto pt-24 mx-30 '>

        <div className='right  px-16 mx-3 w-1/2'>
          <div className='mx-30'>
            <h4 className='text-custom-blue-h2 font-semibold py-4'>Define Your Choices</h4>
            <h1 className='text-5xl font-medium pb-8'>User Experience</h1>
            <p className='text-paragraph font-bold pb-8 text-base'> We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>

            <div className='my-4 '>

              <ul className='text-base font-semibold flex flex-nowrap'>
                <li className='py-2 mx-4 bg-custom-blue-a rounded text-white px-2'>Open Source</li>
                <li className='px-2 mx-4 py-2 bg-custom-blue-a rounded text-white'>Optimal Choice</li>
              </ul>
              <ul className='text-base font-semibold  flex flex-nowrap'>
                <li className='py-2 px-2 mx-4 bg-custom-blue-a rounded text-white my-4'>High Security</li>
                <li className='px-2 py-2 mx-4 bg-custom-blue-a rounded text-white my-4'>Great Advices</li>
              </ul>
              <ul className='text-base font-semibold  flex flex-nowrap'>
                <li className='py-2 px-2 bg-custom-blue-a rounded text-white mx-4'>Creative Layout</li>
                <li className='px-4 py-2 bg-custom-blue-a rounded text-white mx-4 '>Super Responsive</li>
              </ul>
            </div>

          </div>

        </div>

        <div className='left ml-28 w-1/3'>
          <img className='' src="https://taiker-react.envytheme.com/_next/static/images/feature-image1-3087fdec90a3804d7c774d093a49ce69.png" alt="Logo" />
        </div>

      </div>
    </div>
    </>
  )
}

export default Experience