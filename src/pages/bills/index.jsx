import React, { useState } from "react";
import { Box, Typography, TextField,  MenuItem, Select } from "@mui/material";
import { useEffect } from "react";

// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Header from "../../components/Header";

import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

import PaymentsIcon from '@mui/icons-material/Payments';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import FastfoodIcon from '@mui/icons-material/Fastfood';

import { PieChart } from 'react-minimal-pie-chart';

import { doc, collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path as necessary
const Bills = () => {

    const handlepayment = () => {
        setActiveTab('payment')
    };
    const handleSplitbtn = () => {
        setActiveTab('split')
    };


    useEffect(() => {
        const fetchStudents = async () => {
            const querySnapshot = await getDocs(collection(db, "users"));
            const studentNames = [];
            querySnapshot.forEach((doc) => {
                studentNames.push(doc.id);
            });
            setStudents(studentNames);
        };
        fetchStudents();
    }, []);

    //   const [loading, setLoading] = useState(false);

    const senderphone = localStorage.getItem('phoneNumber');
    console.log(senderphone);

    const [selectedStudent, setSelectedStudent] = useState('');
    const [students, setStudents] = useState([]);

    const [activeTab, setActiveTab] = useState('split');
    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };

    const [amount, setAmount] = useState('');
    const [payamount, setPayAmount] = useState('');
    const [friendAmount, setFriendAmount] = useState('');

    const handleAmountChange = () => {
        const randomAmount = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        setAmount(randomAmount);
    };

    const handleProceed = async () => {
        try {
            // Show loading state
            setLoading(true);

            // Construct the data object
            const data = {
                totalAmount: amount,
                myamount: friendAmount,
                senderamount: payamount,
                date: serverTimestamp() // This will store the current server timestamp
            };

            // Add the data to Firestore


            const userDocRef = doc(db, "users", "7678416005");
const splitsCollectionRef = collection(userDocRef, "splits");
await addDoc(splitsCollectionRef, data);


            // Hide loading state
            setLoading(false);

            // Show success alert
            alert('Data stored successfully!');
        } catch (error) {
            console.error("Error adding document: ", error);
            // Hide loading state
            setLoading(false);
            // Handle error, show error message to the user, etc.
            alert('Error occurred while storing data. Please try again.');
        }
    };

    // Declare loading state variable
    const [loading, setLoading] = useState(false);
console.log(loading);
    const hanldepayamount = (event) => {
        const inputValue = event.target.value;

        // Check if the input value is a valid number
        if (!isNaN(inputValue)) {
            const payable = parseFloat(inputValue);
            const totalAmount = parseFloat(amount);

            // Set the pay amount if it's a valid number
            setPayAmount(payable.toFixed(2));

            // Calculate and set the friend amount if both pay amount and total amount are valid numbers
            if (!isNaN(totalAmount)) {
                const friend = (totalAmount - payable).toFixed(2);
                setFriendAmount(friend);
            }
        }
    };




    return (
        <>
            <Box m="10px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="Pay your bills" subtitle="Make payment on time ⚡" />
                </Box>
            </Box>

            {/* ----------------------- DO WORK HERE below   ------------------ */}

            <div style={{ display: 'flex', flexDirection: "column" }}>
                <div style={{ display: 'flex', flexDirection: "row" }}>
                    <div
                        onClick={handleAmountChange}
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

                <div style={{ width: "90%", height: "60vh", backgroundColor: "#1F2A40", margin: "0 auto", borderRadius: "20px", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <div
                            onClick={() => handlepayment()}
                            style={{
                                width: "50%",
                                height: 70,
                                backgroundColor: activeTab === 'payment' ? '#141B2D' : '#1f2a40',
                                margin: 5,
                                borderRadius: 20,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "center",
                                padding: '10px',
                                marginTop: 2,
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}

                        >
                            <PaymentsIcon style={{ marginRight: '15px', fontSize: 25, color: '#fdca2c' }} />
                            <Typography style={{ color: 'white', fontWeight: 500, fontSize: 20 }}>Make Payment</Typography>
                        </div>

                        <div
                            onClick={() => handleSplitbtn()}
                            style={{
                                width: "50%",
                                height: 70,
                                backgroundColor: activeTab === 'split' ? '#141B2D' : '#1f2a40',
                                margin: 5,
                                borderRadius: 20,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '10px',
                                marginTop: 2,
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                justifyContent: "center",
                            }}

                        >
                            <CallSplitIcon style={{ marginRight: '15px', fontSize: 25, color: '#fdca2c' }} />
                            <Typography style={{ color: 'white', fontWeight: 600, fontSize: 25 }}>Split</Typography>
                        </div>
                    </div>

                    {activeTab === 'split' && (
                        <div className="SPLIT DIV">
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "20px" }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                                        <Box display="flex" alignItems="center" flexDirection="column">

                                            <TextField
                                                label="Amount"
                                                variant="outlined"
                                                name="amount"
                                                value={amount}
                                                onChange={handleAmountChange}
                                                fullWidth
                                                InputProps={{
                                                    style: { color: 'white', backgroundColor: '#141b2d', fontSize: '1rem', fontWeight: 'bold', height: '100%' },
                                                    startAdornment: <Typography variant="body1" style={{ color: 'white', marginRight: '5px', fontSize: '1rem', fontWeight: 600 }}>₹</Typography>
                                                }}
                                                InputLabelProps={{ style: { color: 'white', fontWeight: 'bold', fontSize: '1.1rem' } }}
                                            />
                                        </Box>

                                        <Box display="flex" alignItems="center" flexDirection="column" style={{ marginTop: 10 }}>

                                            <TextField
                                                label="Amount To Pay"
                                                variant="outlined"
                                                name="amount"
                                                value={payamount}
                                                onChange={hanldepayamount}
                                                fullWidth
                                                InputProps={{
                                                    style: { color: '#20ac55', backgroundColor: '#141b2d', fontSize: '1.5rem', fontWeight: 'bold', height: '100%' },
                                                    startAdornment: <Typography variant="body1" style={{ color: 'white', marginRight: '5px', fontSize: '1rem', fontWeight: 600 }}>₹</Typography>
                                                }}
                                                InputLabelProps={{ style: { color: 'white', fontWeight: 'bold', fontSize: '1.1rem' } }}
                                            />
                                        </Box>

                                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '50px', marginTop: 10, width: '100%' }}>


                                            <Typography style={{ color: 'white', fontWeight: 400, fontSize: 15, marginRight: 10 }}>Contacts</Typography>
                                            {/* <PersonAddIcon style={{ marginRight: '0px', fontSize: 15, color: '#fff' }} /> */}
                                            <div >
                                                <Select
                                                    value={selectedStudent}
                                                    onChange={(e) => setSelectedStudent(e.target.value)}
                                                    style={{ width: 250, height: 50, backgroundColor: '#263445', margin: 0, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: "center", padding: '10px', marginTop: 10, cursor: 'pointer', transition: 'background-color 0.3s', marginRight: 0 }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#263445';
                                                    }}
                                                >
                                                    {students.map((student, index) => (
                                                        <MenuItem key={index} value={student}>{student}</MenuItem>
                                                    ))}
                                                </Select>


                                            </div>
                                        </div>

                                    </div>
                                    <div style={{ display: "flex", flexDirection: "row", marginRight: '' }}>
                                        <div
                                            onClick={handleProceed}
                                            style={{
                                                width: "300px",
                                                height: 50,
                                                backgroundColor: '#20ac55',
                                                margin: 5,
                                                borderRadius: 20,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: "center",
                                                padding: '10px',
                                                marginTop: 50,
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s',
                                                marginLeft: 0
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.backgroundColor = 'green';
                                            }}
                                        >
                                            <Typography style={{ color: 'white', fontWeight: 500, fontSize: 25 }}>Proceed</Typography>
                                        </div>

                                    </div>


                                </div>


                                <div>


                                    <PieChart
                                        data={[
                                            { title: 'Payable Amount', value: parseFloat([payamount]), color: '#20ac55' },
                                            { title: 'Friend Amount', value: parseFloat(friendAmount), color: '#C13C37' },
                                        ]}
                                    />

                                </div>



                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Bills;
