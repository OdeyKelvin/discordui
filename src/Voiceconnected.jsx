import React from 'react'
import hangouteasylanding from "../assets/hanging_out_easy_landing.svg";

export default function Voiceconnected() {
  return (
    <div  className=' bg-[#f6f6f6]'>
     <img data-Aos="fade-up" className=' relative p-4 md:w-[46%] md:ml-[45%] md:top-16' src={hangouteasylanding} alt='center-bg-landing-header'/>
      <h1 data-Aos="fade-up" className=' relative text-xl font-bold p-4 md:bottom-[17rem] md:px-[9rem] md:text-4xl md:mr-[50rem] md:font-bold md:whitespace-pre-wrap'>Where hanging out is easy</h1>
      <p data-Aos="fade-up" className=' p-4 md:ml-[75%] relative md:right-[55.2rem] md:top-[-17rem]'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
    </div>
  )
}
