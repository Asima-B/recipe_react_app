import React from 'react';
import '../index.css';

const Welcome = () => (
  <div className="holder">
    <header className="header">
      <div className="header-content flex flex-c text-center text-white">
        <h2 className="header-title text-capitalize">Find your meal of choice.</h2>
        <br />
        <p className="header-text fs-18 fw-3">Here you can find a recipe for cooking a dish that you will like or find easy to prepare. </p>
          <br />
          <p className="header-text fs-20 fw-3">Select a category and then select a dish.</p>
      </div>
    </header>
  </div>
);

export default Welcome;
