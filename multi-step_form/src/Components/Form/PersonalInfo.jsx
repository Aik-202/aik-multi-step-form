import React from 'react'
import { FormHeaders } from '../'
import { useNavigate } from 'react-router-dom'

export default function PersonalInfo() {
  const navigate = useNavigate();

  const forward = () => {
    navigate('/plans')
  }

  return (
    <section>
      <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
      absolute h-max top-24 right-0 left-0 py-5 mx-5 rounded-md sm:static md:mr-10 sm:mt-8 lg:pr-10'>
        <FormHeaders personal={true} plans={false} addons={false} finished={false}/>
        <div className='flex flex-col space-y-1'>
          <label htmlFor="name" className='text-marine font-medium tracking-tight text-sm'>Name</label>
          <input type="text" placeholder='e.g. Stephen King' id='name' className='border-[1px] 
          border-solid border-light-gray rounded-md py-2 px-3' />
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor="email" className='text-marine font-medium tracking-tight text-sm'>Email Address</label>
          <input type="email" placeholder='e.g. stephenking@lorem.com' id='email' className='border-[1px] 
          border-solid border-light-gray rounded-md py-2 px-3' />
        </div>
        <div className='flex flex-col space-y-1'>
          <label htmlFor="phone-no" className='text-marine font-medium tracking-tight text-sm'>Phone Number</label>
          <input type="number" placeholder='e.g. +1 234 567 890' id='phone-no' className='border-[1px] 
          border-solid border-light-gray rounded-md py-2 px-3' />
        </div>
      </div>
      <div className='flex flex-wrap items-end content-end justify-end bg-white 
      py-5 pr-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 md:pr-16 sm:rounded-xl lg:mt-10'>
        <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
        bg-marine' onClick={forward}>Next Step</button>
      </div>
    </section>
  )
}