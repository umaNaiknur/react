import React, { useState } from 'react'

export default function States(props) {
  function handleOnChange(event){
    console.log('clicked')
    setText(event.target.value)
  }
  function handleOnClickToUp(){
    console.log('clicked')
    setText(text.toLocaleUpperCase())
    props.alert('Converted to Upper Case','success')
  }
  function handleOnClickToLo(){
    console.log('clicked')
    setText(text.toLocaleLowerCase())
    props.alert('Converted to Lower Case','warning')
  }
  function handleClear(){
    setText('')
    props.alert('Text Cleared','success')
  }
  function handleCopy(){
    var text=document.getElementById('mybox')
    navigator.clipboard.writeText(text.value)
    props.alert('Text Copied','success')
  }
  function handleSpace(){
    let newText=text.split(/[ ]+/)
    setText(newText.join(' '))
    props.alert('Text Space Removed','danger')
  }
  const [text,setText]=useState('Enter Text Here')

  return (
    <>
    <div>
      <h2>{props.label}</h2>
      <div className="mb-3">
  <textarea className="form-control" id="mybox" value={text} rows="8" style={{backgroundColor: props.mode=='dark'?'grey':'white'}}  onChange={handleOnChange} placeholder={props.headiing}></textarea>
</div>
<button className='btn btn-primary' onClick={handleOnClickToUp}>Convert to UpperCase </button>
<button className='btn btn-primary mx-3 ' onClick={handleOnClickToLo}>Convert to LowerCase </button>
<button className='btn btn-primary mx-3 ' onClick={handleCopy}>Copy</button>
<button className='btn btn-primary mx-3 ' onClick={handleSpace}>Space</button>
<button className='btn btn-primary mx-3 ' onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container">
      <h1 >Your Text Summary
      </h1>
        <p>{text.split(/\s+/).filter(a=>a.length>0).length} words and {text.length} character</p>
        <small>{0.008*text.split()} Minutes to read</small>
        <h3>{text.length==0?'Enter Your Text To Preview':'Preview'}</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
