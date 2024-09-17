import React from 'react'
import './Object.css'
const Object = ({name,age}) => {

const obj={
    name:"aditya",
    age:"19"
}


  return (<>
    <div className='obj'>{name} {age}</div>
    {/* <div>{obj.age}</div> */}




    </>

  )
}

export default Object
