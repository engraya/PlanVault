import React from 'react'
import FaqCard from '../faqCard';

const faqs = [
  {
    question: "What is PlanVault, and how does it work?",
    answer: "PlanVault is a subscription-based payment platform that automates billing, invoicing, and subscription management for businesses of all sizes. It integrates seamlessly with Stripe for secure transactions and real-time financial insights."
  },
  {
    question: "How do I get started with PlanVault?",
    answer: "Getting started is easy! Simply sign up for a free trial, choose a plan that fits your needs, and start managing your subscriptions and payments from the dashboard."
  },
  {
    question: "What payment methods does PlanVault support?",
    answer: "PlanVault supports multiple payment methods through its integration with Stripe, including credit/debit cards, bank transfers, and digital wallets like Apple Pay and Google Pay."
  },
  {
    question: "Can I customize my pricing plans for my customers?",
    answer: "Yes, PlanVault allows you to create and manage flexible pricing models, including tiered and custom pricing plans, for your customers."
  },
  {
    question: "Is my financial data secure on PlanVault?",
    answer: "Absolutely! We use industry-leading encryption and comply with all relevant security and privacy standards, including PCI-DSS, to ensure your data and transactions are secure."
  },
  {
    question: "What happens when my free trial ends?",
    answer: "At the end of your free trial, you can choose to subscribe to one of our paid plans (Individual, Premium, or Enterprise). If you decide not to upgrade, your account will be downgraded with limited access."
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can easily switch between plans at any time from your account settings. Changes in billing will be adjusted automatically."
  },
  {
    question: "Does PlanVault support multi-currency payments?",
    answer: "Yes, PlanVault supports multi-currency payments through Stripe, allowing you to charge customers in their preferred currency."
  },
  {
    question: "What level of customer support does PlanVault provide?",
    answer: "We offer tiered customer support based on your plan, including email support for the Individual plan, priority chat support for the Premium plan, and 24/7 dedicated support for the Enterprise plan."
  },
  {
    question: "How do I integrate PlanVault into my existing system?",
    answer: "PlanVault offers easy-to-use APIs and integrations to connect with your current tech stack. Our documentation guides you through the setup, and our support team is always available to assist."
  }
];

const Faq = () => {
  const formatNumber = (number: number):string => {
    if(number < 10) return "0" + number + "."
    return number + "."
  }
  return (
    <div className='px-4 lg:px-16 pt-28' id='faq'>
   <span className="bg-gradient-to-r text-4xl font-extrabold from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Frequently asked Questions
      </span>
      <div className='grid md:grid-cols-2 mt-16 gap-y-4 gap-x-16'>
        {faqs.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} number={formatNumber(index  + 1)} />
        ))}
      </div>
    </div>
  )
}

export default Faq
