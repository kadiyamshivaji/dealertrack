import React from "react";
import "./App.scss";
import HomeContainer from "./containers/HomeContainer";
import FormComponent from "./Form";
import { Formik } from "formik";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormComponent> </FormComponent>
      </header>
    </div>
  );
}

export default App;
