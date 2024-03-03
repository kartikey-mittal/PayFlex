

import React from 'react';

const CreditCard = ({ cardImage, name, cardNumber, expiryDate, cvv }) => {
 return (
    <div className="flex items-center bg-white shadow rounded-lg p-1 w-[50%]">
      <img src={cardImage} alt="Credit Card" className="h-[50%] w-[50%] object-cover rounded-lg mr-4" />
      <div className="flex-grow">
        <p className="text-lg font-semibold text-gray-800">{name}</p>
        <p className="text-base text-gray-800">Card Number: {cardNumber}</p>
        <p className="text-base text-gray-800">Expiry Date: {expiryDate}</p>
        <p className="text-base text-gray-800">CVV: {cvv}</p>
      </div>
    </div>
    
 );
};

export default CreditCard;

