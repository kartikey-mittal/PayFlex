import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Backdrop, CircularProgress } from "@mui/material";
import { doc, getDoc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path as necessary
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteIcon from "@mui/icons-material/Note";
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Header from "../../components/Header";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import FastfoodIcon from '@mui/icons-material/Fastfood';
const Bills = () => {
 
//   const [loading, setLoading] = useState(false);

  const senderphone = localStorage.getItem('phoneNumber');
  console.log(senderphone);

 

  return (
    <>
      <Box m="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Pay your bills" subtitle="Make payment on time ⚡" />
        </Box>
      </Box>

      {/* ----------------------- DO WORK HERE below   ------------------ */}
      
      <div style={{ display: 'flex' }}>
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

      

      {/* Loading backdrop */}
    
    </>
  );
};

export default Bills;
