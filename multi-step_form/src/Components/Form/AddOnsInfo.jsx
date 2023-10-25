import React from 'react'
import { FormHeaders } from '../'
import { useNavigate } from 'react-router-dom'
import { addons } from '../../Data/demo';

export default function AddOnsInfo() {
  const navigate = useNavigate();
  const [addonActive, setAddonActive] = React.useState('');

  const changeAddon = (e) => {
    if (e.target.id == "Online service") {
      setAddonActive('Online service');
    }
    if (e.target.id == "Larger storage") {
      setAddonActive('Larger storage');
    }
    if (e.target.id == "Customizable profile") {
      setAddonActive('Customizable profile');
    }
  }

  const forward = () => {
    navigate('/finished')
  }

  const back = () => {
    navigate('/plans');
  }

  return (
    <section className='w-max lg:w-[30rem]'>
      <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
      absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
         <FormHeaders personal={false} plans={false} addons={true} finished={false}/>
         {addons.map((item) => {return <div className={`flex flex-row space-x-3
         border-[1px] rounded-lg px-3 py-4 
          ${addonActive == "Online service" && item.header == "Online service" ? 'bg-light-blue bg-opacity-[20%] border-t-marine border-purplish': 
          addonActive == "Larger storage" && item.header == "Larger storage" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
          addonActive == "Customizable profile" && item.header == "Customizable profile" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
          'bg-transparent border-light-gray border-t-light-gray'
          }`} onClick={changeAddon} key={item.header}>
          <input type="checkbox" id={item.header} className='w-[8%] text-center' />
          <div className='flex flex-col space-y-0'>
            <label htmlFor={item.header} className='text-sm text-marine font-bold tracking-wide'>
            {item.header}</label>
            <p className='text-[0.65rem] w-[10rem] xl:w-[15rem]'>{item.text}</p>
          </div>
          <p className='self-center text-sm text-purplish'>{item.month}</p>
         </div>})}
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