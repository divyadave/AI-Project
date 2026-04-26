import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [message, setMessage]= useState("")
 const [name, setName] = useState("")

 const callAPI = async () => {
  try
  {
  const res = await fetch("http://127.0.0.1:8001/")
  const data = await res.json();
  setMessage(data.message);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
 }

  return (
    <>
      
      
      <input type="text" placeholder='Enter your name' value={name} onChange={(e)=> setName(e.target.value)} />
      <button onClick={callAPI}>Call Backend API</button>
      <h2>{message}</h2>
    </>
  )
}

export default App
