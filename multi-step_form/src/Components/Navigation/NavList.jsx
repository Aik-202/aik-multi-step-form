import React from 'react'
import { nav } from '../../Data/demo'

export default function NavList() {
  return (
    <ul className='flex flex-row justify-center flex-wrap items-center content-center w-full space-x-5'>
      {nav.map((item) => {return <li key={item.list} className='rounded-[100%] border-solid border-[1px] 
      border-white text-white px-3 py-1'>{item.list}</li> })}
    </ul>
  )
}