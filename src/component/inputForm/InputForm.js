import React from 'react';

const InputForm = ({ img, title, name }) => {
  return (
    <div className="bill">
      <h2 className="bill__header">{title}</h2>
      <div className="bill__value">
        <img className="bill__value--dollar" src={img} alt="value" />
        <input className="bill__value--input" type="text" name={name} />
      </div>
    </div>
  );
};

export default InputForm;
