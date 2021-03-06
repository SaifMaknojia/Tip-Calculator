import React from 'react';

const InputForm = ({ img, title, name, placeholder, value, handleChange }) => {
  return (
    <div className="bill">
      <div className="bill__input">
        <h2 className="bill__input--header">{title}</h2>
        {(value && value < 1) || value === 0 ? (
          <p className="bill__input--hidden">Can't be zero or less</p>
        ) : null}
      </div>
      <div className="bill__value">
        <img className="bill__value--dollar" src={img} alt="value" />
        <input
          placeholder={placeholder}
          onChange={handleChange}
          className={
            (value && value < 1) || value === 0
              ? 'bill__value--input red-border'
              : 'bill__value--input'
          }
          value={(value && value < 1) || value === 0 ? '' : value}
          type="number"
          name={name}
        />
      </div>
    </div>
  );
};

export default InputForm;
