import React from 'react'
import { PlansInfo, NavBar } from '../Components'

export default function AddOns() {
  return (
    <section className='bg-light-blue relative h-screen sm:flex sm:flex-row sm:bg-white
    sm:justify-center sm:items-center sm:content-center sm:pl-5 sm:h-max sm:rounded-xl lg:space-x-10
    lg:pl-3'>
        <NavBar plans={true} />
        <PlansInfo />
    </section>

  )
}