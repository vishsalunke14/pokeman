import { useState } from 'react'
import './App.css'
import CompA from './CompA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CompA />
     
    </>
  )
}

export default App
