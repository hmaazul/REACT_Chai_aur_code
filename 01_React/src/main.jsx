import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// we can create the app function in same file also
function MyApp(){
  return (
    <h2>React App in the same file</h2>
  )
}

// applying our custom react element so that react skip one step of converting html tag in js
// but this doesn't work as we haven't followed the convention of react for creating objects
// const domElement = {
//   type : 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//   children: 'Click to visit google'
// }

const anotherUser = " chai aur react"
// creating react element in the same convention as it's written in react
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit',
  anotherUser
)


//react can take direct html elements also
const element = (
  <a href="https://google.com">click here</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // domElement  -- this doesn't work
    reactElement   // -- this works well
    // element  -- this also  works fine 
)
