import React from 'react'
import { AddOnsInfo, NavBar, FormHeaders } from '../Components'

export default function AddOns() {
  return (
    <section>
        <NavBar />
        <FormHeaders personal={false} plans={false} addons={true} finished={false}/>
        <AddOnsInfo />
    </section>

  )
}