import React from 'react'
import { FormHeaders } from '../'
import { plans } from '../../Data/demo'
import { useNavigate } from 'react-router-dom'

export default function PlansInfo() {
  const navigate = useNavigate();
  const [planActive, setPlanActive] = React.useState('Arcade');

  const back = () => {
    navigate('/');
  }

  const changePlan = (e) => {
    if (e.target.id == "Arcade") {
      setPlanActive('Arcade');
    }
    if (e.target.id == "Advanced") {
      setPlanActive('Advanced');
    }
    if (e.target.id == "Pro") {
      setPlanActive('Pro');
    }
  }

  return (
    <section>
        <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
        absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
          <FormHeaders personal={false} plans={true} addons={false} finished={false}/>
          <div className='flex flex-col space-y-3'>
            {plans.map((item) => {return <div key={item.text} id={item.text} className={`flex flex-row 
            space-x-3 border-[1px] rounded-lg px-3 py-3
            ${planActive == "Arcade" && item.text == "Arcade" ? 'bg-light-blue bg-opacity-[20%] border-t-marine border-purplish': 
            planActive == "Advanced" && item.text == "Advanced" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
            planActive == "Pro" && item.text == "Pro" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
            'bg-transparent border-light-gray border-t-light-gray'
            } `} onClick={changePlan}>
              <img src={item.img} className='self-start'/>
              <h2 className='flex flex-col space-y-[0.09rem]'>
                <span className='text-base font-bold tracking-tight text-marine'>{item.text}</span>
                <span className='text-xs font-medium tracking-tight text-light-gray'>{item.fee}</span>
                <span className='text-xs font-medium text-marine tracking-tight'>2 months free</span>
              </h2>
            </div>})}
            <div className='flex flex-row space-x-5 justify-center bg-magnolia py-3 rounded-lg'>
              <h2>Monthly</h2>
              <button className='bg-marine border-[1px] border-transparent px-5 py-2 rounded-xl relative'>
                <span className='rounded-[100%] border-[1px] border-transparent bg-white px-[0.3rem] py-[0.3rem]
                absolute top-[5px] left-1'></span>
              </button>
              <h2>Yearly</h2>
            </div>
          </div>
        </div>
        <div className='flex justify-between bg-white 
        py-5 px-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 md:pr-16 sm:rounded-xl'>
          <button className='text-cool font-medium' onClick={back}>Go Back</button>
          <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
        bg-marine'>Next Step</button>
        </div>
    </section>
  )
}