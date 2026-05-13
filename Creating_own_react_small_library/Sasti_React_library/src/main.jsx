/* 
This concept is called:
Virtual DOM (Reconciliation concept in React)
More specifically:

JSX → React Element (JavaScript object)
React compares old vs new objects → Reconciliation
Then updates real DOM efficiently → DOM Diffing

React turns JSX into a JavaScript object (React element), which describes what the UI should look like. Then React uses this object to create/update the real DOM in the browser.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function Myapp() {
  return (
    <h1>hey it is a custom app</h1>
  )
}

/* if we render the react_element this will show the error because 
This looks like a React element, but React expects a special internal structure.
 */

// we cannot use react_element bacuse it need different arguments

const react_element = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  Children: "CLick me to visit google"
}

// this is the alternative

const reactlement = React.createElement(
  "a",
  {href:"https://google.com",target :"_blank"},
  "click me to visssssiy goooooooooogle"
)

const another_element = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


createRoot(document.getElementById('root')).render(
  //we can also write Myapp() this also

  // Myapp()
  // reactlement
  <App/>
)



