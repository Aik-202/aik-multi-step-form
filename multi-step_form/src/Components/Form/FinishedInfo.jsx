import React from 'react'
import { FormHeaders } from '../'
import { useNavigate } from 'react-router-dom'

export default function FinishedInfo() {
  const navigate = useNavigate();
  
  const back = () => {
    navigate('/addons');
  }

  const forward = () => {
    navigate('/thanks');
  }

  return (
    <section className='lg:w-[31rem] xl:w-[33rem]'>
      <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
      absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
        <FormHeaders personal={false} plans={false} addons={false} finished={true}/>
        <div className='bg-light-blue bg-opacity-[20%] flex flex-col space-y-3 px-3 py-5 rounded-lg'>
          <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col'>
              <h2 className='text-marine font-bold tracking-wide'>Arcade (Monthly)</h2>
              <button className='text-cool font-medium underline self-start'>Change</button>
            </div>
            <p className='text-marine font-bold tracking-wide'>$9/mo</p>
          </div>
          <hr />
          <div className='flex flex-row justify-between w-full'>
            <h2 className='text-cool font-medium'>Online Service</h2>
            <p className='text-marine font-medium tracking-wide'>+$1/mo</p>
          </div>
          <div className='flex flex-row justify-between w-full'>
            <h2 className='text-cool font-medium'>Large storage</h2>
            <p className='text-marine font-medium tracking-wide'>+$2/mo</p>
          </div>
        </div>
        <div className='flex flex-row justify-between w-full px-3'>
          <h2 className='text-cool font-medium'>Total (per month)</h2>
          <p className='text-purplish font-bold tracking-wide'>+$12/mo</p>
        </div>
      </div>
      <div className='flex justify-between bg-white 
      py-5 px-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 sm:pl-12 md:pr-16 sm:rounded-xl 
      lg:mt-20'>
        <button className='text-cool font-medium' onClick={back}>Go Back</button>
        <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
      bg-purplish' onClick={forward}>Confirm</button>
      </div>
    </section>
  )
}