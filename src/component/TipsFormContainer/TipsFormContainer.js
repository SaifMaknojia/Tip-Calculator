import React from 'react';

const TipsFormContainer = ({
  input,
  handleChange,
  value,
  handleCustomTipChange
}) => {
  return (
    <div className="tips">
      <h2 className="tips__header">Select tip %</h2>
      <div className="tips-value">
        <label className="tips-value__fixed">
          <input
            onChange={handleChange}
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="5"
            id="5"
            checked={input === '5'}
          />
          <span className="tips-value__fixed--span">5%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            onChange={handleChange}
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="10"
            id="10"
            checked={input === '10'}
          />
          <span className="tips-value__fixed--span">10%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            onChange={handleChange}
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            id="15"
            value="15"
            checked={input === '15'}
          />
          <span className="tips-value__fixed--span">15%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            onChange={handleChange}
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            id="25"
            value="25"
            checked={input === '25'}
          />
          <span className="tips-value__fixed--span">25%</span>
        </label>
        <label className="tips-value__fixed">
          <input
            onChange={handleChange}
            className="tips-value__fixed--input"
            type="radio"
            name="tip"
            value="50"
            id="50"
            checked={input === '50'}
          />
          <span className="tips-value__fixed--span">50%</span>
        </label>
        <label>
          <input
            className="tips-value__custom"
            type="text"
            placeholder="Custom"
            value={value}
            name="tip"
            onChange={handleCustomTipChange}
          />
        </label>
      </div>
    </div>
  );
};

export default TipsFormContainer;
