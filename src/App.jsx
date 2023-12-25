
import React, { useState } from 'react'
import Main from './components/Main'
import HomeTypes from './components/HomeTypes'
import Database from './ApiData/DataBase';
import Card from './components/Card';
import Buttons from './components/Buttons';
import './App.css'
import Footer from './components/Footer';


const App = () => {
 
  const [item,setItems] = useState(Database)
const menuItems = [...new Set(Database.map((val)=> val.category))]

// Filter function 
const filterItems = (cat)=>{

  const newItems = Database.filter((newval)=> newval.category === cat)
setItems(newItems)
}

  return (

    <div>

    <Main/>
    <HomeTypes/>
    

    <div className='CardContainerTitle_btn'>
    <h1 className='h1_FEATURED'>FEATURED SINGLE FAMILY</h1>

<Buttons  className ='btns'
    menuItems = {menuItems} 
    filterItems = {filterItems}
    setItems ={setItems}
 />  
 <br /> <br /> 

    <Card item = {item}/>
</div>

<Footer/>
    </div>


  )
}

export default App