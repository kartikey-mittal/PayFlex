import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { db } from '../../firebase'; // Import your Firebase database instance
import { collection, getDocs } from 'firebase/firestore';
import Header from "../../components/Header";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    const getTransactionsForCurrentUser = async () => {
      try {
        const currentUserPhone = localStorage.getItem('phoneNumber');
        const transactionsRef = collection(db, 'users', currentUserPhone, 'transactions');
        const querySnapshot = await getDocs(transactionsRef);
        const transactionsData = [];
  
        querySnapshot.forEach((doc) => {
          const transactionData = doc.data();
          if (transactionData.Sender.phone === currentUserPhone) {
            // If the current user sent the transaction, include it in the output
            transactionsData.push({
              id: transactionsData.length + 1, // Incremental ID
              name: transactionData.Receiver.name,
              phone: transactionData.Receiver.phone,
              email: transactionData.Receiver.email,
              amount: transactionData.Amount,
              date: transactionData.Date,
              note: transactionData.Note,
              access: 'outgoing'
            });
          }
          else{
            transactionsData.push({
              id: transactionsData.length + 1, // Incremental ID
              name: transactionData.Sender.name,
              phone: transactionData.Sender.phone,
              email: transactionData.Sender.email,
              amount: transactionData.Amount,
              date: transactionData.Date,
              note: transactionData.Note,
              access: 'incoming'
            });
          }
        });
  
        setTransactions(transactionsData);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    getTransactionsForCurrentUser();
  }, []);

  const columns = [
    { field: "id", headerName: "Id" },
    { field: "name", headerName: "Name", width: 120 },
    { field: "amount", headerName: "Amount", type: "number", width: 120 },
    { field: "phone", headerName: "Phone Number", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "date", headerName: "Date", width: 200 },
    {
      field: "access",
      headerName: "Status",
      width: 150,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="100%"
            m="0 auto"
            p="1px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "incoming" ? 'green' : 'red'
            }
            borderRadius="4px"
          >
            {access === "incoming" && <ArrowDownwardIcon />}
            {access === "outgoing" && <ArrowOutwardIcon />}
            <Typography color='white' sx={{ ml: "5px" ,pr:'5px'}}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TRANSACTIONS" subtitle="See your transactions" />
      </Box>
      <Box
        m="8px 0 0 0"
        height="80vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={transactions} columns={columns} />
      </Box>
    </Box>
  );
};

export default Transaction;
