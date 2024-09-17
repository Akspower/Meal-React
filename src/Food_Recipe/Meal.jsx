import React, { useEffect, useState } from 'react';
import './Meal.css'; 

const Meal = () => {
  const [mealdata, setmealdata] = useState([]);
  const [area, setarea] = useState('Indian');
  const [inputdata, setinput] = useState('');

  useEffect(() => {
    const fetchdata = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
      const data = await api.json();
      setmealdata(data.meals);
    };

    fetchdata();
  }, [area]);

  const submithandler = async (e) => {
    e.preventDefault();

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`);
    const data = await api.json();
    console.log(data.meals);

    setmealdata(data.meals || []); 
  };

  return (
    <>
      <div className="my-3 bg-dark text-center" style={{ width: '1000px', margin: 'auto' }}>
        <form onSubmit={submithandler} className="mx-auto text-center my-3">
          <input 
            value={inputdata}
            onChange={(e) => setinput(e.target.value)} 
            type="text" 
            placeholder="Search for meals..." 
          />
        </form>
        <button type="button" onClick={() => setarea('Indian')} className="btn btn-outline-primary">
          Indian
        </button>
        <button type="button" onClick={() => setarea('Canadian')} className="btn btn-outline-secondary">
          Canadian
        </button>
        <button type="button" onClick={() => setarea('Thai')} className="btn btn-outline-success">
          Thai
        </button>
        <button type="button" onClick={() => setarea('American')} className="btn btn-outline-danger">
          American
        </button>
        <button type="button" onClick={() => setarea('British')} className="btn btn-outline-warning">
          British
        </button>
        <button type="button" onClick={() => setarea('Chinese')} className="btn btn-outline-info">
          Chinese
        </button>
        <button type="button" onClick={() => setarea('Russian')} className="btn btn-outline-light">
          Russian
        </button>
      </div>
      <div className="meal-container">
        {mealdata.length > 0 ? (
          mealdata.map((m) => (
            <div key={m.idMeal} className="meal-item">
              <img src={m.strMealThumb} alt="Meal" />
              <h3>{m.strMeal}</h3>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
    </>
  );
};

export default Meal;





