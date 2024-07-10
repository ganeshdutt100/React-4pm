import React ,{useState, useEffect , useRef}from 'react'

const UseRef = () => {
    const [first, setfirst] = useState(0)
    let yash  = useRef(0) ;
    useEffect(() =>{
        yash.current = yash.current + 1
        console.log(yash.current);
        
    },[first])


    let useRefFocus = useRef(null);

    const focusInput = ()=>{
        useRefFocus.current.focus();
    }
  return (
    <div>
    <button onClick={(()=>setfirst(first+1))}>{first}Add</button>
    <br />
    <input type="text" />
    <input type="text" />
    <input type="text" />
    <input type="email" placeholder='Enter your email' ref={useRefFocus} />

    <input type="text" />
    <input type="text" />
     <button onClick={focusInput}>mail</button>
    </div>


      
  )
}

export default UseRef

