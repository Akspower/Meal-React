import React, { useEffect, useState } from "react";
import Movie from "./MovieZone/Movie";
import FetchAPI from "./Components/FetchAPI";
import  Form from "./Components/Form";
import MultipleInputHandle from "./Components/MultipleInputHandle";
import Meal from "./Food_Recipe/Meal";
import {BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import HomeD from "./pages/HomeD";
import Product from "./pages/Product";

function App(){

 
  return(
<div>
<Movie/>

{/* <Meal/> */}




{/* <UseEffect/> */}

{/* <FetchAPI/> */}

{/* <Form/> */}

{/* <MultipleInputHandle/> */}

{/* <Router>
<Routes>
   */}
{/* <Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route> */}

{/* <Route path="/" element={<HomeD/>}></Route>
<Route path="/product/:id" element={<Product/>}></Route> */}

{/* </Routes>
</Router> */}





  </div>
  );

}
export default App;