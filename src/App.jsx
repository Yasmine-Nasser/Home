import React, { useCallback, useState } from 'react'
import './App.css'
import Start from './Components/Start/Start'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Contact from './Components/Contact/Contact'
import Footer from "./Components/Footer/Footer"


let x = createBrowserRouter([
  {path:'', element:<Layout/> , children:[
    {index:true , element:<Start/>},
    {index:true , element:<Footer/>},
    {path:'start', element:<Start/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
  ]},
])

function App() {
  return (
    <RouterProvider router={x}></RouterProvider>
  )
}

export default App
