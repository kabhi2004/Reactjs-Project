import { useState } from 'react'
import './App.css'
import Navigation from './Component/Navigation'
import Hero from './Component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation/>
     <Hero/>
    </>
  )
}

export default App
