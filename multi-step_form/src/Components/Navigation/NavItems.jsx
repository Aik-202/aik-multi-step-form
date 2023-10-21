import React from 'react'
import { nav } from '../../Data/demo'

export default function NavItems() {
  return (
    <div className='hidden lg:flex'>
      {nav.map((items) => { return <div key={items.list}>
          <h2>{items.item.step}</h2>
          <h2>{items.item.text}</h2>
        </div>
      })}
    </div>
  )
}