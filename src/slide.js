import React from 'react';
import './App.css';

const slide = () => {
  const showMessage  =() => {
    alert("Hello!");
  }
  return (
    <div className="App" id="root" onClick={showMessage}>
     HelloReact!
    </div>
  );
}

export default slide;
