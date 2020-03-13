import React, { useState } from 'react';
import './App.css';

// var string = "this is a string";
// var length = 7;
// var trimmedString = string.substring(0, length);

const Button = ({ name, onClick }) => {

  return (

    <button onClick={() => { onClick() }}>{name}</button>
  )
}

const Banner = ({ name, placeholder, submit,value }) => {

  return (

    <React.Fragment>
      <h1>{name}</h1>
      <Submit placeholder={placeholder} submit={submit} value={value}></Submit>
    </React.Fragment>
  )
}

const Submit = ({ placeholder, submit,value,className }) => {
  return (

    <React.Fragment>
      <input className={className} placeholder={placeholder} onChange={(e) => { submit(e.target.value) }} value={value}/>
    </React.Fragment>
  )
}

const App = () => {

  const [count, setCount] = useState('139');

  const [total, setTotal] = useState('')
  const [text, setText] = useState('text');

  const [submitted, setSubmitted] = useState('sb')
  const [notSubmitted, setNotSubmitted] = useState('n-sb')


  return (

    <React.Fragment>
      <center>Hanker Hank</center>
      <Submit placeholder={"enter # of characters"} submit={(ret) => { setCount(ret) }} value={count} ></Submit>
      <br />

      <textarea onChange={(e)=>{

        let ret = e.target.value

        setText(ret) 
        setTotal(text.length)
        setSubmitted(text.substring(0,count))


        const remaining = total-count
        var toSet = ''
        for (let i=count;i<text.length;i++){
          toSet+=text[i]
        }
        console.log(toSet)
        setNotSubmitted(toSet)

      }}></textarea>
      {/* <Submit placeholder={"enter what's app status"} submit={(ret) => { 
        setText(ret) 
        setTotal(text.length)
        setSubmitted(text.substring(0,count))


        const remaining = total-count
        var toSet = ''
        for (let i=count;i<text.length;i++){
          toSet+=text[i]
        }
        console.log(toSet)
        setNotSubmitted(toSet)

      }}></Submit> */}


      <h2>{total}/{count}</h2>


      <Banner name="submitted" value={submitted}></Banner>
      <Banner name="not submitted" value={notSubmitted}></Banner>

    </React.Fragment>
  )
}

export default App;