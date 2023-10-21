import React from 'react'
import { PlansInfo, NavBar, FormHeaders } from '../Components'

export default function AddOns() {
  return (
    <section>
        <NavBar />
        <FormHeaders personal={false} plans={true} addons={false} finished={false}/>
        <PlansInfo />
    </section>

  )
}