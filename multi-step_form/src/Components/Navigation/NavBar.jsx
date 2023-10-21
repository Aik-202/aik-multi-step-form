import React from 'react'
import { NavItems, NavList } from '../'

export default function NavBar() {
  return (
   <nav className='flex bg-mobile bg-cover bg-no-repeat bg-[100%] pt-6 pb-28'>
        <NavList />
        <NavItems />
   </nav>
  )
}
