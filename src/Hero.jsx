import React from 'react'
import centerbglandingheader from "../assets/center_bg_landing_header.svg";
import leftbglandingheader from "../assets/left_bg_landing_header.svg";
import rightbglandingheader from "../assets/right_bg_landing_header.svg"; 
import {AiOutlineDownload} from 'react-icons/ai'
export default function Hero() {
  return (
    <div className=' text-white bg-[#5865f2] overflow-x-clip'>
       <div className=' max-w-[800px] mt-[-96px] w-full h-screen mx-auto  flex flex-col justify-center'>
        <img src={centerbglandingheader} alt='center-bg-landing-header'/>
        <h4 className=' relative text-left ml-8 bottom-[8rem] mr-20 font-extrabold text-2xl md:text-left md:mr-20 md:text-7xl xl:text-6xl lg:text-center lg:top-[-50px] lg:text-8xl xl:text-center xl:mt-20 xl:top-[-10rem]'>IMAGINE A PLACE...</h4>
        <p className='relative text-left bottom-[6rem] ml-6 mr-8 md:text-left md:mr-[300px] lg:top-[-20px] lg:text-center lg:ml-[-30px] xl:left-10 xl:mr-16 xl:top-[-8rem]'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
       <div className=' hidden relative bottom-[4rem] ml-7 text-black h-[55px] px-10 w-[300px] rounded-[34px] bg-white xl:block  xl:top-[-4rem] xl:left-[10px] xl:py-2 mt-'>
     <button className=' ml-8 -mt-2 text-[17px] xl:mt-[-12px]'> <div className=' relative right-8 top-6 xl:top-'><AiOutlineDownload size={23}/> </div>
Download for Windows</button>
</div>


<div className=' relative bottom-[4rem] ml-7 text-black h-[70px] px-10 w-[300px] rounded-[34px] bg-white xl:hidden xl:top-[-4rem] xl:left-[10px] xl:py-2 mt-'>
     <button className=' ml-8 -mt-2 text-[17px] xl:mt-[-12px]'> <div className=' relative right-8 top-6 xl:top-'><AiOutlineDownload size={23}/> </div>
Download from Google Play</button>
</div>

<div className=' hidden relative  ml-8 top-[-2rem] h-[55px] px-10 w-[310px] rounded-[34px] xl:block bg-black xl:-top-[7.5rem] xl:left-[340px]'>
     <button className=' mt-4 text-[16px] xl:mb-4 text-white '> 
     Open Discord in your browser</button>
</div>
 

<div className=' relative -left-[5rem]  bottom-[0.8rem] mr-7 md:mr-[10rem] md:left-[-35rem] md:top-[-16rem] '>
 <img className=' absolute' src={leftbglandingheader} alt='center-bg-landing-header'/>
 </div>

<div className='rightbglandingheader relative md:top-[-18.1rem] md:left-[43rem]'>
 <img className=' hidden  md:block absolute  ' src={rightbglandingheader} alt='center-bg-landing-header'/>
 </div>

 




       </div> 
      
    </div>
  )
}