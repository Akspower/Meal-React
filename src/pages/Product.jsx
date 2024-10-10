import React from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const {id}=useParams();
  return (
    <h4>you can view datail for product {id}</h4>

  )
}

export default Product  