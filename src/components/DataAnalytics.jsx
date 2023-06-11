import React from 'react'
import Laptop from '../assets/laptop.jpeg'

const DataAnalytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='grid md:grid-cols-2 bg-white max-w-[1240px] mx-auto'>
            <img src={Laptop} alt="Laptop" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col bg-white md:py-36'>
                <p className='text-[#00df9a] font-bold bg-white'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <button className='text-[#00df9a] bg-black rounded-lg mx-auto my-6 w-[150px] h-[50px]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default DataAnalytics