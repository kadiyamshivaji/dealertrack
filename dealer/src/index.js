
import React from "react";
import ReactDOM from "react-dom";
import LeadFormDetails from './LeadFormDetails';
import "./App.scss";  
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    return (
      <div className="App">
        <LeadFormDetails></LeadFormDetails>
      </div>
    );
  }
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);
  