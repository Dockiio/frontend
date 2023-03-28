import React from 'react'
import { GeneralImg, MidEllipse } from '../assets/index'

export default function DefaultLayout({children}) {
  return (
    <div
        className="w-full object-cover px-20 h-max py-6 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${"https://res.cloudinary.com/phantom1245/image/upload/v1679974352/dockii/generalImg_mfdjrd.png" ||GeneralImg})` }}
    >
      {/* decoration */}
      <div className='fixed top-2 left-0 w-full pt-6 flex justify-center items-center'>
        <img src={MidEllipse} alt="" className='w-[40%]'/>
      </div>
        {children}
    </div>
  )
}
