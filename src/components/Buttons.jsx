
import React from 'react'
import './Buttons.css'

const Buttons = ({menuItems, filterItems}) => {

  return (

    <div className='btnContainer'>
           {
            menuItems.map(val =>(

                <button className="btns"onClick={()=>filterItems(val)}>
                    {val}
                </button>
            ))
           }
          
   

    </div>
  )
}

export default Buttons