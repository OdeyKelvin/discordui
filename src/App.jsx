import React from "react";
import discordLogo from "../assets/discord_main_logo.svg";
import friends from "../assets/friends.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div style={{ backgroundColor: "#5865f2" }}>
    
      <nav className=" relative container mx-auto p-5"> 
      <div className=" flex items-center justify-between ">

          <div>
          <img src={discordLogo} alt="discord" />
          </div>
          <div className=" flex space-x-12 mr-48 text-white pt-2  ">
       
       <a href="#downlaod">Download</a>
       <a href="#nitro"> Nitro</a> 
       <a href="#discover">Discover</a>
       <a href="#safety">Safety</a>
       <a href="#support">Support</a>    
       <a href="#blog">Blog</a>
       <a href="careers">Careers</a>
       <button className=" relative left-48 bg-white text-black rounded-full px-4 py-2 -top-1">login</button>
     </div>

      </div>
      
      </nav>
      
      <section className="Hero">
          <h1 className=" text-center mr-52 text-6xl text-white mt-24 font-bold">IMAGINE A PLACE...</h1>
          <div className=" w-2/4 mx-auto">
         < p className=" relative right-14 text-center text-white mt-10 mr-9">...where you can belong to a school club, a gaming group, or a worldwide art community.
           where just you and a handful of friends can spend time together. A place that makes it easy
            to talk every day and hangout more often.</p>
        </div>
          
          <div className="downloadbtn">
            <button className=" relative left-72  -bottom-8 mt-6 flex space-x-12 pt-2 bg-white rounded-full px-8 py-5 text-xl"> 
              <a href="#download"> <FontAwesomeIcon icon={faDownload} className=" pr-3">
          
</FontAwesomeIcon>Download For Windows</a>
            </button>
          </div>
          <div className="discordinbrowser">
            <button className="relative left-96 mt-6 flex space-x-12 ml-60 -top-12 bg-black text-white rounded-full px-6 py-4 text-xl">
            <a href="#discord">Open Discord in your browser </a>
            </button>
          </div>
       
      </section>





    </div>
  );
}

export default App;
