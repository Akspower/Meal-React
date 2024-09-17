import React from "react";

function Map(){
 
let product=[
    {id:1,title:'iphone',price:50000},
    {id:2,title:'samsung',price:40000},
    {id:3,title:'asus',price:47000},
    {id:4,title:'oneplus',price:35000}
]



return(
<div>
<p>map</p>
<h3>{product.map((e)=>(
    <li key={e.id}>{e.title}</li>
    ))}</h3>
<p>filter</p>
<ul>
        {product
          .filter((el) => el.price > 42000)
          .map((e) => (
            <li key={e.id}>{e.title} - {e.price}</li>
          ))}
      </ul>

</div>
);



}
export default Map;
