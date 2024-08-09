import React, { useState } from 'react'
import Child from '../Child/Child'

export default function Portfolio() {
  const [port , setPort] = useState()
  return (<>
    <div className='container text flex flex-wrap justify-center items-center text-3xl text-cyan-950 mt-5'>
      <h1 className='porto font-extrabold'>PORTFOLIO COMPONENT</h1>
      <div className='liner'></div>
      <i className="fa-solid fa-star fa-xs absolute top-40 right-50"></i>
      <div className='liners'></div>
    </div>
    <div className='row mt-20 flex flex-wrap justify-center items-center'>

      <div className="my-row">
        <div className="port-inner rounded-lg position-relative">
          <img className='img' src="src/assets/poert1.png" alt="" width={350}/>
            <div className="layer position-absolute flex flex-column justify-center items-center">
              <div className="inner-layer text-center">
              <button><i className="fa-solid fa-heart-circle-plus fa-2xl text-white"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div className="my-row">
        <div className="port-inner rounded-lg position-relative m-3">
          <img src="src/assets/port2.png" alt="" width={350}/>
            <div className="layer position-absolute flex flex-column justify-center items-center">
              <div className="inner-layer text-center">
              <button><i class="fa-solid fa-heart-circle-plus fa-2xl text-white"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div className="my-row">
        <div className="port-inner rounded-lg position-relative">
          <img src="src/assets/port3.png" alt="" width={350}/>
            <div className="layer position-absolute flex flex-column justify-center items-center">
              <div className="inner-layer text-center">
              <button><i class="fa-solid fa-heart-circle-plus fa-2xl text-white"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div className="my-row">
        <div className="port-inner rounded-lgm-3 position-relative">
          <img src="src/assets/poert1.png" alt="" width={350}/>
            <div className="layer position-absolute flex flex-column justify-center items-center">
              <div className="inner-layer text-center">
              <button><i class="fa-solid fa-heart-circle-plus fa-2xl text-white"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div className="my-row">
        <div className="port-inner rounded-lg position-relative m-3">
          <img src="src/assets/port2.png" alt="" width={350}/>
            <div className="layer position-absolute flex flex-column justify-center items-center">
              <div className="inner-layer text-center">
              <button><i class="fa-solid fa-heart-circle-plus fa-2xl text-white"></i></button>
              </div>
            </div>
          </div>
      </div>
      <div className="my-row">
        <div className="port-inner rounded-lg position-relative">
          <img src="src/assets/port3.png" alt="" width={350}/>
            <div className="layer position-absolute flex flex-column justify-center items-center">
              <div className="inner-layer text-center">
              <button><i class="fa-solid fa-heart-circle-plus fa-2xl text-white"></i></button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </>)
} 
