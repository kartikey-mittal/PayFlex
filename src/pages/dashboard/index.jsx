import {
  Box,

  // IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../data/mockData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
// import EmailIcon from "@mui/icons-material/Email";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
// import PersonAddIcon from "@mui/icons-material/PersonAdd";
// import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
// import LineChart from "../../components/LineChart";
// import GeographyChart from "../../components/GeographyChart";
// import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import ReceiptIcon from '@mui/icons-material/Receipt';
import ContactlessIcon from '@mui/icons-material/Contactless';
import GroupIcon from '@mui/icons-material/Group';
// import { Height } from "@mui/icons-material";
// import CallMadeIcon from '@mui/icons-material/CallMade';
import PieChart from "../../components/PieChart";
import React, { useState, useEffect } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import { collection, getDocs, query,doc,getDoc } from "firebase/firestore";
import { db } from '../../firebase'; // Adjust the import path as necessary

const Dashboard = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const colors = tokens(theme.palette.mode);

  // const [alluser,setAllUser] = useState(5)
  const [totalBalance, setTotalBalance] = useState(null);
  const [totalSpending, setTotalSpending] = useState(null)
  const [totalTransactions, setTotalTransactions] = useState(null);

  const handleSendMoneyClick = () => {
    alert('hello world')
  };
  const handleViewTransactionsClick = () => {
    alert('hello world')
  };
 
  const phoneNumber = localStorage.getItem("phoneNumber");
  console.log(phoneNumber);
  useEffect(() => {
    const fetchUserData = async () => {
       const phoneNumber = localStorage.getItem("phoneNumber"); // Assuming phone number is stored in localStorage
       if (phoneNumber) {
         const userDocRef = doc(db, "users", phoneNumber);
         const userDocSnap = await getDoc(userDocRef);
      
         if (userDocSnap.exists()) {
           const userData = userDocSnap.data();
           setTotalBalance(userData.Total_Balance);
           setTotalSpending(userData.Spending);
   
           // Fetch the number of transactions
           const transactionsCollectionRef = collection(userDocRef, "transactions");
           const transactionsQuery = query(transactionsCollectionRef);
           const transactionsSnapshot = await getDocs(transactionsQuery);
           setTotalTransactions(transactionsSnapshot.size);
         }
       }
    };
   
    fetchUserData();
   }, []);

  return (
    <>
      <Box m="20px">
        {/* HEADER */}

        <Box
          display={smScreen ? "flex" : "block"}
          flexDirection={smScreen ? "row" : "column"}
          justifyContent={smScreen ? "space-between" : "start"}
          alignItems={smScreen ? "center" : "start"}
          m="10px 0"
        >
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

          <Box>

          </Box>
        </Box>

        {/* GRID & CHARTS */}
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={totalBalance ? `₹ ${totalBalance}` : "Loading..."}
                subtitle="Total Balance"
                progress="0.75"
                increase="+14%"
                icon={
                  <CurrencyRupeeIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title={totalSpending ? `₹ ${totalSpending}` : "Loading..."}
                subtitle="Total Spending"
                progress="0.50"
                increase="+21%"
                icon={
                  <ContactlessIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                 title={totalTransactions !== null ? `${totalTransactions}` : "Loading..."}
                subtitle="Total Transactions"
                progress="0.30"
                increase="+5%"
                icon={
                  <ReceiptIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
            <Box
              width="100%"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StatBox
                title="5"
                subtitle="Total Users"
                progress="0.80"
                increase="+43%"
                icon={
                  <GroupIcon
                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                  />
                }
              />
            </Box>
          </Grid>



          <Grid
            xs={12}
            sm={12}
            md={8}
            lg={8}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {/* <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]}>
              <Box
                mt="25px"
                p="0 30px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                  >
                    Revenue Generated
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.greenAccent[500]}
                  >
                    $58,373,698
                  </Typography>
                </Box>
                <Box>
                  <IconButton>
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </IconButton>
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0 0">
                <LineChart isDashboard={true} />
              </Box>
            </Box>
          </Grid> */}



            {/* <Grid xs={12}>
            <Box backgroundColor={colors.primary[400]} padding="30px">
              <Typography
                variant="h5"
                fontWeight="600"
                sx={{ marginBottom: "15px" }}
              >
                Geography Based Traffic
              </Typography>
              <Box height="200px">
                <GeographyChart isDashboard={true} />
              </Box>
            </Box>
          </Grid> */}
          </Grid>

        </Grid>


        {/* ----------------- send payment btn -------------- */}
        <Box m="10px" height="27rem" p="2px">

          <PieChart />
        </Box>


      </Box>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ display: 'flex' }}>
          {/* First Div */}
          <div
            onClick={() => handleSendMoneyClick()}
            style={{
              width: 300,
              height: 70,
              backgroundColor: '#1f2a40',
              margin: 15,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              marginTop: 50,
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
            <SendIcon style={{ marginRight: '15px', fontSize: 30, color: '#20b757' }} />
            <Typography style={{ color: 'white', fontWeight: 600, fontSize: 30 }}>Send Money</Typography>
          </div>

          {/* Second Div */}
          <div
            onClick={() => handleViewTransactionsClick()}
            style={{
              width: 400,
              height: 70,
              backgroundColor: '#1f2a40',
              margin: 15,
              borderRadius: 20,
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              marginTop: 50,
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
            <ReceiptIcon style={{ marginRight: '15px', fontSize: 30, color: '#20b757' }} />
            <Typography style={{ color: 'white', fontWeight: 600, fontSize: 30 }}>View Transactions</Typography>
          </div>
        </div>


      </div>




    </>
  );
};

export default Dashboard;
