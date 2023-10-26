import React from 'react'
import { NavItems, NavList } from '../'

export default function NavBar(props) {
  return (
   <nav className={`flex bg-mobile sm:bg-desktop bg-cover bg-no-repeat bg-[100%] pt-6 pb-28
   sm:flex-row sm:space-x-3 sm:pl-5 sm:pr-0 sm:rounded-xl lg:pr-16 
   ${props.personal ? 'sm:pb-44 lg:pb-44 lg:w-[30%]' : 'lg:pb-36'}
   ${props.plans ? 'lg:w-[30%] lg:pb-44' : 'sm:w-[38%]'}
   ${props.addons ? 'sm:w-[38%] lg:w-[31%] sm:pb-40 lg:pb-44' : 'sm:w-[50%] lg:pb-36'}
   ${props.finished ? 'sm:w-[38%] lg:w-[32%] xl:w-[30%] sm:pb-32 lg:pb-44' : 'sm:w-[50%]'}`}> 
        <NavList personal={props.personal} plans={props.plans} addons={props.addons} finished={props.finished}/>
        <NavItems />
   </nav>
  )
}
