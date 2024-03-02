import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { db } from '../../firebase'; // Adjust the import path as necessary
import Logo from './user.png';
import { getDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const docRef = doc(db, "users", phone);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        if (userData.password === password) {
          alert("Login successful");
          // Save user details to local storage
          localStorage.setItem("name", userData.name);
          localStorage.setItem("email", userData.email);
          localStorage.setItem("password", userData.password);
          localStorage.setItem("phoneNumber", phone);
          // Navigate to "/"
          navigate("/");
        } else {
          alert("Incorrect password");
        }
      } else {
        alert("No user found with this phone number");
      }
    } catch (error) {
      console.error("Error fetching user: ", error);
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
      <Box sx={{ width: "50%", backgroundColor: "#1f2a40", height: "100%", justifyContent:'center', alignItems:'center', display:'flex' }}>
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
        <Typography variant="h4" gutterBottom sx={{ color: "green", fontSize: 50 }}>
          Login
        </Typography>
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: "20px", color: "#FFFFFF" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: "20px", fontSize: 20 }} onClick={handleLogin}>
          Login
        </Button>
        <Typography variant="body2" gutterBottom sx={{ color: "#FFFFFF", fontSize: 20 }}>
          Don't have an account? <Link href="#" sx={{ color: "green", fontSize: 20 }}>Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
