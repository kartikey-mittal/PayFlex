import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteIcon from "@mui/icons-material/Note";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ReceiptIcon from '@mui/icons-material/Receipt';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Payment = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [formData, setFormData] = useState({
    accountNumber: '',
    note: '',
    amount: ''
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Box m="10px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Send Payment" subtitle="Send money to your loved ones ⚡" />
        </Box>
      </Box>
      <div style={{ display: 'flex' }}>
        <div
          // onClick={() => handleViewTransactionsClick()}
          style={{
            width: 250,
            height: 70,
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
          <AccountBalanceWalletIcon style={{ marginRight: '15px', fontSize: 30, color: '#20b757' }} />
          <Typography style={{ color: 'white', fontWeight: 600, fontSize: 30 }}>To Account</Typography>
        </div>

        <div
          // onClick={() => handleViewTransactionsClick()}
          style={{
            width: 250,
            height: 70,
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
          <QrCodeScannerIcon style={{ marginRight: '15px', fontSize: 30, color: '#20b757' }} />
          <Typography style={{ color: 'white', fontWeight: 600, fontSize: 30 }}>Scan & Pay</Typography>
        </div>
      </div>



      <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="center">
          <Box
            style={{
              width: '90%',
              backgroundColor: '#1f2a40',
              borderRadius: 20,
              display: 'flex-column',
              alignItems: 'stretch',
              padding: '20px',
              marginTop: 10,
            }}
          >


            <Typography style={{ color: 'white', fontWeight: 600, fontSize: 30, marginBottom: '20px' }}>Send</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} style={{ display: 'flex', flexDirection: 'column' }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <AccountCircleIcon style={{ color: 'white', marginRight: '10px' }} />
                  <TextField
                    label="Account Number"
                    variant="outlined"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleFormChange}
                    fullWidth
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <NoteIcon style={{ color: 'white', marginRight: '10px' }} />
                  <TextField
                    label="Note"
                    variant="outlined"
                    name="note"
                    value={formData.note}
                    onChange={handleFormChange}
                    fullWidth
                    InputProps={{ style: { color: 'white' } }}
                    InputLabelProps={{ style: { color: 'white' } }}
                  />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Typography variant="h5" style={{ color: 'white', fontWeight: 'normal', marginBottom: '20px' }}>Amount</Typography>
                  {/* <MonetizationOnIcon style={{ color: 'white', marginBottom: '10px', fontSize: '3rem' }} /> */}
                  <TextField
                    label="Amount"
                    variant="outlined"
                    name="amount"
                    value={formData.amount}
                    onChange={handleFormChange}
                    fullWidth
                    InputProps={{
                      style: { color: 'black', backgroundColor: '#4CAF50', fontSize: '1.5rem', fontWeight: 'bold', height: '100%' },
                      startAdornment: <Typography variant="body1" style={{ color: 'white', marginRight: '5px', fontSize: '2rem', fontWeight: 600 }}>₹</Typography>
                    }}
                    InputLabelProps={{ style: { color: 'white', fontWeight: 'bold', fontSize: '1.1rem' } }}
                  />
                </Box>

              </Grid>

            </Grid>

            <div
              onClick={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '30%',
                marginTop: '20px',
                fontSize: '1.1rem',
                backgroundColor: 'white',
                color: '#4CAF50',
                padding: '10px',
                borderRadius: '20px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'lightgray';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              <span style={{ display: 'flex', justifyContent: 'center' }}>Make Payment</span>
            </div>

          </Box>
        </Box>
      </form>
    </>
  );
};

export default Payment;

