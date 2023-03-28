import React from 'react'
import { RobotAvatar } from '../../assets'
export default function TopNav() {
  return (
    <div className='w-full py-4 flex items-center gap-5 px-4 bg-white '>
        <div>
            <img src={RobotAvatar} alt="" />
        </div>  
        <div className=''>
            <h1 className='text-lg font-tomorrow font-bold text-[#1A0634]'>DOCKII</h1>
            <h3>online</h3>
        </div>
    </div>
  )
}
