import React,{useEffect} from 'react'
import invitelanding from "../assets/invite_only_landing.svg";
import Aos from 'aos';
import "aos/dist/aos.css"
export default function Studygroup() {
  useEffect(()=>{
    Aos.init({duration:2000});
   },[])
  return (
    <div className=''>
    
       <div className=' relative pt-20 md:w-[46%] md:ml-[5rem]'>
        <img data-Aos="fade-up" className=' absolute ' src={invitelanding} alt='center-bg-landing-header'/>
            </div>
          <h2 data-Aos="fade-up" className=' mt-[13rem] font-bold p-6 text-xl relative md:ml-[45rem] md:text-5xl md:p-20 md:mt-[-2.2rem] md:font-bold'>Create an invite-only place where you belong</h2>
          <p data-Aos="fade-up" className=' p-6 mt-[-1rem] md:ml-[59rem] md:p-10 relative md:right-[11.5rem] md:top-[-4rem]'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
    </div>
  )
}