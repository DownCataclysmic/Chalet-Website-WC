import React from 'react'
import Hero from '../components/Hero'

const about = () => {
  return (
    <div className="items-center">
      <Hero heading='About Us' message="If you don't like it then tough..."/>
      <h1 className='text-4xl font-bold text-center p-4'>About Us</h1>
      <p className="text-lg text-gray-600 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tincidunt turpis. Vestibulum lacinia
        ligula et commodo viverra. Proin quis maximus orci.
      </p>
      <div>
        <img
          src="/about-image.jpg"
          alt="About Us"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default about