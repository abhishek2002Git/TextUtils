import React, {useState} from "react";
//'useState' is used to create state variables


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleClrClick = ()=>{
        let newText = "";
        setText(newText)
    }
    const handleTitClick = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{  // this function let you to change the value of text area
        setText(event.target.value);
    }
    

  const [text, setText] = useState('Enter text here');
    // 'text' is a static variable whose default value is 'Enter text here' , 'setText' is a function which lets you to change the value of 'text'  


  return (
    <>  
    <div style={{color: props.mode==='dark'?'white':'black'}} >
       <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea
          className="form-control"
          value = {text}
          onChange = {handleOnChange} // 'handleOnChange()' will be called when value of textarea will be changed
          id="txtArea"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary buttons" onClick={handleUpClick}>ConvertToUppercase</button>
      <button className="btn btn-primary mx-2 buttons" onClick={handleLowClick}>ConvertToLowercase</button>
      <button className="btn btn-primary mx-2 buttons" onClick={handleTitClick}>Title Case</button>
      <button className="btn btn-primary mx-2 buttons" onClick={handleClrClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes will required to read</p>
        <h5>{text}</h5>
    </div>
    </>
  );
}
