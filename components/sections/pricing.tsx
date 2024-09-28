"use client"

import React, { useState } from 'react'
import PricingSvg from '../pricingSvg'
import Plan from '../plan'
import { FaPerson } from 'react-icons/fa6'
import { FaRegCircle, FaRegSquare } from 'react-icons/fa'
import { IoBusiness } from 'react-icons/io5'
import { PiHexagonBold } from 'react-icons/pi'
import { MdOutlineWorkspacePremium } from "react-icons/md";

const Pricing = () => {
  const [plan, setPlan] = useState('month')
  return (
    <div className='px-4 lg:px-16 pt-28 mt-8 relative' id='pricing'>
      <div className='absolute inset-0 z-0'>
        <PricingSvg />
      </div>
      <h2 className='h2 text-center w-80 md:w-96 mx-auto relative z-10'>
      <span className="bg-gradient-to-r text-4xl font-extrabold from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Pricing
      </span>
      </h2>
      <div className='w-80 h-14 grid grid-cols-2 p-1 mx-auto mt-12 mb-24 border-2 border-blue-950 rounded-xl relative z-10'>
        <div className={`flex-center uppercase font-semibold text-xs cursor-pointer ${plan === 'month' ? 'bg-blue-950 shadow-sm shadow-blue-900 rounded-lg text-white' : 'bg-transparent text-slate-600'}`} onClick={() => setPlan('month')}>Monthly</div>
        <div className={`flex-center uppercase font-semibold text-xs cursor-pointer ${plan === 'annual' ? 'bg-blue-950 shadow-sm shadow-blue-900 rounded-lg text-white' : 'bg-transparent text-slate-600'}`} onClick={() => setPlan('annual')}>Annual</div>
      </div>
      <div className='w-fit flex flex-col md:flex-row items-center gap-y-28 mx-auto'>
        <div className='px-12 py-6 md:px-6 lg:px-12 border-2 border-blue-950 rounded-3xl md:border-r-0 md:rounded-r-none z-10'>
          <Plan 
          icon={FaPerson}
          price={plan === 'month' ? 42 : 42*11}
          name='Individual'
          slogan="1 user access"
          option1="Basic subscription management"
          option2="Automated invoicing"
          option3="Stripe payment integration"
          option4="Real-time analytics dashboard"
          buttonIcon={FaRegCircle}
          buttonLink={plan === 'month' ? 'https://buy.stripe.com/test_00gg0hcw7fZ09osfYY' : '#'}
          />
        </div>
        <div className='px-12 lg:px-14 py-4 border-2 border-blue-800 bg-blue-950 rounded-3xl z-10'>
          <Plan 
          icon={MdOutlineWorkspacePremium}
          price={plan === 'month' ? 69 : 69*11}
          name="Premium"
          slogan="Up to 10 users"
          option1='Advanced subscription management'
          option2='Customizable pricing plans'
          option3='Stripe payment integration'
          option4='Real-time analytics & detailed reporting'
          buttonIcon={FaRegSquare}
          type="limited"
          buttonLink={plan === 'month' ? 'https://buy.stripe.com/test_14k15ngMn146448289' : '#'}
          />
        </div>
        <div className='px-12 py-6 md:px-6 lg:px-12 border-2 border-blue-950 rounded-3xl md:border-l-0 md:rounded-l-none z-10'>
          <Plan 
          icon={IoBusiness}
          price={plan === 'month' ? 99 : 99*11}
          name="Enterprise"
          slogan="Unlimited users"
          option1='Fully customizable subscription management'
          option2='Dedicated account manager'
          option3='Enterprise-level security & compliance'
          option4='API access & custom integrations'
          buttonIcon={PiHexagonBold}
          buttonLink={plan === 'month' ? 'https://buy.stripe.com/test_5kA4hzfIj6oq304dQS' : '#'}
          />
        </div>
      </div>
    </div>
  )
}

export default Pricing
