import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import CounterApp from './CounterApp';
import Sidebar from "./Sidebar";
// import slide from "./slide";

const App = () => {
  
  return (
    <Route>
      <Sidebar />
      {/* <Route path="/slide" component={slide} />
      <Route path="/counterApp" component={CounterApp} />
      <Route path="/sidebar" component={Sidebar} /> */}
      <Redirect from="/" to="/slide" />
    </Route>
  );
}

export default App;
