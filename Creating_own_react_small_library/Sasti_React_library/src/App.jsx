import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hey from './Chai'

// this is the way we use re

function App() {
  const username = "Ayan"
  return (
    <>
    {/* 
using user name likw this {username} is know as the jsx exprssion and we cannot pass any if or loaps in itbeacuse it bacuase

 } in JSX can only contain JavaScript expressions (things that return a value)❌ not statements (things that control flow like if, for, while) */}
      <Hey />
      <h1>What is your name</h1>
      <p>hey my name is {username} </p>
    </>
  )
}

export default App
