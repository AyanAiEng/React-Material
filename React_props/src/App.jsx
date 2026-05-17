import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Home from './Components/home'
import About from './Components/about'

function App() {

  return (
    <>
      <h1>hey</h1>
      <h2>i am learning props</h2>
      <Home userinfo = {{name:"Ayan",age:26}}></Home>
      <About></About>
    </>
  )
}

export default App
