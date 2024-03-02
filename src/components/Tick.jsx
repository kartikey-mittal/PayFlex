import React, { useState } from "react";
import Ticker from '../Ticker.json';
import Lottie from 'lottie-react'

function Tick() {
  return (
        
    <div style={{width:"80%",height:"80vh",backgroundColor:"whitesmoke",margin:"0 auto",display:"flex",alignItems:"center",paddingTop:"50px",flexDirection:"column"}}>
      <div style={{width:"30%",height:"30%"}}>
      <Lottie animationData={Ticker} />
      
      </div>
      <h1 style={{marginTop:"200px",color:"darkgreen",fontSize:"35px",wordSpacing:"2px",letterSpacing:"2px"}}>Your Payment is Completed ...</h1>
      </div>
      
      
  )
}

export default Tick;