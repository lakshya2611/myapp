import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import React ,{useState} from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [btnMode, setbtnMode] = useState('primary')
  
  const toggleModeDark = ()=>{
 
      setMode('dark')
      setbtnMode('secondary')
      document.body.style.backgroundColor = "#212529"
      showAlert("Dark Mode Enabled","success")
    }

  const toggleModeLight = ()=>{
 
      setMode('light')
      setbtnMode('primary')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled","success")
    }

  const toggleModeGreen = ()=>{

      setMode('light')
      setbtnMode('info')
      document.body.style.backgroundColor = "green"
      showAlert("Green Mode Enabled","success")
    }

  const toggleModeRed = ()=>{
  
      setMode('light')
      setbtnMode('warning')
      document.body.style.backgroundColor = "red"
      showAlert("Red Mode Enabled","success")
    }

  const [alert, setalert] = useState(null);
  
  const showAlert = (message,type)=>{

    setTimeout(() => {
      showAlert(null);
    }, 2000);

    setalert({
      msg:message,
      type:type
    })
  }


  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleModeDark = {toggleModeDark} toggleModeGreen = {toggleModeGreen} toggleModeRed = {toggleModeRed} toggleModeLight = {toggleModeLight} />
    <Alert alt={alert}/>
    <div className="container my-3">

    {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/"> */}
    <TextArea showalt ={showAlert} btnMode ={btnMode} heading ="Enter Your Text Here ! " mode ={mode}/>
          {/* </Route>
    </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}


export default App;
