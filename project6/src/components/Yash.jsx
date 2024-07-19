import React , {useContext} from 'react'
import { shivang } from './Context/context'


const Yash = () => {


  let counterCount  = useContext(shivang)
  return (
    
    <div>
      
     Yash   :{counterCount.count} </div>
  )
}

export default Yash