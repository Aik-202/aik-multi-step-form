import React from 'react'
import { NavItems, NavList } from '../'

export default function NavBar(props) {
  return (
   <nav className={`flex bg-mobile sm:bg-desktop bg-cover bg-no-repeat bg-[100%] pt-6 pb-28
   sm:flex-row sm:space-x-3 sm:pl-5 sm:pr-0 sm:rounded-xl lg:pr-16 
   ${props.personal || props.addons ? 'sm:pb-44 lg:pb-44' : 'lg:pb-36'}
   ${props.addons ? 'sm:w-[50%] lg:w-[31%] sm:pb-40' : 'sm:w-[50%]'}
   ${props.finished ? 'sm:w-[40%] lg:w-[35%] sm:pb-32' : 'sm:w-[50%]'}`}> 
        <NavList personal={props.personal} plans={props.plans} addons={props.addons} finished={props.finished}/>
        <NavItems />
   </nav>
  )
}
