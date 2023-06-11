import React from 'react'
import Single from '../assets/single.png'


const Cards = (props) => {
  return (
    <div className='bg-white py-[10rem] w-full' >
      <div className='flex shadow-inner max-w-[1240px] mx-auto gap-3'>
        <div className=' border box-border shadow-md hover:shadow-2xl px-28 py-12 rounded-lg'>
          <img src={Single} alt="" className='object-contain w-28 mx-auto mt-[-3rem]' />
          <h1 className=' text-4xl border-t border-b'>Single User</h1>
          <h2 className='text-3xl text-center py-4'>$149</h2>
          <p className='text-center border-t border-b'>500GB Storage</p>
          <p className='text-center border-t border-b'>1 User Allowed</p>
          <p className='text-center border-t border-b'>Send up to 2GB</p>
        </div>
      </div>
    </div>
  )
}

export default Cards