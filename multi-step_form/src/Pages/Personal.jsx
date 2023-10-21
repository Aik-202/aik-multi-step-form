import React from 'react'
import { PersonalInfo, NavBar, FormHeaders } from '../Components'

export default function AddOns() {
  return (
    <section>
        <NavBar />
        <FormHeaders personal={true} plans={false} addons={false} finished={false}/>
        <PersonalInfo />
    </section>

  )
}