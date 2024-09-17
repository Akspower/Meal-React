import React, { useState } from 'react'
import {movies} from './data'
import './MovieZone.css';
const Movie = () => {
 const [movieList,setmoviesList]=useState(movies);
 const filterByCategeory=(cat)=>{
    setmoviesList(movies.filter((data)=>data.category==cat))
 }
  return (
    <>
    <div className='my-3 bg-dark text-center ' style={{width:'1000px',margin:'auto'}}>
    <button onClick={()=>setmoviesList(movies)} type="button" className="btn btn-outline-primary">All</button>
<button onClick={()=>filterByCategeory('Action')} type="button" className="btn btn-outline-secondary">Action</button>
<button onClick={()=>filterByCategeory('Thriller')} type="button" className="btn btn-outline-success">Thriller</button>
<button onClick={()=>filterByCategeory('Animation')} type="button" className="btn btn-outline-danger">Animation</button>
<button onClick={()=>filterByCategeory('Horror')} type="button" className="btn btn-outline-warning">Horror</button>
<button onClick={()=>filterByCategeory('Drama')} type="button" className="btn btn-outline-info">Drama</button>
<button onClick={()=>filterByCategeory('Sci-Fi')} type="button" className="btn btn-outline-light">Sci-Fi</button>

</div>
  <div style={{
    display:"flex",
    justifyContent:'center',
    alignContent:'center',
    flexWrap:'wrap',
    gap:'25px',
    textAlign:'center',
    padding:'8px',
    margin:'auto',
    width:'1300px',
    marginTop:'2rem'
  }}>
   {movieList.map((data)=><div key={data.id} style={{maxWidth:'280px'}}> 
   
    <div style={{padding:'10px'}} className='hover_effect'>
        <img src={data.poster_path} alt="" style={{width:'272px',borderRadius:'8px',border:'0.9px dotted red'} } />
    </div>
    <h3>{data.title}</h3>
    <p>{data.release_date}</p>
     </div>)}
  </div>
  </>
  )
}

export default Movie