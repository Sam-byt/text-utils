import React, { useState } from 'react';

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log('UpperCase was clicked'+text);
        // setText("You have clicked on handleUpClick");
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!", 'success');
    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!", 'success');
    }

    const handleClear = () => {
        setText('');
        props.showAlert("Text Cleared!", 'success');
    }

    const handleCopy = () => {
        document.getElementById('myBox').select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!", 'success');
    }

    const handleExtraSpaces = () => {
        setText(text.split(/[ ]+/).join(' '));
        props.showAlert("Extra Spaces are handled properly!", 'success');
    }

    const [text, setText] = useState(''); //usestate is the default state for text 
    //setText will be used to set the text as required
    // text = "new text" ; This is wrong!
    // setText("new Text"); Correct!
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'light' ? 'dark' :'light'}`}  value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder="Enter your text here" style = {props.txt}></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                {/* <p>{`${text.length === 0?'0 words and 0 characters':text.split(/[ ]+/).join(' ').trim().split(' ').length + ' words and ' + text.split(/[ ]+/).join('').trim().length + ' characters'}`}</p> */}
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008*text.split(/[ ]+/).join(' ').trim().split(' ').length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview here.'}</p>
            </div>
        </>
    )
}
