import React from 'react'
import Child from './../Child/Child'
export default function Contact() {
  return (
    <>
    <div className='container text flex flex-wrap justify-center items-center text-3xl text-cyan-950 mt-5'>
      <h1 className='porto font-extrabold'>CONTACT SECTION</h1>
      <div className='liner'></div>
      <i className="fa-solid fa-star fa-xs absolute top-40 right-50"></i>
      <div className='liners'></div>
    </div>
    <div className='container h-screen pt-10 ps-40 mt-10'>
      <input id='userNmae' className="form-control mb-5 w-3/4 h-14 ps-4" placeholder="Enter your name" type="text"></input>
      <input id='userNmae' className="form-control mb-5 w-3/4 h-14 ps-4 " placeholder="Enter your Email" type="text"></input>
      <input id='userNmae' className="form-control mb-5 w-3/4 h-14 ps-4" placeholder="Enteryour Password" type="password"></input>
      
      <div className='flex justify-center items-center'>
      <button className="btn btn-outline-light w-50 py-3 px-5 btn btn-outline bg-slate-700 rounded-2xl text-white ">Login</button>
      </div>
    </div>
  </>)
}
