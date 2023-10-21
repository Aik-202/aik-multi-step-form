import React from 'react'
import { form } from '../../Data/demo'

export default function FormHeaders(props) {
  return (
    form.map((item) => {return <div key={item.id} 
    className={`
    ${
      props.personal && item.id == 1 ? 'flex' :
      props.plans && item.id == 2 ? 'flex' :
      props.addons && item.id == 3 ? 'flex' :
      props.finished && item.id == 4 ? 'flex' : 'hidden'
    } flex flex-col`}>
      <h1>{item.title}</h1>
      <p>{item.info}</p>
    </div>})
  )
}