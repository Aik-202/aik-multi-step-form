import React from 'react'
import { FormHeaders } from '../'
import { useNavigate } from 'react-router-dom'
import { addons } from '../../Data/demo';

export default function AddOnsInfo() {
  const navigate = useNavigate();

  const forward = () => {
    navigate('/finished')
  }

  const back = () => {
    navigate('/plans');
  }

  return (
    <section>
      <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
      absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
         <FormHeaders personal={false} plans={false} addons={true} finished={false}/>
         {addons.map((item) => {return <div className='flex flex-row space-x-3' key={item.header}>
          <input type="checkbox" id={item.header} className='w-[7.5%]' />
          <div className='flex flex-col space-y-0'>
            <label htmlFor={item.header}>{item.header}</label>
            <p>{item.text}</p>
          </div>
          <p className='content-end'>{item.month}</p>
         </div>})}
      </div>
      <div className='flex justify-between bg-white 
      py-5 px-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 md:pr-16 sm:rounded-xl lg:mt-10'>
        <button className='text-cool font-medium' onClick={back}>Go Back</button>
        <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
      bg-marine' onClick={forward}>Next Step</button>
      </div>
    </section>
  )
}