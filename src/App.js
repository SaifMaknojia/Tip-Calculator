import React, { useState } from 'react';
import './App.scss';
import DollarSign from './assets/images/icon-dollar.svg';
import PersonIcon from './assets/images/icon-person.svg';
import TipsFormContainer from './component/TipsFormContainer/TipsFormContainer';
import InputForm from './component/inputForm/InputForm';
import AmountCount from './component/amountCount/AmountCount';
import BrandImage from './component/brandImage/BrandImage';

function App() {
  const [input, setInput] = useState({
    bill: '',
    numberOfPeople: ''
  });
  console.log('our Total bill is: ', input.bill);
  console.log('Total number of people is :', input.numberOfPeople);

  const handleChange = event => {
    const { name, value } = event.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const handleReset = () => {
    setInput({ bill: '', numberOfPeople: '' });
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
              value={input.bill}
              handleChange={handleChange}
              img={DollarSign}
              title="Bill"
            />
            <TipsFormContainer />
            <InputForm
              value={input.numberOfPeople}
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
                <AmountCount title="Tip Amount" amount="4.72" />
                <AmountCount title="Total Amount" amount="572.00" />
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
