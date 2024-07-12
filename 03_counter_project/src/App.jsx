import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // use of hooks function useState
  // it returns two arguement in array form first is like var and second is the function to set the var
  const [counter, setCounter] = useState(10)  


  // if counter becomes 20 it will not increment the counter 
  const addValue = ()=> {
    if(counter < 20)
    setCounter(counter+1)
  }

  // if ccounter becomes 0 it will not decrement the counter
  const removeValue = ()=> {
    if(counter > 0){
      setCounter(counter-1)
    }
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count: {counter} </h2>
      <button onClick={addValue}>Add Value: {counter} </button>
      
      <button onClick={removeValue}>Remove Value: {counter} </button>
    </>
  )
}

export default App
