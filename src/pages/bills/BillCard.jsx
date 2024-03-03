import React, { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Adjust the import path as necessary





const BillCard = ({ totalAmount, receiverName, paymentReason }) => {

  const [splitData, setSplitData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const senderPhone = localStorage.getItem('phoneNumber');
      const userDocRef = doc(db, 'users', senderPhone);
      const userDocSnap = await getDoc(userDocRef);
      
      if (userDocSnap.exists()) {
        const splitCollectionRef = collection(userDocRef, 'splits');
        const splitDocs = await getDocs(splitCollectionRef);
        
        if (!splitDocs.empty) {
          const splitDataArray = [];
          splitDocs.forEach((doc) => {
            splitDataArray.push(doc.data());
          });
          setSplitData(splitDataArray);
        } else {
          alert('No split data found for this user.');
        }
      } else {
        alert('User document not found.');
      }
      setIsLoading(false); // Set loading to false after fetching data
    };
  
    fetchData();
  }, []);

  if (isLoading) {
    return <div>NO DATA FOUND...</div>; // Render loading state while data is being fetched
  }

  if (!splitData || splitData.length === 0) {
    return null; // If no split data found, return null
  }
  
  // Log each data point separately
  console.log("Date:", splitData && splitData[0] && splitData[0].date);
  console.log("My Amount:", splitData && splitData[0] && splitData[0].myamount);
  console.log("Sender Amount:", splitData && splitData[0] && splitData[0].senderamount);
  console.log("Total Amount:", splitData && splitData[0] && splitData[0].totalAmount);
  

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '80%',
    margin: '0 auto',
    marginTop: '10px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    width: '40%',
    margin: '0 auto',
  };

  const maingrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  };

  const insidegrid = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
  };

  const selectStyle = {
    padding: '8px 16px',
    borderRadius: '15px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    cursor: 'pointer',
  };
console.log(splitData);
  return (
    <div style={cardStyle}>
       
      <div style={headingStyle}>
        <h1>Scan, Share, and Split it!</h1>
      </div>
      <div style={maingrid}>
        <div style={insidegrid}>
          <h2  style={{fontSize:10,color:'#f4f4f4',fontWeight:500}}>Total Amount</h2>
          {/* <h3 style={{color:"green",fontSize:"25px"}}>₹ {totalAmount}</h3> */}
          {splitData && splitData.length > 0 && (
        // <h2>My Amount: ₹ {splitData[0].myamount}</h2>
        <h3 style={{color:"green",fontSize:"25px"}}>₹ {splitData[0].totalAmount}</h3>
      )}
        </div>
        <div style={insidegrid}>
          <h2  style={{fontSize:10,color:'#f4f4f4',fontWeight:500}}>Date</h2>
          
          {splitData && splitData.length > 0 && (
        // <h2>My Amount: ₹ {splitData[0].myamount}</h2>
        <h3 style={{color:"white",fontSize:"15px"}}>{new Date(splitData[0].date.seconds * 1000).toLocaleString()}</h3>
      )}
        </div>
        <div style={insidegrid}>
          <h2 style={{fontSize:10,color:'#f4f4f4',fontWeight:500}}>Payable Amount</h2>
          <h3>{paymentReason}</h3>
          {splitData && splitData.length > 0 && (
        // <h2>My Amount: ₹ {splitData[0].myamount}</h2>
        <h3 style={{color:"white",fontSize:"20px"}}>₹ {splitData[0].myamount}</h3>
      )}
        </div>
        <div style={insidegrid}>
          <h2  style={{fontSize:10,color:'#f4f4f4',fontWeight:500}}>Payment Method</h2>
          <select style={selectStyle}>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
            <option value="netbanking">Netbanking</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          style={{
            marginTop: '50px',
            padding: '10px 16px',
            borderRadius: '15px',
            backgroundColor: '#106E1A',
            color: 'white',
            fontSize: '16px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Settle Payment
        </button>
      </div>
    </div>


  );
};

export default BillCard;
