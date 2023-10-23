import React from 'react'
import { nav } from '../../Data/demo'
import { useNavigate } from 'react-router-dom'

export default function NavList(props) {
  const navigate = useNavigate();

  const next = (e) => {
    if(e.target.id == 1) {
      navigate('/')
    }
    if(e.target.id == 2) {
      navigate('/plans')
    }
    if(e.target.id == 3) {
      navigate('/addons')
    }
    if(e.target.id == 4) {
      navigate('/finished')
    }
  }
  return (
    <ul className='flex flex-row justify-center flex-wrap items-center content-center 
    w-full space-x-5 sm:space-x-0 sm:flex-col sm:justify-start sm:items-start 
    sm:content-start sm:space-y-12 sm:w-max select-none cursor-pointer'>
      {nav.map((item) => {return <li key={item.list} id={item.list} className={`
      ${props.personal && item.list == '1' ? 'bg-light-blue border-transparent text-marine font-semibold':
      props.plans && item.list == '2' ? 'bg-light-blue border-transparent text-marine font-semibold':
      props.addons && item.list == '3' ? 'bg-light-blue border-transparent text-marine font-semibold':
      props.finished && item.list == '4' ? 'bg-light-blue border-transparent text-marine font-semibold':
      'bg-transparent border-white text-white font-medium'
      }
      rounded-[100%] border-solid border-[1px] px-3 py-1 text-base`} onClick={next}>{item.list}</li> })}
    </ul>
  )
}