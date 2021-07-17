import React from 'react';
import Logo from '../../assets/images/logo.svg';

const BrandImage = () => {
  return (
    <div className="brand">
      <img className="brand__logo" src={Logo} alt="brand logo" />
    </div>
  );
};

export default BrandImage;
