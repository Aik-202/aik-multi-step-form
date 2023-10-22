import React from 'react'
import { FinishedInfo, NavBar, FormHeaders } from '../Components'

export default function Finished() {
  return (
    <section className='bg-light-blue relative h-full sm:flex sm:flex-row sm:bg-white
    sm:justify-center sm:items-center sm:content-center sm:pl-5 sm:h-max sm:rounded-xl'>
        <NavBar finished={true}/>
        <FormHeaders personal={false} plans={false} addons={false} finished={true}/>
        <FinishedInfo />
    </section>

  )
}