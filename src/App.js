import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() => {
       setAlert(null);    
     }, 1500);
  }


  /*************  Function for Dark Button************************************************/ 
  const funcDarkBtn = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode is enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode is Disabled", "success");
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={funcDarkBtn} />
      <Alert alert={alert}/>
      <div className="container">
      <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the Text To Analyze Below:" mode={mode} showAlert={showAlert}/>
          </Route>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
// Here, 'Navbar' is a component and 'title', 'aboutText' are props of that component.
// 'home' prop is not defined here but still it takes its value from defaultProps in Navbar.js