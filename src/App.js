import React, { useState } from 'react';
import './App.scss';
import DollarSign from './assets/images/icon-dollar.svg';
import PersonIcon from './assets/images/icon-person.svg';
import TipsFormContainer from './component/TipsFormContainer/TipsFormContainer';
import InputForm from './component/inputForm/InputForm';
import AmountCount from './component/amountCount/AmountCount';
import BrandImage from './component/brandImage/BrandImage';

function App() {
  const [check, setCheck] = useState({
    bill: '',
    tip: '',
    numberOfPeople: '',
    customTip: ''
  });

  const tipIntoPercentage = (check.tip / 100) * check.bill;

  const totalTip = () => {
    if (check.tip && check.customTip) {
      return check.tip + tipIntoPercentage + check.customTip;
    } else if (check.tip) {
      return check.tip + tipIntoPercentage;
    } else if (check.customTip) {
      return check.customTip;
    } else {
      return 0;
    }
  };

  //creating function to dynamically update info based on user actions
  const individualTipCalculation = () => {
    if (check.tip && check.customTip) {
      return (
        check.customTip / check.numberOfPeople +
        tipIntoPercentage / check.numberOfPeople
      );
    } else if (check.tip) {
      return tipIntoPercentage / check.numberOfPeople;
    } else if (check.customTip) {
      return check.customTip / check.numberOfPeople;
    }
  };

  const totalBillCalculation = () => {
    if (check.tip && check.customTip) {
      return (
        (tipIntoPercentage + check.bill + check.customTip) /
        check.numberOfPeople
      );
    } else if (check.customTip) {
      return (check.customTip + check.bill) / check.numberOfPeople;
    } else if (check.tip) {
      return (tipIntoPercentage + check.bill) / check.numberOfPeople;
    } else if (check.customTip === 0) {
      return check.bill / check.numberOfPeople;
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCheck(prev => ({
      ...prev,
      [name]: Number(value)
    }));
  };

  // handling reset button
  const handleReset = () => {
    setCheck({
      bill: '',
      tip: '',
      numberOfPeople: '',
      customTip: ''
    });
  };

  return (
    <div className="container">
      <div className="main-container">
        <BrandImage />
        <div className="main">
          <div className="custom">
            <InputForm
              placeholder="0.00"
              name="bill"
              value={check.bill}
              handleChange={handleChange}
              img={DollarSign}
              title="Bill"
            />
            {/* Either custom tip || tip in percentage */}
            <TipsFormContainer
              input={check.tip}
              handleChange={handleChange}
              value={check.customTip}
              totalTip={totalTip()}
            />

            <InputForm
              value={check.numberOfPeople}
              handleChange={handleChange}
              placeholder="Total Number of people"
              name="numberOfPeople"
              img={PersonIcon}
              title="Number of People"
            />
          </div>
          <div className="dynamic">
            <div className="tip-container">
              <div>
                <AmountCount
                  title="Tip Amount"
                  amount={
                    individualTipCalculation() === Number.POSITIVE_INFINITY
                      ? 0
                      : individualTipCalculation()
                  }
                />
                <AmountCount
                  title="Total Amount"
                  amount={
                    totalBillCalculation() === Number.POSITIVE_INFINITY
                      ? 0
                      : totalBillCalculation()
                  }
                />
              </div>
              <button onClick={handleReset} className="reset__button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
