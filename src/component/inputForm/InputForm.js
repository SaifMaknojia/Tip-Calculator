import React from 'react';

const InputForm = ({ img, title, name, placeholder, value, handleChange }) => {
  return (
    <div className="bill">
      <h2 className="bill__header">{title}</h2>
      <div className="bill__value">
        <img className="bill__value--dollar" src={img} alt="value" />
        <input
          placeholder={placeholder}
          onChange={e => handleChange(e.target.value)}
          className="bill__value--input"
          value={value}
          type="number"
          name={name}
        />
      </div>
    </div>
  );
};

export default InputForm;
