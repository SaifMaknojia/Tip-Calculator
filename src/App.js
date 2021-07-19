import React, { useState } from 'react';
import './App.scss';
import DollarSign from './assets/images/icon-dollar.svg';
import PersonIcon from './assets/images/icon-person.svg';
import TipsFormContainer from './component/TipsFormContainer/TipsFormContainer';
import InputForm from './component/inputForm/InputForm';
import AmountCount from './component/amountCount/AmountCount';
import BrandImage from './component/brandImage/BrandImage';

function App() {
  const [bill, setBill] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tip, setTip] = useState('');
  const [customTip, setCustomTip] = useState('');

  console.log(bill, numberOfPeople);
  // handling input data from the form
  const handleBillChange = e => {
    setBill(e.target.value);
  };

  const handleNumberOfPeopleChange = e => {
    setNumberOfPeople(e.target.value);
  };

  const handleCustomTip = e => {
    setCustomTip(e.target.value);
  };

  const handleTipChange = e => {
    setTip(e.target.value);
  };

  // handling reset button
  const handleReset = () => {
    setBill('');
    setNumberOfPeople('');
    setTip('');
    setCustomTip('');
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
              value={bill}
              handleChange={setBill}
              img={DollarSign}
              title="Bill"
            />
            <TipsFormContainer
              input={tip}
              handleChange={handleTipChange}
              value={customTip}
              handleCustomTipChange={handleCustomTip}
            />
            <InputForm
              value={numberOfPeople}
              handleChange={setNumberOfPeople}
              placeholder="Total Number of people"
              name="numberOfPeople"
              img={PersonIcon}
              title="Number of People"
            />
          </div>
          <div className="dynamic">
            <div className="tip-container">
              <div>
                <AmountCount title="Tip Amount" amount="20" />
                <AmountCount title="Total Amount" amount="100" />
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
