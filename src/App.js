import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform'
import About from './components/About';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode,setmode]=useState('light')
  const [textmode,settextmode]=useState('dark')
  const [text,settext]=useState('Enable Darkmode')
  const [alert,setalert]=useState(null)
  const showalert=(message,type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setalert(null)
},1000)
  }
  const redcolor=()=>{
    setmode('red')
   settext('Enable Lightmode')
   
 document.body.style.backgroundColor='rgba(205, 24, 24, 0.749)'
  }
  const greencolor=()=>{
    setmode('green')
    settext('Enable Lightmode')
 document.body.style.backgroundColor='rgba(25, 110, 25, 0.725)'
  }
  const violetcolor=()=>{
    setmode('violet')
    settext('Enable Lightmode')
     document.body.style.backgroundColor='rgba(145, 65, 145, 0.671)'
     
  }
  const togglemode=()=>{
    if (mode==='light') {
      setmode('dark')
      settextmode('light')
      settext('Enable Lightmode')
      showalert('dark mode is set',"success")
      document.body.style.backgroundColor='#042743'
      document.body.style.Color='white'
    } else {
      setmode('light')
      settextmode('dark')
      settext('Enable Darkmode')
     showalert('light mode is set',"success")
      document.body.style.backgroundColor='white'
      document.body.style.Color='black'
    }
  }
  return (
    <>
    {/* <Navbar/> */} 
    {/* <BrowserRouter> */}
    <Navbar title="readutils" abouttext="abouttext" mode={mode} togglemode={togglemode} textmode={textmode} text={text} redcolor={redcolor} greencolor={greencolor} violetcolor={violetcolor}  />
     <Alert alert={alert} />
    
    
      <div className="container my-3 ">
   
{/* <Routes>
          <Route exact path="/about" element={<About />} /> */}
          
          
           <Textform heading="Enter text to analyse" mode={mode} showalert={showalert} />
              
          {/* < Route exact path="/"
            element= {<Textform heading="Enter text to analyse" mode={mode} showalert={showalert}  />} /> 
               </Routes> */}
               </div>
          {/* </BrowserRouter>  */}

    
      
  </>
  );
}

export default App;
