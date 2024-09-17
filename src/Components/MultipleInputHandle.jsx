import React,{useState} from 'react'

const MultipleInputHandle = () => {

const[formdata,setformdata]=useState({
    Name:' ',
    email:' ',
    password:' ',
    age:' '
})
const onchangehandler=(e)=>{
    const {name,value}=e.target 

    setformdata({...formdata,[name]:value})
}

const submithandler=(e)=>{
    e.preventDefault();
    alert(`Done ${formdata.Name} ${formdata.email} ${formdata.age}`)

}


  return (
    <div>

<form action="">
name -  <input value={formdata.Name} name='Name' type="text" onChange={onchangehandler} />

email -  <input value={formdata.email} name='email' type="email" onChange={onchangehandler} />

password -  <input value={formdata.password} name='password' type="password" onChange={onchangehandler} />

age -  <input value={formdata.age} name='age' type="number" onChange={onchangehandler} />

<button onClick={submithandler}>Submit </button>


</form>






    </div>
  )
}

export default MultipleInputHandle
