import React from 'react'
import { NavItems, NavList } from '../'

export default function NavBar(props) {
  return (
   <nav className='flex bg-mobile sm:bg-desktop bg-cover bg-no-repeat bg-[100%] pt-6 pb-28 sm:w-[50%]
   sm:flex-row sm:space-x-3 sm:pl-5 sm:rounded-xl sm:pr-16'> 
        <NavList personal={props.personal} plans={props.plans} addons={props.addons} finished={props.finished}/>
        <NavItems />
   </nav>
  )
}
