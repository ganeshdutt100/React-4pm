import React ,{useRef, useState,useEffect} from 'react'


const UseRef1 = () => {
    const [first, setfirst] = useState(0);
    let valueUseRef = useRef(0);

    useEffect(() => {
        valueUseRef.current = first;
    }, [first]);

       let previousValue  = valueUseRef.current
  return (
    <div>


    <p>current Value : {first}</p>
    <p>Previous Value : {previousValue}</p>
    <button onClick={()=>setfirst(first+1)}>Add</button>
    </div>
  )
}

export default UseRef1




