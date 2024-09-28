import React from 'react'
import ReviewCard from '../reviewCard';

const reviews = [
  {
    name: "John Doe",
    imgSrc: "/reviews/rev1.jpg",
    company: "Tech Innovators Inc.",
    review: "PlanVault has transformed the way I manage my client subscriptions. The automated invoicing feature saves me hours each month, allowing me to focus more on my creative work!"
  },
  {
    name: "Jane Smith",
    imgSrc: "/reviews/rev2.jpg",
    company: "Creative Studios",
    review: "As a small business, we struggled with payment processing until we found PlanVault. The user-friendly interface and seamless Stripe integration have streamlined our operations significantly."
  },
  {
    name: "Emily Johnson",
    imgSrc: "/reviews/rev3.jpg",
    company: "Marketing Gurus",
    review: "I love how customizable PlanVault is! I can create tailored pricing plans for my customers, making it easy to cater to different needs while maximizing revenue."
  },
  {
    name: "Michael Brown",
    imgSrc: "/reviews/rev4.jpg",
    company: "Content Creators LLC",
    review: "The real-time analytics provided by PlanVault give me invaluable insights into my revenue and subscriptions. I can now make data-driven decisions that propel my business forward."
  },
  {
    name: "David Wilson",
    imgSrc: "/reviews/rev5.jpg",
    company: "Digital Media Experts",
    review: "The customer support team at PlanVault is fantastic! They were quick to assist me with integrating the platform into my existing system, and I couldn't be happier with the results."
  },
  {
    name: "Sarah Davis",
    imgSrc: "/reviews/rev6.jpg",
    company: "Video Production House",
    review: "PlanVault’s enterprise-level features have been a game-changer for us. The advanced security measures and dedicated account management ensure we’re compliant and efficient."
  }
];

const Reviews = () => {
  return (
    <div className='p-16 flex flex-col lg:flex-row lg:justify-between relative'>
      <div className='absolute left-1/4 w-3/4 inset-0 gradient-01 z-0' />
      <div className='mb-16 w-72 z-10'>
      <span className="bg-gradient-to-r text-4xl font-extrabold from-teal-400 to-pink-400 bg-clip-text text-transparent">
          Testmonials
      </span>
      </div>
      <div className='grid md:grid-cols-2 gap-16 z-10 place-items-center'>
        {reviews.map((review, index) => (
          <ReviewCard  key={index} 
          name={review.name} 
          imgSrc={review.imgSrc}
          company={review.company}
          review={review.review}/>
        ))}
      </div>
    </div>
  )
}

export default Reviews
