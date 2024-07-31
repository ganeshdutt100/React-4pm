import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Class2 from './Component/Class2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Class2 />
    </>
  )
}

export default App
