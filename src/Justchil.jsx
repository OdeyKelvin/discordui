import React from 'react'
import justchilllanding from "../assets/just_chiling_landing.svg";
import {AiOutlineDownload} from 'react-icons/ai'
export default function Justchil() {
  return (
    <div className=' bg-[#f6f6f6]'>
       <div className=' wraper'>
        <h1 className=' relative p-8 text-2xl font-extrabold top-4 md:text-center md:text-5xl md:top-16'>RELIABLE TECH FOR STAYING CLOSE
</h1> 
<p className=' relative bottom-3 p-2 ml-[1.2rem] md:top-14 md:text-center md:ml-[32rem] md:right-[14rem]'>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
<img className=' relative bottom-6 p-4 md:w-[76%] md:mr-[45%] md:top-20 md:ml-[8rem]' src={justchilllanding} alt='justchilllanding'/>
     <h1 className='  p-6 text-3xl font-bold md:mt-52 md:text-center relative md:top-[-4.5rem]'>Ready to start your journey?</h1>
     <div className=' relative ml-7 text-white h-[55px] px-10 w-[300px] rounded-[34px] bg-[#5865f2] xl:top-[-4rem] xl:left-[30rem] xl:py-2 xl:mt-3'>
     <button className=' ml-8 -mt-2 text-[17px] xl:mt-[-12px]'> <div className=' relative right-8 top-6 xl:top-'><AiOutlineDownload size={23}/> </div>
Download for Windows</button>
</div>
     
       </div>
    </div>
  )
}
