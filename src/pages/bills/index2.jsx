// import React, { useState } from "react";
// import { Box, Typography, TextField, Button, Grid, Backdrop, CircularProgress } from "@mui/material";
// import { doc, getDoc, collection, addDoc, updateDoc } from 'firebase/firestore';
// import { db } from '../../firebase'; // Adjust the import path as necessary
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import NoteIcon from "@mui/icons-material/Note";
// // import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import Header from "../../components/Header";
// import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import PaymentLogo from '../payment/paymentlogo.png'
// import SplitLogo from '../payment/splitlogo.webp'


// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import PieChart from "../../components/PieChart";
// const Billstwo = () => {

//   const handleViewTransactionsClick = () => {
//     alert('hello world')
//   };
 
// //   const [loading, setLoading] = useState(false);

//   const senderphone = localStorage.getItem('phoneNumber');
//   console.log(senderphone);

 

//   return (
//     <>
//       <Box m="10px">
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Header title="Pay your bills" subtitle="Make payment on time ⚡" />
//         </Box>
//       </Box>

//       {/* ----------------------- DO WORK HERE below   ------------------ */}
      
//       <div style={{ display: 'flex',flexDirection:"column" }}>
//         <div style={{display: 'flex',
//             flexDirection:"row"}}>
//         <div
//           style={{
//             width: 150,
//             height: 50,
//             backgroundColor: '#1f2a40',
//             margin: 15,
//             borderRadius: 20,
//             display: 'flex',
//             alignItems: 'center',
//             padding: '10px',
//             marginTop: 0,
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = '#106E1A';
//           }}
          
//         >
//           <LocalGroceryStoreIcon style={{ marginRight: '15px', fontSize: 25, color: '#fdca2c' }} />
//           <Typography style={{ color: 'white', fontWeight: 500, fontSize: 15 }}>Grocery Bill</Typography>
//         </div>

//         <div
//           style={{
//             width: 150,
//             height: 50,
//             backgroundColor: '#1f2a40',
//             margin: 15,
//             borderRadius: 20,
//             display: 'flex',
            
//             alignItems: 'center',
//             padding: '10px',
//             marginTop: 0,
//             cursor: 'pointer',
//             transition: 'background-color 0.3s',
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = '#263445';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#1f2a40';
//           }}
//         >
//           <FastfoodIcon style={{ marginRight: '15px', fontSize: 25, color: '#fdca2c' }} />
//           <Typography style={{ color: 'white', fontWeight: 500, fontSize: 15 }}>Food Bill</Typography>
//         </div>
//         </div>

        
//         {/* ??????????????????????????????????????????????????? */}

          
//         <div style={{width:"90%",height:"60vh",backgroundColor:"#1F2A40",margin:"0 auto",borderRadius:"20px",display:"flex",flexDirection:"column"}}>
//           <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
//           {/* First Div */}
//           <div
//             onClick={() => handleViewTransactionsClick()}
//             style={{
//               width: "50%",
//               height: 70,
//         //       #141B2D
//               backgroundColor: '#141B2D',
//               margin: 5,
//               borderRadius: 20,
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent:"center",
//               padding: '10px',
//               marginTop: 2,
//               cursor: 'pointer',
//               transition: 'background-color 0.3s',
//               // marginLeft:250
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#263445';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = '#1f2a40';
//             }}
//           >
//             {/* <ReceiptIcon style={{ marginRight: '15px', fontSize: 30, color: '#20b757' }} /> */}
//             <img src={PaymentLogo } alt="Logo" style={{ width: "60px", height: "50px", }} />
//             <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>View Transactions</Typography>
//           </div>

//           {/* Second Div */}
//           <div
//             onClick={() => handleViewTransactionsClick()}
//             style={{
//               width: "50%",
//               height: 70,
//               backgroundColor: '#1f2a40',
//               margin: 5,
//               borderRadius: 20,
//               display: 'flex',
//               alignItems: 'center',
//               padding: '10px',
//               marginTop: 2,
//               cursor: 'pointer',
//               transition: 'background-color 0.3s',
//               justifyContent:"center",
//               // marginLeft:250
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = '#263445';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = '#141B2D';
//             }}
//           >
//             {/* <ReceiptIcon style={{ marginRight: '15px', fontSize: 30, color: '#20b757' }} /> */}
//             <img src={SplitLogo } alt="Logo" style={{ width: "60px", height: "50px", }} />
//             <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>Split</Typography>
//           </div>

//           </div>

// {/* ************************************************************************ */}
// <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",marginTop:"60px"}}>
//   <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
//     <div
//       onClick={() => handleViewTransactionsClick()}
//       style={{
//         width: "400px",
//         height: 70,
//         backgroundColor: '#141B2D',
//         margin: 5,
//         borderRadius: 20,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent:"center",
//         padding: '10px',
//         marginTop: 2,
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.backgroundColor = '#263445';
//       }}
//     >
//       <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>amount</Typography>
//     </div>
//     <div
//       onClick={() => handleViewTransactionsClick()}
//       style={{
//         width: "400px",
//         height: 70,
//         backgroundColor: '#141B2D',
//         margin: 5,
//         borderRadius: 20,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent:"center",
//         padding: '10px',
//         marginTop: 2,
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.backgroundColor = '#263445';
//       }}
     
//     >
//       <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>amount to pay</Typography>
//     </div>
//   </div>
  
    
  
//   <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:"0 auto",marginTop:20}}>
//   <div
//       onClick={() => handleViewTransactionsClick()}
//       style={{
//         width: "400px",
//         height: 70,
//         backgroundColor: '#106E1A',
//         margin: 5,
//         borderRadius: 20,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent:"center",
//         padding: '10px',
//         marginTop: 50,
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//         marginLeft:100
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.backgroundColor = 'darkgreen';
//       }}
     
//     >
//       <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>Proceed</Typography>
//     </div>
//     {/* <div>
//     <Box m="10px" height="27rem" p="2px">

//           <PieChart />
//         </Box>
//         </div> */}
//   </div>
  

    
  
// </div>

//         </div>

        

        


//         {/* ?????????????//////////////////////////////////// */}
//       </div>

      

//       {/* Loading backdrop */}
    
//     </>
//   );
// };

// export default Billstwo;
