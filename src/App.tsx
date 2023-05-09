import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Main from './components/Main'
function App() {

  return (
    <div className="App bg-gradient-to-r from-red-200 to-amber-100" >
      <Navbar />  
      <Main />
      <hr></hr>
      <About />
    </div>
  )
}

export default App
