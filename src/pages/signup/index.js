// SignupPage.js
import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { db } from '../../firebase'; // Adjust the import path as necessary
import Logo from './user.png';
import { setDoc,doc } from "firebase/firestore";

const SignupPage = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const Total_Balance = 0;
 const Spending =0;

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await setDoc(doc(db, "users", phoneNumber), {
      name,
      email,
      password,
      Total_Balance,
      Spending, // Be cautious with storing passwords, consider hashing or using Firebase Authentication
      
    });
    console.log("User added to Firestore");

    // Save form data to localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("phoneNumber", phoneNumber);

    console.log("Form data saved to localStorage");
  } catch (error) {
    console.error("Error adding user to Firestore: ", error);
  }
};


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
      <Box sx={{ width: "50%", backgroundColor: "#1f2a40", height: "100%", justifyContent:'center',alignItems:'center',alignContent:'center',display:'flex' }}>
        <img src={Logo} alt="Logo" style={{ width: "500px", height: "auto", margin: "auto", display: "block" }} />
      </Box>

      {/* Right Side with Signup Form */}
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
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginBottom: "20px", color: "#FFFFFF" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }}
            inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }}
          />
          {/* Other Fields */}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginBottom: "20px", color: "#FFFFFF" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }}
            inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginBottom: "20px", color: "#FFFFFF" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }}
            inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }}
          />
          <TextField
            label="Phone Number"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ marginBottom: "20px", color: "#FFFFFF" }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            InputLabelProps={{ sx: { color: '#fff', fontSize: '1.2rem' } }}
            inputProps={{ style: { color: '#fff', fontSize: '1.2rem' } }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: "20px",fontSize:20 }} type="submit">
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" gutterBottom sx={{ color: "#FFFFFF",fontSize:20 }}>
          Already have an account? <Link href="#" sx={{ color: "blue",fontSize:20 }}>Log In</Link>
        </Typography>
      </Box>
    </Box>
 );
};

export default SignupPage;
