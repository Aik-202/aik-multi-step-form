import React from 'react'
import { FormHeaders } from '../'
import { plans } from '../../Data/demo'
import { useNavigate } from 'react-router-dom'

export default function PlansInfo() {
  const navigate = useNavigate();
  const [planActive, setPlanActive] = React.useState('Arcade');
  const [fee, setFee] = React.useState(true);

  const forward = () => {
    navigate('/addons')
  }
  
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

  const changeFee = () => {
    setFee((prev) => !prev)
  }

  return (
    <section>
        <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
        absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
          <FormHeaders personal={false} plans={true} addons={false} finished={false}/>
          <div className='flex flex-col space-y-3 sm:space-y-5'>
            <div className='flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3'>
              {plans.map((item) => {return <div key={item.text} id={item.text} className={`flex flex-row 
              space-x-3 border-[1px] rounded-lg px-3 py-3 sm:space-x-0 sm:flex-col sm:justify-start 
              sm:w-[6rem] lg:w-[8rem] lg:pr-12 cursor-pointer
              ${planActive == "Arcade" && item.text == "Arcade" ? 'bg-light-blue bg-opacity-[20%] border-t-marine border-purplish': 
              planActive == "Advanced" && item.text == "Advanced" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
              planActive == "Pro" && item.text == "Pro" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
              'bg-transparent border-light-gray border-t-light-gray'
              } `} onClick={changePlan}>
                <img src={item.img} className='self-start sm:mb-5 lg:mb-10'/>
                <h2 className='flex flex-col space-y-[0.09rem]'>
                  <span className='text-base font-bold tracking-tight text-marine'>{item.text}</span>
                  <span className='text-xs font-medium tracking-tight text-light-gray'>
                  {fee ? item.month : item.year}</span>
                  <span className='text-xs font-medium text-marine tracking-tight 
                  sm:hidden'>2 months free</span>
                </h2>
              </div>})}
            </div>
            <div className='flex flex-row space-x-5 justify-center bg-magnolia bg-opacity-[40%] 
            py-3 rounded-lg'>
              <h2 className={`font-bold ${fee ? 'text-marine': 'text-light-gray'}`}>Monthly</h2>
              <button className='bg-marine border-[1px] border-transparent px-5 py-2 rounded-xl 
              relative' onClick={changeFee}>
                <span className={`rounded-[100%] border-[1px] border-transparent bg-white px-[0.3rem] py-[0.3rem]
                absolute top-[5px] 
                ${fee ? 'left-1' : 'right-1'}`}></span>
              </button>
              <h2 className={`font-bold ${fee ? 'text-light-gray' : 'text-marine'}`}>Yearly</h2>
            </div>
          </div>
        </div>
        <div className='flex justify-between bg-white 
        py-5 px-8 absolute bottom-0 right-0 left-0 sm:static sm:pr-10 sm:pl-12 md:pr-16 sm:rounded-xl lg:mt-10'>
          <button className='text-cool font-medium' onClick={back}>Go Back</button>
          <button className='border-[1px] border-solid border-transparent rounded-md px-3 py-2 text-white 
        bg-marine' onClick={forward}>Next Step</button>
        </div>
    </section>
  )
}