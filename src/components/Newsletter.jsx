import React from 'react'

const Newsletter = () => {
  return (
    <div className='bg-black text-white py-16 w-full px-4'>
        <div className='grid lg:grid-cols-3 max-w-[1240px] mx-auto'>
            <div className='lg:col-span-2'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-xl'>Want tips & tricks to optimize your workflow?</h1>
                <p className='py-4'>Sign up for the newsletter and stay up to date.</p>
            </div>
            <div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <input className='text-black rounded-md w-full h-[40px] p-3 flex ' type="text" placeholder='Enter your email' />
                <button className='text-black bg-[#00df9a] font-medium rounded-md mx-auto my-6 w-[180px] h-[40px] ml-4 px-6 py-3'>Notify me</button>
                
                </div>
                <p>We care about the protection of your data. Read our&nbsp;
                        <a className='underline text-[#00df9a]' target="__blank" href='https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement'>Privacy Policy</a>
                        
                    </p>
            </div>
            
        </div>
    </div>
  )
}

export default Newsletter