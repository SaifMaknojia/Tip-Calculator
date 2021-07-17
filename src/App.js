import React from 'react';
import './App.scss';
import Logo from './assets/images/logo.svg';
import DollarSign from './assets/images/icon-dollar.svg';
import PersonIcon from './assets/images/icon-person.svg';
function App() {
  return (
    <div className="container">
      <div className="main-container">
        <div className="brand">
          <img className="brand__logo" src={Logo} alt="brand logo" />
        </div>
        <div className="main">
          <div className="custom">
            <div className="bill">
              <h2 className="bill__header">Bill</h2>
              <div className="bill__value">
                <img
                  className="bill__value--dollar"
                  src={DollarSign}
                  alt="value"
                />
                <input className="bill__value--input" type="text" />
              </div>
            </div>
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
                    className="tips-value__fixed"
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
            <div className="total-people">
              <h2 className="total-people__number">Number of People</h2>
              <div>
                <img
                  className="total-people__icon"
                  src={PersonIcon}
                  alt="person"
                />
                <input className="total-people__input" type="text" />
              </div>
            </div>
          </div>

          <div className="dynamic">
            <div className="tip-container">
              <div>
                <div className="individual">
                  <div className="individual__tip">
                    <h2 className="individual__tip--amount">Tip Amount</h2>
                    <p className="individual__tip--person">/ person</p>
                  </div>
                  <div className="individual__amount">
                    <h2 className="individual__amount--value">$4.72</h2>
                  </div>
                </div>
                <div className="total">
                  <div className="total__amount">
                    <h2 className="total__amount--calc">Total Amount</h2>
                    <p className="total__amount--person">/ person</p>
                  </div>
                  <div className="total__bill">
                    <h2 className="total__bill--value">$4.72</h2>
                  </div>
                </div>
              </div>
              <div className="reset">
                <button className="reset__button">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
