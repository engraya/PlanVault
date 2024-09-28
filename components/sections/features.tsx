import React from 'react'
import { FaCut, FaRobot } from 'react-icons/fa';
import { PiRocketLaunchBold } from 'react-icons/pi';
import { SiGithubactions } from 'react-icons/si';
import FeatureCard from '../featureCard';
import Feature from '../feature';
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaSailboat } from "react-icons/fa6";


const featureCards = [
  {
    icon: GiReceiveMoney,
    slogan: " Automated Subscription Management",
    heading: "Handle Recurring Payments",
    text: "Say goodbye to manual payment tracking. With PlanVault, automate your subscription cycles, billing, and customer notifications. Our system adapts to flexible pricing models, ensuring you never miss a payment and keeping your customers satisfied with seamless, uninterrupted service.",
    buttonIcon: SiGithubactions,
    buttonText: "See in Action"
  },
  {
    icon: FcMoneyTransfer,
    slogan: "Real-Time Analytics & Insights",
    heading: "Make Data-Driven Decisions",
    text: "Stay ahead of your business finances with real-time analytics and detailed reports. PlanVault gives you a comprehensive overview of your revenue streams, payment statuses, and subscription performance, empowering you to make informed decisions and grow your business faster.",
    buttonIcon: PiRocketLaunchBold,
    buttonText: "Explore Now"
  }
];

const features = [
  { icon: FaRobot, name: "AI Smart Tools" },
  { icon: FaCut, name: "Enhanced Security & Compliance" },
  { icon: FaSailboat, name: "Customizable Pricing Plans" },
  { icon: FaMoneyCheckDollar, name: "Seamless Stripe Integration" }
];

const Features = () => {
  return (
    <div className='p-4 pt-28' id='features'>
            <h2 className='h2 text-center w-80 mb-6 md:w-96 mx-auto relative z-10'>
      <span className="bg-gradient-to-r text-4xl font-extrabold from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Features
      </span>
      </h2>
      <div className='flex flex-col mx-4 lg:mx-16 border-2 border-blue-900 bg-blue-950 rounded-3xl shadow-inner shadow-blue-900'>
        <div className='grid md:grid-cols-2 pt-8 md:pt-0'>
          {featureCards.map((card, index) => (
            <FeatureCard 
            key={index}
            icon={card.icon}
            slogan={card.slogan}
            heading={card.heading}
            text={card.text}
            buttonIcon={card.buttonIcon}
            buttonText={card.buttonText}
            />
          ))}
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 px-4 md:px-16 py-6 w-full bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 rounded-3xl ring-2 place-items-center'>
          {features.map((feature, index) => (
            <Feature 
            key={index}
            icon={feature.icon}
            name={feature.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
