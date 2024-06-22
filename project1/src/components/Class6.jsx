import React,{useState} from 'react'

export const Class6 = () => {
    const [text, setText] = useState("")


 const upperText = ()=>{
     let uprtext = text.toUpperCase();
     setText(uprtext);
     console.log(uprtext);
 } 
 
 
 const LowerText = ()=>{
     let uprtext = text.toLowerCase();
     setText(uprtext);
     console.log(uprtext);
 }

  return (
    <div className='container'>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>

  <textarea placeholder='Enter Your text here..' class="form-control" onChange={(e)=>setText(e.target.value)} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button className='btn btn-danger' onClick={upperText}>UpperText</button>
<button className='btn btn-primary' onClick={LowerText}>LowerText</button>

<h1>{text}</h1>
<p> <span className='text-danger'>Word</span> : {text.split(" ").length}  AND <span className="text-danger">Char : </span>{text.length}</p>
    </div>
  )
}
