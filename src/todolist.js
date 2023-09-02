import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './index.css';
import { useState } from 'react';
// import Card from './component/card';
// import { useEffect, useState } from 'react';

function HomePage() {
  const [user, setUser] = useState('')
  const [btn, setBtn] = useState([])

  function alluser(e) {
    setUser(e.target.value);

  }
  function add(add) {
    let a = [...btn];
    a.push(user);
    setBtn(a);
    setUser("")

  }
  return (
    <div className='inputform'>
      {/* <form> */}
        <input type="text" value={user} onChange={alluser} />
        <button className='btn' onClick={add} >Add</button>
      {/* </form> */}
      {/* <h1>hello world</h1> */}
      {btn.map((data)=>{
        console.log("data",data);
        return <h1>{data}</h1>
      })}
    </div>
  )
}
export default HomePage;