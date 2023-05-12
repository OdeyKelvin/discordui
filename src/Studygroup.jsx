import React from 'react'
import invitelanding from "../assets/invite_only_landing.svg";

export default function Studygroup() {
  return (
    <div className=''>
    
       <div className=' relative pt-20 md:w-[46%] md:ml-[5rem]'>
        <img className=' absolute ' src={invitelanding} alt='center-bg-landing-header'/>
            </div>
          <h2 className=' mt-[13rem] font-bold p-6 text-xl relative md:ml-[45rem] md:text-5xl md:p-20 md:mt-[-2.2rem] md:font-bold'>Create an invite-only place where you belong</h2>
          <p className=' p-6 mt-[-1rem] md:ml-[59rem] md:p-10 relative md:right-[11.5rem] md:top-[-4rem]'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
    </div>
  )
}
