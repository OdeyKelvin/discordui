import React from 'react'
import centerbglandingheader from "../assets/center_bg_landing_header.svg";
import leftbglandingheader from "../assets/left_bg_landing_header.svg";
import rightbglandingheader from "../assets/right_bg_landing_header.svg";
import {AiOutlineDownload} from 'react-icons/ai'
export default function Hero() {
  return (
    <div className=' text-white bg-[#5865f2] '>
       <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto  flex flex-col justify-center'>
        <img src={centerbglandingheader} alt='center-bg-landing-header'/>
        <h4 className=' relative text-left ml-8 bottom-[5px] mr-20 font-extrabold text-2xl md:text-left md:mr-20 md:text-7xl xl:text-6xl lg:text-center lg:top-[-50px] lg:text-8xl xl:text-center xl:mt-20 xl:top-14'>IMAGINE A PLACE...</h4>
        <p className='relative text-left bottom-[-10px] ml-6 mr-8 md:text-left md:mr-[300px] lg:top-[-20px] lg:text-center lg:ml-[-30px] xl:left-10 xl:mr-16 xl:top-24'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
       <div className=' relative bottom-[-30px] ml-7 text-black h-[55px] px-10 w-[300px] rounded-[34px] bg-white xl:top-32 xl:left-[10px] xl:py-2 mt-'>

     <button className=' ml-8 -mt-2 text-[17px] xl:mt-[-12px]'> <div className=' relative right-8 top-6 xl:top-'><AiOutlineDownload size={23}/> </div>
Download for Windows</button>
</div>
<div className=' relative  ml-8 top-[56px] h-[55px] px-10 w-[310px] rounded-[34px] bg-black xl:-top-[-75px] xl:left-[340px]'>
     <button className=' mt-4 text-[16px] xl:mb-4 text-white '> 
     Open Discord in your browser</button>
</div>

<img className=' relative top-28 md:top-[-132px] md:right-[700px] ' src={leftbglandingheader} alt='center-bg-landing-header'/>
 

       </div> 
      
    </div>
  )
}
