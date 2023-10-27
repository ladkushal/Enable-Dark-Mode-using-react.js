import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e3338";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <div className="">
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Form mode={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
