import React from 'react'
import { PersonalInfo, NavBar } from '../Components'

export default function Personal() {
  return (
    <section className='bg-light-blue relative h-full sm:flex sm:flex-row sm:bg-white
    sm:justify-center sm:items-center sm:content-center sm:pl-5 sm:h-max sm:rounded-xl'>
        <NavBar personal={true} />
        <PersonalInfo />
    </section>

  )
}