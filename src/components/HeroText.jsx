import React from 'react'
import Typed from 'react-typed'



const HeroText = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with Data.</h1>
            <p className='md:text-4xl sm:text-3xl text-xl'>Fast, Flexible Financing for &nbsp;
            <Typed strings={['BTB', 'SaaS', 'D2C']} 
              typeSpeed={200}
              backSpeed={200}
              backDelay={10}
              loop
              className='text-gray-500'
              />
              
            </p>
            <div>
              <p className='mt-4 text-gray-500 text-xl md:text-2xl font-bold'>Monitor your data analytics to increase revenue for BTB, BTC, and SASS platforms.</p>
              
            </div>
            <button className='rounded-md bg-[#00df9a] w-[200px] font-medium mx-auto my-6 py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default HeroText