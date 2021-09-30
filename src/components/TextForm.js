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
    const handleCopyClick = ()=>{  
        var text = document.getElementById('txtArea');
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        
    }
    

  const [text, setText] = useState('Enter text here');
    // 'text' is a state variable whose default value is 'Enter text here' , 'setText' is a function which lets you to change the value of 'text'  


  return (
    <>  
    <div style={{color: props.mode==='dark'?'white':'black'}} >
      {/* ^ to changle the color of h1 */}
       <h1>{props.heading}</h1> 
      <div className="mb-3">
        <textarea
          className="form-control"
          value = {text}
          onChange = {handleOnChange} // 'handleOnChange()' will be called when value of textarea will be changed
          id="txtArea"
          rows="8"
          style={{color: props.mode==='dark'?'white':'black', backgroundColor: props.mode==='dark'?'black':'white'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} style={{color: 'white', backgroundColor: props.mode==='dark'?'black':'blue', border: '2px solid white'}}  className="btn btn-primary mx-2 my-1 buttons" onClick={handleUpClick}>ConvertToUppercase</button>
      <button disabled={text.length===0} style={{color: 'white', backgroundColor: props.mode==='dark'?'black':'blue', border: '2px solid white'}}  className="btn btn-primary mx-2 my-1 buttons" onClick={handleLowClick}>ConvertToLowercase</button>
      <button disabled={text.length===0} style={{color: 'white', backgroundColor: props.mode==='dark'?'black':'blue', border: '2px solid white'}}  className="btn btn-primary mx-2 my-1 buttons" onClick={handleTitClick}>Title Case</button>
      <button disabled={text.length===0} style={{color: 'white', backgroundColor: props.mode==='dark'?'black':'blue', border: '2px solid white'}}  className="btn btn-primary mx-2 my-1 buttons" onClick={handleClrClick}>Clear</button>
      <button disabled={text.length===0} style={{color: 'white', backgroundColor: props.mode==='dark'?'black':'blue', border: '2px solid white'}}  className="btn btn-primary mx-2 my-1 buttons" onClick={handleCopyClick}>Copy</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((elem)=>{return elem.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} Minutes will required to read</p>
        <h5>{text}</h5>
    </div>
    </>
  );
}
