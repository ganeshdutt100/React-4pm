import React, { useState } from 'react'
const testimonials = [
  {
    img: "https://img.freepik.com/free-photo/front-view-wild-tiger-nature_23-2150747950.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Yash Bhai"
  },
  {
    img: "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1277.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Shivang Bhai"
  },
  {
    img: "https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?uid=R100292432&ga=GA1.1.454077324.1719049951&semt=ais_hybrid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor cupiditate veritatis quasi non aliquam alias similique, laboriosam assumenda voluptates?",
    author: "Aman Bhai"
  },

]
const Testimonial = () => {

  const [data, setData] = useState(0);

  const previous = () => {
    setData((x) => (x === 0 ? testimonials.length - 1 : x - 1))
  }
  const next = () => {
    setData((x) => (x === testimonials.length - 1 ? 0 : x + 1))
  }
  return (
    <div>
      <div>
        <img src={testimonials[data].img} alt="" width={"100px"} height={"100px"} />
        <p>{testimonials[data].text}</p>
        <p>{testimonials[data].author}</p>
      </div>
      <button onClick={previous}>◀</button>

      <button onClick={next}>▶</button>
    </div>
  )
}

export default Testimonial
