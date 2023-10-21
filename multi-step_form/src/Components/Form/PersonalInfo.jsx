import React from 'react'

export default function PersonalInfo() {
  return (
    <section>
      <div className='flex flex-col space-x-2'>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder='e.g. Stephen King' id='name' className='border-[1px] 
        border-solid border-light-gray rounded-sm py-2 px-3' />
      </div>
      <div className='flex flex-col space-x-2'>
        <label htmlFor="email">Email Address</label>
        <input type="email" placeholder='e.g. stephenking@lorem.com' id='email' className='border-[1px] 
        border-solid border-light-gray rounded-sm py-2 px-3' />
      </div>
      <div className='flex flex-col space-x-2'>
        <label htmlFor="phone-no">Phone Number</label>
        <input type="number" placeholder='e.g. +1 234 567 890' id='phone-no' className='border-[1px] 
        border-solid border-light-gray rounded-sm py-2 px-3' />
      </div>
      <div>
        <button>Next Step</button>
      </div>
    </section>
  )
}