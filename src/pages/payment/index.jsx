import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Backdrop, CircularProgress } from "@mui/material";
import { doc, getDoc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path as necessary
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NoteIcon from "@mui/icons-material/Note";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Header from "../../components/Header";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';

const Payment = () => {
  const [formData, setFormData] = useState({
    accountNumber: '',
    note: '',
    amount: ''
  });
  const [loading, setLoading] = useState(false);

  const senderphone = localStorage.getItem('phoneNumber');
  console.log(senderphone);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading dialog

    try {
      // Check if the account number exists in the users collection
      const docRef = doc(db, 'users', formData.accountNumber);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        // Account number exists, handle the submission
        console.log('Account number exists:', formData);
        
        // Update receiver's Total_Balance
        const receiverData = docSnap.data();
        const updatedReceiverBalance = receiverData.Total_Balance + parseFloat(formData.amount); // Assuming Total_Balance is a numeric field
        await updateDoc(docRef, { Total_Balance: updatedReceiverBalance });
  
        // Get sender's data
        const senderDocRef = doc(db, 'users', senderphone);
        const senderDocSnap = await getDoc(senderDocRef);
  
        if (senderDocSnap.exists()) {
          const senderData = senderDocSnap.data();
  
          // Update sender's Total_Balance
          const updatedSenderBalance = senderData.Total_Balance - parseFloat(formData.amount);
          const updatedSpending = senderData.Spending + parseFloat(formData.amount);
          await updateDoc(senderDocRef, { Total_Balance: updatedSenderBalance });
          await updateDoc(senderDocRef, { Spending: updatedSpending });
  
          // Create transaction document
          const transactionData = {
            Sender: {
              phone: senderphone,
              email: senderData.email, // Add sender's email
              name: senderData.name
            },
            Receiver: {
              phone: formData.accountNumber,
              email: receiverData.email, // Add receiver's email
              name: receiverData.name
            },
            Amount: parseFloat(formData.amount),
            Note: formData.note || '',
            Date: new Date().toISOString()
          };
          await addDoc(collection(db, 'transactions'), transactionData);
  

          const senderTransactionsRef = collection(db, 'users', senderphone, 'transactions');
          await addDoc(senderTransactionsRef, transactionData);
  
          // Add transaction data to receiver's transactions subcollection
          const receiverTransactionsRef = collection(db, 'users', formData.accountNumber, 'transactions');
          await addDoc(receiverTransactionsRef, transactionData);

          // Clear the form data after successful submission
          setFormData({
            accountNumber: '',
            note: '',
            amount: ''
          });
          
          alert('Transaction successful');
        } else {
          console.error('Sender data not found');
          alert('Sender data not found');
        }
      } else {
        // Account number does not exist
        console.log('Account number does not exist');
        alert('Receiver not found');
      }
    } catch (error) {
      console.error('Error processing transaction:', error);
      alert('Error processing transaction');
    } finally {
      setLoading(false); // Hide loading dialog
    }
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

            <Button
              onClick={handleSubmit}
              style={{
                width: '50%',
                marginTop: '20px',
                fontSize: '1.1rem',
                backgroundColor: 'white',
                color: '#4CAF50',
                borderRadius: '20px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'lightgray';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
              }}
            >
              Make Payment
            </Button>
          </Box>
        </Box>
      </form>

      {/* Loading backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Payment;
