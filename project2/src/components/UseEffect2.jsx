import React, { useState, useEffect } from 'react'

const UseEffect2 = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const a = setInterval(() => {
      setCount(x => x - 1);
    }, 1000);

    // return () => {
    //   clearInterval(a, 10000);

    // }
  }, []);
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default UseEffect2
