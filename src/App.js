import React from 'react';
import './App.css';
import Mohamed from "./navbar"

const navmenu=[
{title:"home"},
{title:"services",drop:["for tttt","for yyy","for ddd"]},
 { title:"contact"},
 
]
// const nav=["home"]

function App() {
  return (
    <div className="App">
      <Mohamed x={navmenu}/>
    </div>
  );
}

export default App;
