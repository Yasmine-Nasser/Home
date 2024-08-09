import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (<>
    <div className='container fixed mx-auto bg-cyan-900 bg-opacity-50 py-3 fixed top-0 left-0 right-0'>
      <ul className='flex flex-wrap justify-around items-center text-teal-950 font-bold'>
        <li  className='start'><NavLink to="start">START FRAMEWORK</NavLink></li>
        <li className='about ps-20' ><NavLink to="about">About</NavLink></li>
        <li className='about'><NavLink to="portfolio">portfolio</NavLink></li>
        <li className='about pe-20'><NavLink to="contact">contact</NavLink></li>
      </ul>
    </div>
    </>
  )
}

