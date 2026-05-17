import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  let [counter, setcounter] = useState(15)

  let addvalue = () => {
    counter = counter + 1
    setcounter(counter)
  }

  let remove_value = () =>{
    counter = counter - 1
    setcounter(counter)
  }
  return (
    <>
      <h1>Hey I am a counter</h1>
      <h2>Counter Value {counter}</h2>

      <button onClick={addvalue}>Add value{counter}</button>
      <br />
      <br />

      <button onClick={remove_value}>Remove value {counter}</button>
      <p>counter{counter}</p>
    </>
  )

}

export default App
