
import React from 'react';

import './App.css';

import Navbar from './components/props';
import States from './components/States'
import About from './components/About'
import Alert from './components/Alert'
import { useState } from 'react';
export default  function App() {

  const [modetype,setMode]=useState('light')
  const [alertText,setAlert]=useState(null)

  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
let toggleMode=()=>{
  if(modetype==='dark'){
    setMode('light')
    document.body.style.backgroundColor='white'
    document.body.style.color="black"
    showAlert('Light mode has turned on',"success")
      document.title='Light mode enabled'    
    // setInterval(() => {
    //   document.title='Light mode enabled'    
    // }, 2000);
    // setInterval(() => { 
    //   document.title=' install Light mode enabled'    
    // }, 4000);
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor='grey'
    document.body.style.color="white"
    showAlert('Dark mode has turned on',"warning");
    document.title='Dark mode enabled'
    
  }
}
let changeToRed=()=>{
  let checked=document.getElementById('checkbox')
  if(checked.checked){
    setMode('light')
    document.body.style.backgroundColor='red'
    document.body.style.color="white"
    showAlert('Red Mode has Enabled','info')
    document.title='Light mode enabled'
  }else{
    setMode('dark')
    document.body.style.backgroundColor='pink'
    document.body.style.color="black"
    showAlert('Pink Mode has Enabled','info')
  }
}
  return (
    <>      
  
<Navbar title="uma" About="About"  Home="Home" mode={modetype} toggleMode={toggleMode} changeToRed={changeToRed}/>
<div className="container" >
<header>
  <Alert alert={alertText}/>
</header>

<States headiing="Enter the text to analyze..." label="Enter Details"  mode={modetype} alert={showAlert}/>
</div>


    </>
  )
}
