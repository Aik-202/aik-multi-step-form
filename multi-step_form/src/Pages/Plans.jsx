import React from 'react'
import { PlansInfo, NavBar, FormHeaders } from '../Components'

export default function AddOns() {
  return (
    <section className='bg-light-blue relative h-full sm:flex sm:flex-row sm:bg-white
    sm:justify-center sm:items-center sm:content-center sm:pl-5 sm:h-max sm:rounded-xl'>
        <NavBar plans={true} />
        <FormHeaders personal={false} plans={true} addons={false} finished={false}/>
        <PlansInfo />
    </section>

  )
}