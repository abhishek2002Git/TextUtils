import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

// import About from "./components/About";
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


  
  /***************Function for Red button**************************************************/ 
  const funcRedBtn = () =>{
    let txtArea = document.getElementById('txtArea');
    let buttons = document.getElementsByClassName('buttons');
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(41, 5, 5)'
      txtArea.style.backgroundColor = 'rgb(41, 5, 5)';
      txtArea.style.color = 'white';
      for (const elem of buttons) {
        elem.style.backgroundColor = 'rgb(41, 5, 5)';
        elem.style.border = '2px solid black';
      }
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      txtArea.style.backgroundColor = 'white';
      txtArea.style.color = 'black';
      for (const elem of buttons) {
        elem.style.backgroundColor = 'blue';
        elem.style.border = '2px solid blue';
      }
    }
  }
  /*************  Function for Dark Button************************************************/ 
  const funcDarkBtn = () =>{
    let txtArea = document.getElementById('txtArea');
    let buttons = document.getElementsByClassName('buttons');
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      txtArea.style.backgroundColor = 'black';
      txtArea.style.color = 'white';
      for (const elem of buttons) {
        elem.style.backgroundColor = 'black';
        elem.style.border = '2px solid white';
      }
      showAlert("Dark Mode is enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      txtArea.style.backgroundColor = 'white';
      txtArea.style.color = 'black';
      for (const elem of buttons) {
        elem.style.backgroundColor = 'blue';
        elem.style.border = '2px solid blue';
      }
      showAlert("Dark Mode is Disabled", "success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={funcDarkBtn} funcRedBtn={funcRedBtn}/>
      <Alert alert={alert}/>
      <div className="container">
      {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter the Text To Analyze Below:" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
// Here, 'Navbar' is a component and 'title', 'aboutText' are props of that component.
// 'home' prop is not defined here but still it takes its value from defaultProps in Navbar.js