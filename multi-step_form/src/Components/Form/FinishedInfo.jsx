import React from 'react'
import { FormHeaders } from '../'
import { useNavigate } from 'react-router-dom'

export default function FinishedInfo() {
  const navigate = useNavigate();
  
  const back = () => {
    navigate('/addons');
  }
  return (
    <section className='w-max lg:w-[30rem]'>
      <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
      absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
        <FormHeaders personal={false} plans={false} addons={false} finished={true}/>
        <div>
          <div>
            <div>
              <h2>Arcade (Monthly)</h2>
              <button>Change</button>
            </div>
            <p>$9/mo</p>
          </div>
          <div>
            <h2>Online Service</h2>
            <p>+$1/mo</p>
          </div>
          <div>
            <h2>Large storage</h2>
            <p>+$2/mo</p>
          </div>
        </div>
        <div>
          <h2>Total (per month)</h2>
          <p>+$12/mo</p>
        </div>
      </div>
      <div className='flex justify-between bg-white 
      py-5 px-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 sm:pl-12 md:pr-16 sm:rounded-xl lg:mt-10'>
        <button className='text-cool font-medium' onClick={back}>Go Back</button>
        <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
      bg-purplish' >Confirm</button>
      </div>
    </section>
  )
}