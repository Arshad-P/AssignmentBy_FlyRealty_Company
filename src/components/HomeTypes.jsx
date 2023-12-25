import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const HomeTypes = () => {
  return (


    <div className='HomeType_Container'>

     {/* image 1  */}
    <div className='img1_Container'>

    <h1 className='img1h1'>SINGLE FAMILY HOMES</h1>
    <p>Find You New Home Today</p>
    <a className='img1_Anchortag_Arrow' href="https://www.destinationhomes.com/homes?filters={%22HomeType%22:[%22Single%20Family%22]}">
     {/* react icon imported  */}
    <FaArrowRightLong className='ArrowTag'/>
    </a> 
  <img src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC9jNWE4Y2YxNjI5NWVhMzI4YjU3ZjhiNDFmOTY2YzVhOS5qcGVn/exact/webp/2000/1125" alt=""/>
  </div>

{/* image 2  */}
  <div className='img2_Container'>
  <h1 className='img2h2'>TOWN HOMES</h1>
  <p>Find You New Home Today</p>
    <a className='img2_Anchortag_Arrow' href="https://www.destinationhomes.com/homes?filters={%22HomeType%22:[%22Townhome%22]}">
     {/* react icon imported  */}
    <FaArrowRightLong className='ArrowTag'/>
    </a> 

  <img src="https://dlqxt4mfnxo6k.cloudfront.net/destinationhomes.com/aHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2J1aWxkZXJjbG91ZC8zZjY2NmVlNzk5ZDc5ZDcwYWI3NDhjMThkMmRkMzg5OC5qcGVn/exact/webp/2000/1125" alt="" />
  </div>

    </div>
  )
}

export default HomeTypes