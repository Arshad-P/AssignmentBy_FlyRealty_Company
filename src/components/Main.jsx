import React from 'react'
import videoBg from '../videos/HomePage.mp4'
import { IoMdMenu } from "react-icons/io";

const Main = () => {
  return (

    <div className='main'>
        
       <video autoPlay loop muted src= {videoBg} controls/>

       <ul className='content'>
       <img className='LogoImg' src="https://www.destinationhomes.com/images/logo-header.svg" alt="" />
       <li><a href="https://www.destinationhomes.com/communities"> WHERE WE BUILD</a>
       </li>
       <li><a href="https://www.destinationhomes.com/homes"> QUICK MOVE-IN HOMES</a>
       </li>
       <li><a href="https://www.destinationhomes.com/plans"> FLOOR PLANS</a></li>
 
       <i class="fa-solid fa-magnifying-glass"></i>
       <div className='menu'>
        Menu
     <IoMdMenu className='MenuIcon'/>
        </div>
       </ul>
  

<div className='COMMUNITIES_Content'>
  <span className='span1'>EXCEPTIONAL HOMES, &ensp;</span>
   <span className='span2'>LASTING COMMUNITIES</span>
</div>
    </div>
  )
}

export default Main