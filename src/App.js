import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) =>{
    setAlert({
      msg : message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1F3B4D';
      document.body.style.color = 'white';
      showAlert("Dark Mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <>
        <Navbar title="Packet" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" showAlert={showAlert} />} />
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} />
          </Routes> */}
          <TextForm heading="Enter the text to analyze" showAlert={showAlert} />
        </div>
      </>
    {/* </Router> */}


    </>
  );
}

export default App;
