import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
 
    const[data,setdata]=useState([])

useEffect(()=>{

    const fetchdatafromapi=async()=>{
        const api=await fetch('https://jsonplaceholder.typicode.com/todos/');
        const data=await api.json();

    //    console.log(data);
        setdata(data);

    }
    fetchdatafromapi();
},[])



  return (
    <div>
   <li>{data.map((d)=><h3 key={d.id}> {d.title}</h3>)}</li>

    </div>
  )
}

export default FetchAPI