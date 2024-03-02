// import React, { useState, useEffect } from "react";
// import Ticker from '../Ticker.json';
// import Loading from '../Loading.json'
// import Lottie from 'lottie-react'

// function Tick({ isOpen, onClose }) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{width:"50%",height:"80vh",backgroundColor:"whitesmoke",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"80px",flexDirection:"column", position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 999, display: isOpen ? 'flex' : 'none'}}>
//         <div style={{marginLeft:"auto",color:"black",position:"relative",bottom:"100px",right:"20px",fontSize:"18px",color:"red",fontWeight:"bold",cursor:"pointer"}} onClick={onClose}>X</div>
//       {isLoading ? (
//         <div style={{width:"30%",height:"30%",marginTop:"0px"}}>
//           <Lottie animationData={Loading} />
//         </div>
//       ) : (
//         <div style={{width:"30%",height:"30%",marginTop:"0px"}}>
//           <Lottie animationData={Ticker} />
//         </div>
//       )}
//       <h1 style={{marginTop:"120px",color:"darkgreen",fontSize:"35px",wordSpacing:"2px",letterSpacing:"2px"}}>Successfull ...</h1>
//       <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:"0px"}}>
//         <button onClick={onClose} style={{padding:"10px 40px",borderRadius:"20px",backgroundColor:"#20B756",color:"white",border:"none",cursor:"pointer",fontSize:"16px",marginRight:"60px",cursor:"pointer"}}>Pay Debt</button>
//         <button onClick={onClose} style={{padding:"10px 40px",borderRadius:"20px",borderColor:"green",color:"green" ,backgroundColor:"white" ,cursor:"pointer",fontSize:"16px" ,cursor:"pointer" }}>Cancel</button>
//       </div>
//     </div>
//   )
// }

// export default Tick;
