import React from 'react';

const BillCard = ({ totalAmount, receiverName, paymentReason }) => {
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

  return (
    <div style={cardStyle}>
      <div style={headingStyle}>
        <h1>Scan, Share, and Split it!</h1>
      </div>
      <div style={maingrid}>
        <div style={insidegrid}>
          <h2>Total Amount</h2>
          <h3 style={{color:"green",fontSize:"25px"}}>₹53{totalAmount}</h3>
        </div>
        <div style={insidegrid}>
          <h2>Receiver Name</h2>
          <h3 style={{fontSize:"25px"}}>qasd{receiverName}</h3>
        </div>
        <div style={insidegrid}>
          <h2>Payment Reason</h2>
          <h3>{paymentReason}</h3>
        </div>
        <div style={insidegrid}>
          <h2>Payment Method</h2>
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
