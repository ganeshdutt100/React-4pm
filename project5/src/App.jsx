import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRef from './components/UseRef'
import UseRef1 from './components/UseRef1'
import { Yashbhia } from './components/Yashbhia'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <UseRef/> */}
     <Yashbhia/>
     <UseRef1/>
    </>
  )
}

export default App
