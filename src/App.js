import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [myColor, setMyColor] = useState('#f8f9fa');
  const [myBg, setMyBg] = useState({ backgroundColor: '#f8f9fa' });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#f8f9fa';
      setMyBg({ backgroundColor: '#343838' });
      showAlert('dark mode is enabled', "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      document.body.style.color = '#212529';
      setMyBg({ backgroundColor: '#f8f9fa' });
      showAlert('light mode is enabled', "success");
    }
  };

  const changeTheme = (event) => {
    setMyColor(event.target.value);
    document.body.style.backgroundColor = myColor;
  };


  return (
    <>
      <Navbar title="TextUtils" mode={mode} theme={myColor} changeTheme={changeTheme} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={
            <TextForm heading="Enter the text to analyze below" mode={mode} txt={myBg} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About mode={mode} txt={myBg}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
