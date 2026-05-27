import React from 'react'
import { useState } from 'react'

export default function Todo() {
  const [input, setinput] = useState("")
const [todo, settodo] = useState([
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  },
  {
    value: "Mango",
    iscompleted: false,
  }
])
   
  let addtodo = () => {
    console.log({ input })
  }
  let ontyping = (a) => {
    console.log("Typing", a.target.value)
    setinput(a.target.value)
  }
  return (
    <>
      <div className='container'>
        <h1>Todo App</h1>
        <div className="todo-input">
          <input onChange={ontyping} type="text" id='box' />
          <button onClick={addtodo}>Add</button>
        </div>
        <ul>
        {
          todo.map((v,i) => {
            return(
              <li>hello</li>
            )
          })
        }
        </ul>
      </div>

    </>

  )
}
