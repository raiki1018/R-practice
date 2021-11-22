import React from 'react';
import "../App.css";
import CounterApp from '../Compornents/CounterApp';
import Hello from '../Compornents/Hello';


const App = () => {
  
  return (
    <div className="App">
      <Hello contents="Hello World!"/>
      <CounterApp color="tomato" />
      <CounterApp color="skyblue" />
      <CounterApp color="limegreen" />
    </div>
  );
}

export default App;
