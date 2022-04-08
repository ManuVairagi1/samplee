import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="bg-custom-white">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 pt-24 pb-24">
            <div className="flex flex-col items-center justify-center w-auto">
                <h1 className="text-4xl font-bold text-center px-0 py-3">
                    <span className="text-custom-black-h2 bg-">
                    Features
                   </span>
                </h1>
                <div className="bg-custom-orange-line h-0.5 left-0 right-0 bottom-0 m-1 w-8"></div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-center px-0 py-3 inline-block">
                        <a className="text-custom-orange-a ">Home</a>
                        <a className="text-custom-orange-a "> &gt; </a>
                        <a className="text-custom-blue-a"> Features </a>
                    </p>
                </div>
        </div>
        </div>
       
    </div>
    </div>
  )
}

export default Header