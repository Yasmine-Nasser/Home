import React from 'react'

export default function Footer() {
  return (<>
    <div className='container bottom-0 left-0 right-0 text-white flex justify-between font-light py-20 bg-slate-700 text-lg text-center'>
      <div className='mx-10'>
        <h1 className='font-bold text-2xl'>location</h1>
        <p>2215 John Daniel Drive</p>
        <p className=''>Clark, MO 65243</p>
      </div>
      <div className='ms-20'>
      <h1 className='font-bold text-2xl '>AROUND THE WEB</h1>
        <p className=''>Clark, MO 65243</p>
        <i class="fa-brands fa-facebook fa-lg me-3"></i>
        <i class="fa-brands fa-facebook-messenger fa-lg me-3"></i>
        <i class="fa-brands fa-google-wallet fa-lg me-3"></i>
        <i class="fa-brands fa-twitter fa-lg"></i>
      
      </div>
      <div className='mx-10'>
        <h1 className='font-bold text-2xl'>ABOUT FREELANCER</h1>
        <p>Freelance is a free to use,</p>
        <p> licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    <div className='container bg-gray-800 w-full text-center text-slate-100 p-3'>
        <p>Copyright © Your Website 2021</p>
      </div>
  </>)
}
