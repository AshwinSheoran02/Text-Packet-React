import React, {useState} from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');
  console.log(useState(''));

  const handleUpClick = () =>{
    console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success")
  }

  const handleLoClick = () =>{
    console.log("Lowercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success")
  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success")
  }

  const removeSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces", "success")
  }

  const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value); 
  }
  const wordCount = text.split(" ").length;
  const minutesToRead = Math.round(0.008 * wordCount);

  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
        <div className="mb-3">
            {/* <label for="myBox" class="form-label">Here in this box</label> */}
            <textarea className="form-control" id="myBox" rows="8" value={ text}  onChange={handleOnChange}> </textarea>
            <div id="healp" class="form-text">We'll never share your data with anyone else.</div>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy</button>
        <button className="btn btn-primary mx-2" onClick={removeSpaces} >Remove Extra Spaces</button>
    </div>

    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>
        {minutesToRead === 0 ? "less than 1" : minutesToRead} minutes read
      </p>
      </div>
    
    </>
  )
}
