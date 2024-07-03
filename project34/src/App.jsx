import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jokes from './Components/Jokes'
import Mems from './Components/Mems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Jokes /> */}
      <Mems />
    </>
  )
}

export default App
