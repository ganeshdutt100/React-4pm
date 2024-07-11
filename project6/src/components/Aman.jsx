import React ,{useContext} from 'react'
import Shivang from './Shivang'
import { shivang } from './Context/context';



const Aman = () => {
  let amanCounter  = useContext(shivang);
  return (

    <div>
  
        <Shivang  /> 
    
    Aman   <button onClick={()=>amanCounter.setCount((a)=>a+1)} > {amanCounter.count}</button></div>
  )
}

export default Aman