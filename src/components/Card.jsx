

import React from 'react'
import './Card.css'
import { FaArrowRightLong } from "react-icons/fa6";


const Card = ({item}) => {

  return (

    <div className='container'>
         <div className='products'>
            {item.map((val)=>(

         <div className='imgCard_Container'>

                <div >

                        <img src={val.img} alt=""  className='imgCard'/>
                    </div>

                 <div >
                        <div className=' '>
                            {val.title} -- {val.price}
                        </div>

                <div >
                   {val.homeFeatures}
                               <br />
               
                        </div>
                 
    <a href="https://www.destinationhomes.com/homes/clearfield-ut/wilcox-farms/997-w-1550-s"className='Anchortag'>
     <FaArrowRightLong className='ArrowTag'/>
     </a>
        </div>

                </div>
            ))}
         </div>
    </div>
  )
}

export default Card