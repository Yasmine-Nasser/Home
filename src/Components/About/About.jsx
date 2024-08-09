import React from 'react'


export default function About() {

  return(<>
  <div className='text flex flex-wrap justify-center items-center text-3xl bg-teal-500 text-white pt-20 -mb-10'>
    <h1 className='comp position-relative font-extrabold mt-10'>ABOUT COMPONENT</h1>
    <div className='line-1'></div>
    <i class="fa-solid fa-star fa-xs absolute top-44 right-50"></i>
    <div className='line-2'></div>
    <div className='flex justify-between font-light text-lg'>
      <span className='me-10 m-20'>Freelancer is a free bootstrap theme created by Route.
         The download includes the complete source files including HTML, 
         CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</span>
      <span className='m-20'>Freelancer is a free bootstrap theme created by Route.
         The download includes the complete source files including HTML, 
         CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</span>
    </div>
  </div>
</> )
}
