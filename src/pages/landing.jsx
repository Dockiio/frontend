import React from 'react'
import { 
  GeneralImg, 
  Logo, 
  MidEllipse, 
  MainImg,
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  RobotAvatar,
} from '../assets'
import { NavLink } from 'react-router-dom'
import DefaultLayout from '../layout/defaultLayout';

export default function Landing() {
const contributors = [
  { handle: 'johndoe', avatarUrl: `${Avatar1}` },
  { handle: 'janedoe', avatarUrl: `${Avatar2}` },
  { handle: 'bobsmith', avatarUrl: `${Avatar3}` },
  { handle: 'bobsmth', avatarUrl: `${Avatar4}` },
];
  return (
    <DefaultLayout>
      {/* header */}
      <div className='flex py-2 justify-between items-center z-[3]'>
        <div>
          <img src={Logo} alt="logo" className='w-20 '/>
        </div>
        <div className='z-[999]'>
          <NavLink 
            to="/login"
            className="font-semibold font-poppins text-black text-lg underline"
          >
            Login
          </NavLink>
        </div>
      </div>
      {/* body */}
      <div className='flex h-[80vh] items-center'>
        <div className='z-[3]'>
          <div>
            <h1 className='text-7xl font-tomorrow font-bold w-[32rem] leading-[5rem] text-[#1A0634]'>Your Health Is In Our Care </h1>
          </div>
          <div className='w-[20rem] '>
            <p className='leading-[30px] font-normal py-4 text-lg text-[#302F5C]'>Your health comes before anything, 
              and always ready to provide solution to
              your health problem.
            </p>
          </div>
          <div>
            <NavLink 
              to="/register"
            >
              <button className='bg-gradient-to-br from-orange-400 to-yellow-200 font-tomorrow font-bold shadow-xl w-40 py-4 rounded-full'>Get Started</button>
            </NavLink>
          </div>
        </div>
        <div>
          <img src={MainImg} alt=""  className='pb-14 pr-9 w-[20rem]'/>
        </div>
        <div className='z-[3]'>
          <div className="pl-4 py-4 flex -space-x-2 overflow-hidden">
            {contributors.map((user, index) => (
              <img 
              key={user.handle} 
              className="inline-block h-12 w-12 rounded-full ring-4 transition-transform transform hover:scale-110 ring-white" 
              src={user.avatarUrl}
              alt={user.handle}
              style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          <div className="flex gap-3 mt-32 bg-white pl-3 items-center w-[16rem] rounded-lg py-2">
            <div>
              <img src={RobotAvatar} alt="" />
            </div>

            <div className='font-poppins font-bold text-md text-[#1A0634]'>
              Chat With <br /> Dockii today
            </div>

          </div>
        </div>
      </div>
    </DefaultLayout>
    
  )
}
