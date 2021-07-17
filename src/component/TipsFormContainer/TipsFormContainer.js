import React from 'react';

const TipsFormContainer = () => {
  return (
    <div className="tips">
      <h2 className="tips__header">Select tip %</h2>
      <div className="tips-value">
        <label className="tips-value__fixed">
          <input
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="5"
          />
          <span className="tips-value__fixed--span">5%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="10"
          />
          <span className="tips-value__fixed--span">10%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="15"
          />
          <span className="tips-value__fixed--span">15%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="25"
          />
          <span className="tips-value__fixed--span">25%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="50"
          />
          <span className="tips-value__fixed--span">50%</span>
        </label>
        <label>
          <input
            className="tips-value__custom"
            type="text"
            placeholder="Custom"
          />
        </label>
      </div>
    </div>
  );
};

export default TipsFormContainer;
