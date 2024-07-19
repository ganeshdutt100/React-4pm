import React,{useState} from 'react'

export const Yashbhia = () => {
    const [car, setCar] = useState({
        brand:"Rolls-Royce ",
        model:"Cullinan",
        year:"2024",
        xyz:"Yash",
        xyz1:"Singhal",
        color:"balck"
    });

    const chnageColor =() =>{
//  setCar({
//     brand: car.brand,
//     model: car.model,
//     year: car.year,
//         color:"blue" 

// })
setCar( (x) => ({...x,color:"blue" }))
    }

  return (
    <>
<h1>Luxury Car is {car.brand}</h1>
<h2>It is a {car.model} {car.color}  from {car.year} {car.xyz} {car.xyz1} </h2>
<button onClick={chnageColor}>Blue</button>


    </>
  )
}