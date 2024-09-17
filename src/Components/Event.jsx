import React, { useState } from 'react'

const Event = () => {
   
  const[count,setcount]=useState(0);
function incre(){
  setcount(count+1);
}
function decre(){
  setcount(count-1);
}

const person=17;


  return (
    <div>
  <h1>{count}</h1>
  <button onClick={incre}> + </button>
  <button onClick={decre}> - </button>


  <p>{person>18?<div>you can drive</div>:<div>underage</div>}</p>


    </div>
  )
}

export default Event