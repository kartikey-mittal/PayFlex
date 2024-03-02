import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import Logo from './user.png';

const SignupPage = () => {
 return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Side with Logo */}
      <Box sx={{ width: "50%", backgroundColor: "#1f2a40", height: "100%",justifyContent:'center',alignItems:'center',alignContent:'center',display:'flex' }}>
        <img src={Logo} alt="Logo" style={{ width: "500px", height: "auto", margin: "auto", display: "block" }} />
      </Box>

      {/* Right Side with Login Form */}
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#000",
          height: "100%",
          padding: "50px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "green",fontSize:50 }}>
          SignUp
        </Typography>
        <TextField
          label="Name"
          type="normal"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px", color: "#FFFFFF" }} // Ensure text color is white
          InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }} // Change label color and font size
          inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }} // Change inside text color and font size
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px", color: "#FFFFFF" }} // Ensure text color is white
          InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }} // Change label color and font size
          inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }} // Change inside text color and font size
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px", color: "#FFFFFF" }} // Ensure text color is white
          InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }} // Change label color and font size
          inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }} // Change inside text color and font size
        />
        <TextField
          label="Phone Number"
          type="numeric"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px", color: "#FFFFFF" }} // Ensure text color is white
          InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }} // Change label color and font size
          inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }} // Change inside text color and font size
        />
        
        <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: "20px",fontSize:20 }}>
          Login
        </Button>
        <Typography variant="body2" gutterBottom sx={{ color: "#FFFFFF",fontSize:20 }}>
          Don't have an account? <Link href="#" sx={{ color: "blue",fontSize:20 }}>Log In</Link>
        </Typography>
      </Box>
    </Box>
 );
};

export default SignupPage;
