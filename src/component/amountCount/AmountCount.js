import React from 'react';

const AmountCount = ({ title, amount }) => {
  return (
    <div className="individual">
      <div className="individual__tip">
        <h2 className="individual__tip--amount">{title}</h2>
        <p className="individual__tip--person">/ person</p>
      </div>
      <div className="individual__amount">
        <h2 className="individual__amount--value">
          ${amount ? amount.toFixed(2) : 0}
        </h2>
      </div>
    </div>
  );
};

export default AmountCount;
