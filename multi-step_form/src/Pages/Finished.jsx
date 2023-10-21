import React from 'react'
import { FinishedInfo, NavBar, FormHeaders } from '../Components'

export default function Finished() {
  return (
    <section>
        <NavBar finished={true}/>
        <FormHeaders personal={false} plans={false} addons={false} finished={true}/>
        <FinishedInfo />
    </section>

  )
}