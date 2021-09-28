import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from './components/Alert';

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

  const toggleMode = () =>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils2" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter the Text To Analyze Below:" mode={mode} showAlert={showAlert}/>
      {/* <About/>  */}
      </div>
    </>
  );
}

export default App;
// Here, 'Navbar' is a component and 'title', 'aboutText' are props of that component.
// 'home' prop is not defined here but still it takes its value from defaultProps in Navbar.js