import React, { useState } from 'react'
const Image = [
  "https://img.freepik.com/free-photo/front-view-wild-tiger-nature_23-2150747950.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1277.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid"
  , "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/young-woman-park-with-her-white-dog_1303-11499.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid"
]
const Slider = () => {
  const [slider, setSlider] = useState(0);

  const previous = () => {
    setSlider((x) => (x === 0 ? Image.length - 1 : x - 1))
  }
  const next = () => {
    setSlider((x) => (x === Image.length - 1 ? 0 : x + 1))
  }
  return (
    <div>
      <button onClick={previous}>◀</button>
      <img src={Image[slider]} alt="" width={"500px"} height={"400px"} />
      <button onClick={next}>▶</button>


    </div>
  )
}

export default Slider
