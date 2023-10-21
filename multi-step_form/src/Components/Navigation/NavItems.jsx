import React from 'react'
import { nav } from '../../Data/demo'

export default function NavItems() {
  return (
    <div className='hidden sm:flex sm:flex-col sm:space-y-[2.9rem] sm:justify-start sm:items-start 
    sm:content-start'>
      {nav.map((items) => { return <div key={items.list}>
          <h2 className='uppercase text-cool text-xs'>{items.item.step}</h2>
          <h2 className='uppercase text-white text-sm'>{items.item.text}</h2>
        </div>
      })}
    </div>
  )
}