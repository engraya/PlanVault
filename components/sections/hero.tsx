import React from 'react'
import Button from '../button'
import { GoFlame } from 'react-icons/go'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between p-16 pt-20 md:pt-40 gap-20 relative'>
      <div className='absolute left-1/2 w-1/2 inset-0 gradient-02'/>
      <div className='flex flex-col gap-2 z-10 md:max-w-80 lg:max-w-96'>
        <p className='text-slogan text-emerald-700'>Streamline payments, Elevate growth.</p>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-5xl md:text-6xl">
        <span className="block xl:inline">
          <span className="bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Simplify Payments,
          </span>
        </span>
        <div className="mt-2 text-cyan-300">Empower Your Business
          <span className="relative mt-3 whitespace-nowrap text-emerald-400"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50" preserveAspectRatio="none">
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
              </path>
            </svg>
            <span className="relative">with PlanVault.</span>
          </span>
        </div>
      </h1>
        <p className='p mb-4 mt-4'>Seamlessly manage subscriptions, automate invoicing, and scale your business with PlanVault, the all-in-one payment solution designed for modern businesses. From startups to enterprises, we ensure secure transactions and real-time insights with a user-friendly interface.</p>
        <Button text="try it now" link="#download" icon={GoFlame} />
      </div>
      <div className='w-80 lg:w-96 z-10'>
        <Image src="/hero.png" alt="robot image" width={350} height={500} />
      </div>
    </div>
  )
}

export default Hero
