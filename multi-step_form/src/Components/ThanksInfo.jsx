import React from 'react'
import { Thank } from '../Data'

export default function ThanksInfo() {
    return (
    <section className='w-max sm:py-2 sm:w-[28rem] lg:py-0 lg:w-[32rem] xl:w-[33rem]'>
        <div className='bg-white flex flex-col space-y-5 justify-center content-center px-5 
        absolute h-max top-24 right-0 left-0 py-16 mx-5 rounded-md sm:static md:mr-10'>
            <figure className='flex justify-center'>
                <img src={Thank} alt="Thank-you" className='max-w-[20%]'/>
            </figure>
            <div>
                <h2 className='text-marine text-2xl font-bold tracking-wider 
                leading-10 text-center'>Thank you!</h2>
                <p className='text-center text-cool font-medium leading-6 lg:text-sm 
                lg:w-full'>Thanks for confirming your subscription! We hope you have fun using our 
                platform. If you ever need support, please feel free to email us at 
                support@loremgaming.com.</p>
            </div>
        </div>
    </section>
   )
}