import React from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import { Formik } from 'formik';
function App() {
  return (
    <div className="App">   
      <header className="App-header">
        <HomeContainer> </HomeContainer>
      </header>
    </div>
  );
}

export default App;
