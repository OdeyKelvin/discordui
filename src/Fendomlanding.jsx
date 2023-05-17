import React from 'react'
import fendomlanding from "../assets/fandom_landing.svg";
export default function Fendomlanding() {
  return (
    <div>
        <img data-Aos="fade-up" className=' relative p-4 md:w-[46%] md:mr-[45%] md:top-20 md:ml-[8rem]' src={fendomlanding} alt='fendomlanding'/>
        <h1 data-Aos="fade-up" className=' relative p-6 font-bold text-xl md:ml-[50rem] md:text-5xl md:top-[-17rem] '>  From few to a fandom</h1>
       <div data-Aos="fade-up" className=' p-6  md:ml-[60rem] relative md:right-[10rem] md:top-[-18rem]'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</div>  
    </div>
  )
}
