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

  console.log('bill:', check.bill);
  console.log('tip:', check.tip);
  console.log('numberOfPeople:', check.numberOfPeople);
  console.log('customTip:', check.customTip);

  const individualTip = (check.bill * check.tip) / 100 / check.numberOfPeople;
  const totalBill =
    Number(check.bill) + Number(individualTip * check.numberOfPeople);

  const handleChange = event => {
    const { name, value } = event.target;
    setCheck(prev => ({
      ...prev,
      [name]: value
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
            <TipsFormContainer
              input={check.tip}
              handleChange={handleChange}
              value={check.customTip}
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
                    individualTip === Number.POSITIVE_INFINITY
                      ? 0
                      : individualTip
                  }
                />
                <AmountCount
                  title="Total Amount"
                  amount={totalBill ? totalBill : 0}
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
