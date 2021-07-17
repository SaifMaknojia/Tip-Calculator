import React from 'react';
import './App.scss';

import DollarSign from './assets/images/icon-dollar.svg';
import PersonIcon from './assets/images/icon-person.svg';
import TipsFormContainer from './component/TipsFormContainer/TipsFormContainer';
import InputForm from './component/inputForm/InputForm';
import AmountCount from './component/amountCount/AmountCount';
import BrandImage from './component/brandImage/BrandImage';
function App() {
  return (
    <div className="container">
      <div className="main-container">
        <BrandImage />
        <div className="main">
          <div className="custom">
            <InputForm name="bill" img={DollarSign} title="Bill" />
            <TipsFormContainer />
            <InputForm
              name="people"
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
              <button className="reset__button">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
