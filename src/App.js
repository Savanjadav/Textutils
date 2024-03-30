import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const[alert, setAlert] =useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#0c0c0c";
      showAlert("Dark mode has been enabled", "success");
      document.title="TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils Now";
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled", "success");
      document.title="TextUtils - Light Mode";
    }
  }
  return (
    <>
    <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>  
    <div className="container my-3" >
    <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
