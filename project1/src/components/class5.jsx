import React, { useState } from 'react'

export const Class5 = () => {
  const [value , setValue] = useState(5);

  let add = ()=>{
    setValue(value+1)
  }
  let sub = ()=>{
    setValue(value-1)
  }
  return (
    <div className='d-flex container mt-5 gap-4'>
        <button className='btn btn-danger' onClick={add} >ADD</button>
        <p>Class {value}</p>
        <button className='btn btn-primary' onClick={sub}>Sub</button>
    </div>
  )
}
