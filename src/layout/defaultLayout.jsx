import React from 'react'
import { GeneralImg, MidEllipse } from '../assets/index'

export default function DefaultLayout({children}) {
  return (
    <div
        className="w-screen object-cover px-20 h-screen bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${GeneralImg})` }}
    >
      {/* decoration */}
      <div className='fixed top-2 left-0 w-full pt-6 flex justify-center items-center'>
        <img src={MidEllipse} alt="" className='w-[40%]'/>
      </div>
        {children}
    </div>
  )
}
