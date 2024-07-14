import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    deviceName: "Laptop",
    price: "$1500"
  }
  let dell = {
    deviceName: "Dell Notepad",
    price: "$900"
  }

  return (
    <>
      <h1 className='bg-green-400 p-3 rounded-xl text-black mb-4'>Tailwind Here</h1>
      {/* we can pass objects in components and use it there to dispay in UI */}
      {/* <Card someObject ={myObj}  />    */}
      {/* <Card someObject={dell} /> */}

      {/* Also we can pass the variable in components */}
      <Card deviceName="Macbook" price="$1000"/>
      <Card deviceName="Dell Notepad"  />
    </>
  )
}

export default App
