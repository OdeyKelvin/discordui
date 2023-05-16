import React, {useState }from 'react';
import discordLogo from "../assets/discord_main_logo.svg";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
export default function Navbar() {
    const [nav, setNav] =useState(true)
    const Handlenav=()=>{
      setNav(!nav)  
    }
  return (
    <div>
      <div className=' relative' style={{ backgroundColor: "#5865f2" }}> 
      <div  className=' relative flex justify-between items-center h-24 max-w-[12400px] mx-auto '>

      <div className={!nav? ' z-10 fixed right-0 top-0 w-[85%] rounded-[10px] min-h-screen border-r bg-slate-700 ease-in duration-600 xl:hidden':'fixed left-[100%]'}>
             
             <div className=' '><img className=' relative top-6 ml-6 md:ml-12 lg:ml-16 xl:ml-20' src={discordLogo} alt="discord" /> </div>
             <div onClick={Handlenav} className=' relative bottom-1 ml-[17rem] text-white'> <AiOutlineClose size={23}/></div> 
           <div className=' relative border-b w-[243px] bg-white ml-7 top-10'></div>      
             <ul className=' relative grid top-[60px] ml-8 text-white'>
                  <a className=' py-3 hover:underline' href='#Download'>Download</a>
                  <a className=' py-3 hover:underline' href='#Nitro'>Nitro</a>
                  <a className=' py-3 hover:underline' href='#Discover'>Discover</a>
                  <a className=' py-3 hover:underline' href='#Safety'>Safety</a>
                  <a className=' py-3 hover:underline' href='#Support'>Support</a>
                  <a className=' py-3 hover:underline' href='#Blog'>Blog</a>
                  <a className=' py-3 hover:underline' href='#Careers'>Careers</a>
                    
                </ul>
    
             </div>
    
        <img className=' relative -top-2 ml-6 md:ml-12top-2 lg:ml-16top-2 xl:ml-20' src={discordLogo} alt="discord" />
        <ul className=' hidden lg:flex relative right-8 text-white  '>
              <a className=' px-5 hover:underline' href='#Download'>Download</a>
              <a className='  px-5 hover:underline' href='#Nitro'>Nitro</a>
              <a className='  px-5 hover:underline' href='#Discover'>Discover</a>
              <a className='  px-5 hover:underline' href='#Safety'>Safety</a>
              <a className='  px-5 hover:underline' href='#Support'>Support</a>
              <a className='  px-5 hover:underline' href='#Blog'>Blog</a>
              <a className='  px-5 hover:underline' href='#Careers'>Careers</a>
                
            </ul> 
            <section className=' mr-10'>
              <button className=' relative  -left-10 top-2 bg-white py-2 px-3 rounded-[20px] hover:text-blue-500 focus- lg:mb-7'>Login</button>
              <div onClick={Handlenav} className=' relative left-5 ml-5 bottom-6 text-white lg:hidden xl:hidden '>
             {!nav? <AiOutlineClose size={23}/>:< AiOutlineMenu size={30}/> }
              
         </div>
            </section>
        </div>
       
       <div className=' relative'>




       </div>
         



  </div>
    </div>
  )
}
