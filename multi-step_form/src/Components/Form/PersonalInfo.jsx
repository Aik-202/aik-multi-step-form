import React from 'react'
import { FormHeaders } from '../'

export default function PersonalInfo() {
  return (
    <section>
      <div className='bg-white justify-center content-center px-5 absolute h-max top-24 right-0 left-0 py-5 mx-5 rounded-md'>
        <FormHeaders personal={true} plans={false} addons={false} finished={false}/>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder='e.g. Stephen King' id='name' className='border-[1px] 
          border-solid border-light-gray rounded-sm py-2 px-3' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="email">Email Address</label>
          <input type="email" placeholder='e.g. stephenking@lorem.com' id='email' className='border-[1px] 
          border-solid border-light-gray rounded-sm py-2 px-3' />
        </div>
        <div className='flex flex-col space-y-2'>
          <label htmlFor="phone-no">Phone Number</label>
          <input type="number" placeholder='e.g. +1 234 567 890' id='phone-no' className='border-[1px] 
          border-solid border-light-gray rounded-sm py-2 px-3' />
        </div>
      </div>
      <div className='flex flex-wrap items-end content-end justify-end bg-white py-5 pr-8 absolute bottom-0 right-0 left-0'>
        <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
        bg-marine'>Next Step</button>
      </div>
    </section>
  )
}