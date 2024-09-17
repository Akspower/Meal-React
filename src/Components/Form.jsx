import React, { useState } from 'react'

 const Form = () => {


const [name,setname]=useState('');
const[email,setemail]=useState('');
const[password,setpassword]=useState('');

const handlesubmit=(e)=>{
e.preventDefault();
alert(`Form Submitted ${name} ${email} ${password}` );
}


  return (
    <div>
 <form >

Name:<input type="text" value={name} onChange={(e)=>{
    setname(e.target.value)
}} placeholder='Enter Name' />

E-mail:<input type="email" value={email} onChange={(e)=>{
    setemail(e.target.value)
}} placeholder='Enter E-mail' />

Password:<input  type="password" onChange={(e)=>{
    setpassword(e.target.value)
}} value={password} placeholder='Enter Password' />

<div >
    <button onClick={handlesubmit} > Submit</button>
</div>


 </form>

 


    </div>
  )
}

export default Form


