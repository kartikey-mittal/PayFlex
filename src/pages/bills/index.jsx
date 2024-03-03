import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Backdrop, CircularProgress, MenuItem, Select } from "@mui/material";
import { doc, getDoc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path as necessary
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteIcon from "@mui/icons-material/Note";
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Header from "../../components/Header";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PaymentLogo from '../payment/paymentlogo.png'
import SplitLogo from '../payment/splitlogo.webp'


import FastfoodIcon from '@mui/icons-material/Fastfood';
import PieChart from "../../components/PieChart";
const Bills = () => {

  const handleViewTransactionsClick = () => {
    alert('hello world')
  };
 
//   const [loading, setLoading] = useState(false);

  const senderphone = localStorage.getItem('phoneNumber');
  console.log(senderphone);

  const [selectedStudent, setSelectedStudent] = useState('');

  const students = ['Aviral', 'Lakshay', 'Aditya', 'Kartikey'];

  return (
    <>
      <Box m="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Pay your bills" subtitle="Make payment on time ⚡" />
        </Box>
      </Box>

      {/* ----------------------- DO WORK HERE below   ------------------ */}
      
      <div style={{ display: 'flex',flexDirection:"column" }}>
        <div style={{display: 'flex', flexDirection:"row"}}>
          <div
            style={{
              width: 150,
              height: 50,
              backgroundColor: '#1f2a40',
              margin: 15,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              marginTop: 0,
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#106E1A';
            }}
          >
            <LocalGroceryStoreIcon style={{ marginRight: '15px', fontSize: 25, color: '#fdca2c' }} />
            <Typography style={{ color: 'white', fontWeight: 500, fontSize: 15 }}>Grocery Bill</Typography>
          </div>

          <div
            style={{
              width: 150,
              height: 50,
              backgroundColor: '#1f2a40',
              margin: 15,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              marginTop: 0,
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#263445';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1f2a40';
            }}
          >
            <FastfoodIcon style={{ marginRight: '15px', fontSize: 25, color: '#fdca2c' }} />
            <Typography style={{ color: 'white', fontWeight: 500, fontSize: 15 }}>Food Bill</Typography>
          </div>
        </div>

        <div style={{width:"90%",height:"60vh",backgroundColor:"#1F2A40",margin:"0 auto",borderRadius:"20px",display:"flex",flexDirection:"column"}}>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <div
              onClick={() => handleViewTransactionsClick()}
              style={{
                width: "50%",
                height: 70,
                backgroundColor: '#1f2a40',
                margin: 5,
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent:"center",
                padding: '10px',
                marginTop: 2,
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#263445';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1f2a40';
              }}
            >
              <img src={PaymentLogo } alt="Logo" style={{ width: "60px", height: "50px", }} />
              <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>View Transactions</Typography>
            </div>

            <div
              onClick={() => handleViewTransactionsClick()}
              style={{
                width: "50%",
                height: 70,
                backgroundColor: '#141B2D',
                margin: 5,
                borderRadius: 20,
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
                marginTop: 2,
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                justifyContent:"center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#263445';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#141B2D';
              }}
            >
              <img src={SplitLogo } alt="Logo" style={{ width: "60px", height: "50px", }} />
              <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>Split</Typography>
            </div>
          </div>

          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around",marginTop:"20px"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
              <div
                style={{
                  width: "400px",
                  height: 70,
                  backgroundColor: '#263445',
                  margin: 5,
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:"center",
                  padding: '10px',
                  marginTop: 2,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#263445';
                }}
              >
                <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>amount</Typography>
              </div>
              <div
                style={{
                  width: "400px",
                  height: 70,
                  backgroundColor: '#1f2a40',
                  
                  margin: 5,
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:"center",
                  padding: '10px',
                  marginTop: 2,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#263445';
                }}
              >
                <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>Friends Dropdown List</Typography>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"left",marginLeft:"85px",marginTop:"10px"}}>
              <div
                style={{
                  width: "400px",
                  height: 70,
                  backgroundColor: '#263445',
                  margin: 5,
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:"center",
                  padding: '10px',
                  marginTop: 2,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#263445';
                }}
              >
                <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>amount to pay</Typography>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              <div
                style={{
                  width: "400px",
                  height: 70,
                  backgroundColor: '#106E1A',
                  margin: 5,
                  borderRadius: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:"center",
                  padding: '10px',
                  marginTop: 50,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s',
                  marginLeft:100
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'darkgreen';
                }}
              >
                <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>Proceed</Typography>
              </div>
              <div>
                <Select
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  style={{ width: 400, height: 70, backgroundColor: '#263445', margin: 5, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent:"center", padding: '10px', marginTop: -70, cursor: 'pointer', transition: 'background-color 0.3s', marginRight:90}}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#263445';
                  }}
                >
                  {students.map((student, index) => (
                    <MenuItem key={index} value={student}>{student}</MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bills;
