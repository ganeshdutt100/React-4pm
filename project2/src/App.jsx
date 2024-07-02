import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nabvar from './components/Nabvar'
import About from './components/About'
import UseEffect from './components/UseEffect'
import UseEffect2 from './components/UseEffect2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Nabvar /> */}
      {/* <About /> */}
      {/* <UseEffect /> */}
      <UseEffect2 />
    </>
  )
}

export default App
