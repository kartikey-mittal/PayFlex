// import { useState } from "react";

// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import Header from "../../components/Header";
// import { tokens } from "../../theme";

// const Calendar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [currentEvents, setCurrentEvents] = useState([]);

//   const handleDateClick = (selected) => {
//     const title = prompt("Please enter a new title for your event");
//     const calendarApi = selected.view.calendar;
//     calendarApi.unselect();

   
//   };

  

//   return (
//     <>    <Box m="20px">
//       <Header title="Send Money" subtitle="Send Payment Seamlessly!" /> 
//     </Box>

   

//     <div style={{width:650,height:500,backgroundColor:'1f2a40'}}>
// Hello
//     </div>
//     <div
    
//     style={{
//       width: 400,
//       height: 70,
//       backgroundColor: '#1f2a40',
//       margin: 15,
//       borderRadius: 20,
//       display: 'flex',
//       alignItems: 'center',
//       padding: '10px',
//       marginTop: 50,
//       cursor: 'pointer',
//       transition: 'background-color 0.3s',
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.backgroundColor = '#263445';
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.backgroundColor = '#1f2a40';
//     }}
//   >
    
//     <Typography style={{ color: 'white', fontWeight: 600, fontSize: 30 }}>View Transactions</Typography>
//   </div>

//     </>

//   );
// };

// export default Calendar;
