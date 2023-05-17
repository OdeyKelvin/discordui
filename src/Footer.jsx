import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import discordLogo from "../assets/discord_main_logo.svg";
import { faTwitter,faInstagram,faFacebook,faTiktok} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
      <div className=' bg-black text-white'> 
       <button className=' ml-7 mb-10 mt-28 md:ml-[10rem] '></button>English,USA
        <div>
        <ul className='socialmedia flex space-x-10 ml-7 md:ml-[10rem] '>
        <FontAwesomeIcon icon={faTwitter} size='lg' />
        <FontAwesomeIcon icon={faInstagram} size='lg' />
        <FontAwesomeIcon icon={faFacebook} size='lg' />
        <FontAwesomeIcon icon={faTiktok} size='lg' />
        </ul>
        </div>
        <div>
          <div className=' relative mt-12 ml-44 space-y-2 text-blue-700 text-sm md:ml-[40rem] md:bottom-[9.3rem]'>Company
             <ul className=' mt-6 text-white space-y-2'>
            <a className=' hover:underline' href='#about'>About</a>
            <li className=''>Jobs</li>
            <li className=''>Brand</li>
            <li>Newsroom</li>
            </ul>
          </div>
          <div className=' relative bottom-[14.7rem] ml-2 p-6 mt-16  space-y-2 text-blue-700 text-sm md:ml-[30rem] md:bottom-[24rem]'>Product
             <ul className=' mt-6 text-white space-y-2'>
            <li>Donload</li>
            <li>Nitro</li>
            <li>Status</li>
            
            </ul>
          </div>
          <div className=' relative bottom-[16rem] mt-16 ml-44 space-y-2 text-blue-700 text-sm md:ml-[64rem] md:bottom-[37rem]'>Policies
             <ul className=' mt-6 text-white space-y-2'>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies Settings</li>
            <li>Guidelines</li>
            <li>Acknowledgements</li>
            <li>Licenses</li>
            <li>Moderation</li>
            <li>Company Information</li>
            </ul>
          </div>
          <div className=' relative mt-[-33.8rem] p-6 space-y-2 text-blue-700 text-sm md:ml-[50rem] md:bottom-[20.8rem]'>Resoureces
             <ul className=' mt-6 text-white space-y-2'>
            <li>Colleg</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Build</li>
            <li>StremKit</li>
            <li>Creators</li>
            <li>Community</li>
            </ul>
          </div>

          <div className=' relative border-b to-blue-800 w-[77%] ml-7  mt-4 md:mt-[-20rem] md:ml-[10rem]'></div>
          <button className=' relative top-[2rem] bg-[#5865f2] text-white ml-[14rem] mb-6 py-2 px-3 rounded-full md:ml-[69.8rem] md:text-sm '>Download</button>
           <img className=' relative bottom-[3rem] p-6 md:ml-[9rem] ' src={discordLogo} alt="discord" /> 
           

        </div>
      </div>
    </div>
  )
}