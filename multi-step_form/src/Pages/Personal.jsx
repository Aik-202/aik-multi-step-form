import React from 'react'
import { PersonalInfo, NavBar } from '../Components'

export default function Personal() {
  return (
    <section className='bg-light-blue relative h-full'>
        <NavBar personal={true} />
        <PersonalInfo />
    </section>

  )
}