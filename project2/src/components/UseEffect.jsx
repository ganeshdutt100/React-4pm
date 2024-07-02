import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("i am Window " + count)

  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> {count}</button>
    </div>
  )
}

export default UseEffect
