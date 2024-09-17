import React,{useState, useEffect} from 'react'

const UseEffect = () => {


    const [count,setcount]=useState(0);
   useEffect(()=>{
    document.title=count;
    console.log("clicked counter");
    
},[count]);


  return (
    <div>
        <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>+</button>
    </div>
  )
}

export default UseEffect