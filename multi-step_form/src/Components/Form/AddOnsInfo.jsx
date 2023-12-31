import React from 'react'
import { FormHeaders } from '../'
import { useNavigate } from 'react-router-dom'
import { addons } from '../../Data/demo';

export default function AddOnsInfo() {
  const navigate = useNavigate();
  const [addonActive1, setAddonActive1] = React.useState(false);
  const [addonActive2, setAddonActive2] = React.useState(false);
  const [addonActive3, setAddonActive3] = React.useState(false);


  const checkAddon = (e) => {
    if (e.target.id == "Online service" && e.target.checked) {
      setAddonActive1(true);
    } else  if (e.target.id == "Online service" && !e.target.checked){
      setAddonActive1(false)
    } 
    if (e.target.id == "Larger storage" && e.target.checked) {
      setAddonActive2(true);
    } else if (e.target.id == "Larger storage" && !e.target.checked) {
      setAddonActive2(false)
    }
    if (e.target.id == "Customizable profile" && e.target.checked) {
      setAddonActive3(true);
    } else  if (e.target.id == "Customizable profile" && !e.target.checked){
      setAddonActive3(false)
    }
  }

  const forward = () => {
    navigate('/finished')
  }

  const back = () => {
    navigate('/plans');
  }

  return (
    <section className='w-max sm:py-2 sm:w-[28rem] lg:py-0 lg:w-[32rem] xl:w-[33rem]'>
      <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
      absolute h-max top-24 right-0 left-0 py-4 mx-5 rounded-md sm:static md:mr-10'>
         <FormHeaders personal={false} plans={false} addons={true} finished={false}/>
         {addons.map((item) => {return <div className={`flex flex-row space-x-3
         border-[1px] rounded-lg px-3 py-4 
          ${addonActive1 && item.header == "Online service" ? 'bg-light-blue bg-opacity-[20%] border-t-marine border-purplish': 
          addonActive2 && item.header == "Larger storage" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
          addonActive3 && item.header == "Customizable profile" ? 'bg-light-blue  bg-opacity-[20%] border-t-marine border-purplish': 
          'bg-transparent border-light-gray border-t-light-gray'
          }`} onClick={checkAddon} key={item.header}>
          <input type="checkbox" id={item.header} className='self-center xl:self-auto xl:w-[9%]' />
          <div className='flex flex-col space-y-0 self-center justify-between w-full'>
            <label htmlFor={item.header} className='text-sm text-marine font-bold tracking-wide'>
            {item.header}</label>
            <p className='text-[0.65rem]'>{item.text}</p>
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