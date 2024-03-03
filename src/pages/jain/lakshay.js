
import React from 'react';
import CreditCard from './CreditCard';

export const Lakshay = () => {
 return (
    <div className="p-6 ">
      <CreditCard
        cardImage="https://www.cardexpert.in/wp-content/uploads/2015/07/visa_signature_credit_card.png"
        name="John Doe"
        cardNumber="1234 5678 9101 1121"
        expiryDate="12/24"
        cvv="123"
      />
     
    </div>
 );
};

export default Lakshay;

