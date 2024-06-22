import React,{useState} from 'react'

export const Class6 = () => {
    const [text, setText] = useState("Enter Your text here..")


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

  <textarea class="form-control" onChange={(e)=>setText(e.target.value)} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<button className='btn btn-danger' onClick={upperText}>UpperText</button>
<button className='btn btn-primary' onClick={LowerText}>LowerText</button>
    </div>
  )
}
