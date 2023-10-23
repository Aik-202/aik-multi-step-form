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
    } flex flex-col lg:w-max`}>
      <h1 className={`text-marine text-2xl font-bold tracking-wider leading-10
      ${props.plans ? '-mt-3 sm:mt-auto':'mt-auto' }`}>{item.title}</h1>
      <p className='text-cool font-medium leading-6 lg:text-sm lg:w-full'>{item.info}</p>
    </div>})
  )
}