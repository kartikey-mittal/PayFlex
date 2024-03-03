import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EventIcon from "@mui/icons-material/Event";
import SecurityIcon from "@mui/icons-material/Security";
// import AddIcon from "@mui/icons-material/Add";
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

function CardDetail() {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleAddCard = async () => {
    // Update Firestore
    try {
      const localStoragePhoneNumber = localStorage.getItem('phoneNumber');
      const amountToAdd = Math.floor(Math.random() * 9001) + 1000; // Generate a random amount between 1000 and 10000
      const docRef = doc(db, 'users', localStoragePhoneNumber);
      await setDoc(docRef, { Total_Balance: amountToAdd }, { merge: true });

      // Update localStorage
      localStorage.setItem('Total_Balance', amountToAdd.toString());

      // Show success popup
      alert(`${amountToAdd} INR has been added to your account successfully.`);
    } catch (error) {
      console.error('Error adding amount to account: ', error);
    }
  };

  return (
    <div
      style={{
        width: "95%",
        backgroundColor: "#1f2a40",
        padding: "20px",
        borderRadius: "5px",
        marginLeft: 20,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          color: "white",
          marginLeft: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Account Details</h1>
        <button
          style={{
            padding: "7px",
            borderRadius: 10,
            height: 40,
            width: 70,
            marginTop: 10,
          }}
        >
          Visa ^
        </button>
      </div>
      <div
        style={{
          border: "1px dashed grey",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      ></div>
      <div
        style={{
          height: "34vw",
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: "50px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
            height: 100,
          }}
        >
          <Cards
            number={state.number}
            expiry={state.expiry}
            cvc={state.cvc}
            name={state.name}
            focused={state.focus}
          />
          <div
            style={{
              borderRight: "2px dashed grey",
              height: "250px", // Adjust the height as needed
              margin: "0 80px", // Adjust the margin as needed
            }}
          />
          <form
            style={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "column",
              marginRight: "100px",
              marginLeft: "0px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <AccountCircleIcon style={{ color: "white", marginRight: "10px" }} />
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                value={state.number}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                style={{
                  marginBottom: "20px",
                  padding: 9,
                  borderRadius: 10,
                  borderwidth: "none",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <EventNoteIcon style={{ color: "white", marginRight: "10px" }} />
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={state.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                style={{
                  marginBottom: "20px",
                  padding: 9,
                  borderRadius: 10,
                  borderwidth: "none",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <EventIcon style={{ color: "white", marginRight: "10px" }} />
              <input
                type="tel"
                name="expiry"
                placeholder="MM/YY Expiry"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                style={{
                  marginBottom: "20px",
                  padding: 9,
                  borderRadius: 10,
                  borderwidth: "none",
                  fontSize: "15px",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <SecurityIcon style={{ color: "white", marginRight: "10px" }} />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                style={{
                  marginBottom: "20px",
                  padding: 9,
                  borderRadius: 10,
                  borderwidth: "none",
                  fontSize: "15px",
                }}
              />
            </div>
          </form>
        </div>
        <div
          style={{
            width: "30%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ borderBottom: "2px dashed grey", width: "100%", marginTop: "30px" }}></div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
            <button onClick={handleAddCard} style={{ padding: "10px 40px", borderRadius: "20px", backgroundColor: "#20B756", color: "white", border: "none", cursor: "pointer", fontSize: "20px", marginBottom: "30px" }}>Add Card</button>
            <button style={{ padding: "10px 40px", borderRadius: "20px", borderColor: "green", color: "green", backgroundColor: "white", cursor: "pointer", fontSize: "20px" }}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;