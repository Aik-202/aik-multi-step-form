import React from 'react'
import { FormHeaders } from '../'
import { plans } from '../../Data/demo'

export default function PlansInfo() {
  return (
    <section>
        <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
        absolute h-max top-24 right-0 left-0 py-5 mx-5 rounded-md sm:static md:mr-10'>
          <FormHeaders personal={false} plans={true} addons={false} finished={false}/>
          <div>
            {plans.map((item) => {return <div key={item.text}>
              <img src={item.img}/>
              <h2>
                <span>{item.text}</span>
                <span>{item.fee}</span>
              </h2>
            </div>})}
            <div>
              <h2>Monthly</h2>
              <button className='bg-marine border-[1px] border-transparent px-5 py-2 rounded-xl relative'>
                <span className='rounded-[100%] border-[1px] border-transparent bg-white px-[0.3rem] py-[0.3rem]
                absolute top-[2px] left-1'></span>
              </button>
              <h2>Yearly</h2>
            </div>
          </div>
        </div>
        <div className='flex justify-between bg-white 
        py-5 px-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 md:pr-16 sm:rounded-xl'>
          <button className='text-cool font-medium'>Go Back</button>
          <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
        bg-marine'>Next Step</button>
        </div>
    </section>
  )
}