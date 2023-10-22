import React from 'react'
import { AddOnsInfo, NavBar, FormHeaders } from '../Components'

export default function AddOns() {
  return (
    <section className='bg-light-blue relative h-full sm:flex sm:flex-row sm:bg-white
    sm:justify-center sm:items-center sm:content-center sm:pl-5 sm:h-max sm:rounded-xl'>
        <NavBar addons={true}/>
        <FormHeaders personal={false} plans={false} addons={true} finished={false}/>
        <AddOnsInfo />
    </section>

  )
}