import React from 'react';

const TipsFormContainer = ({ input, handleChange, value, totalTip }) => {
  const darkCyanBGColor = {
    backgroundColor: '#26c0ab',
    color: '#00494d'
  };

  return (
    <div className="tips">
      <div className="tips-container">
        <h2 className="tips__header">Select tip %</h2>
        <p className="tips__total">
          <span className="tips__total--span">Total Tip:</span>$
          {totalTip.toFixed(2)}
        </p>
      </div>
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
          <span
            className="tips-value__fixed--span"
            style={input === 5 ? darkCyanBGColor : undefined}
          >
            5%
          </span>
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
          <span
            className="tips-value__fixed--span"
            style={input === 10 ? darkCyanBGColor : undefined}
          >
            10%
          </span>
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
          <span
            className="tips-value__fixed--span"
            style={input === 15 ? darkCyanBGColor : undefined}
          >
            15%
          </span>
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
          <span
            className="tips-value__fixed--span"
            style={input === 25 ? darkCyanBGColor : undefined}
          >
            25%
          </span>
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
          <span
            className="tips-value__fixed--span"
            style={input === 50 ? darkCyanBGColor : undefined}
          >
            50%
          </span>
        </label>
        <label>
          <input
            className="tips-value__custom"
            type="text"
            placeholder="Custom"
            value={(value && value < 1) || value === 0 ? '' : value}
            name="customTip"
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};

export default TipsFormContainer;
