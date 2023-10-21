import React from 'react'
import { NavItems, NavList } from '../'

export default function NavBar(props) {
  return (
   <nav className='flex bg-mobile bg-cover bg-no-repeat bg-[100%] pt-6 pb-28'>
        <NavList personal={props.personal} plans={props.plans} addons={props.addons} finished={props.finished}/>
        <NavItems />
   </nav>
  )
}
